using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Reflection;

namespace Database
{
    public class Base : IBase
    {
        private string connectionString = ConfigurationManager.AppSettings["SqlConnection"];

        public int Key
        {
            get
            {
                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null && pOpcoesBase.ChavePrimaria)
                    {
                        return Convert.ToInt32(pi.GetValue(this));
                    }
                }
                return 0;
            }
        }

        private string tipoPropriedade(PropertyInfo pi)
        {
            switch (pi.PropertyType.Name)
            {
                case "Int32":
                    return "int";
                case "Int64":
                    return "bigint";
                case "Double":
                    return "decimal(9, 2)";
                case "Single":
                    return "float";
                case "DateTime":
                    return "datetime";
                case "Boolean":
                    return "tinyint";
                default:
                    return "varchar(255)";
            }
        }

        public virtual void CriarTabela()
        {
            using (SqlConnection connection = new SqlConnection(
                         connectionString))
            {
                string chavePrimaria = "";
                List<string> campos = new List<string>();

                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null && pOpcoesBase.UsarNoBancoDeDados && !pOpcoesBase.AutoIncrementar)
                    {
                        if (pOpcoesBase.ChavePrimaria)
                        {
                            chavePrimaria = pi.Name + " int identity, ";
                        }
                        else
                        {
                            campos.Add(pi.Name + " " + tipoPropriedade(pi) + " ");
                        }
                    }
                }

                string tabelaExiste = "IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[" + this.GetType().Name + "s]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)" +
                                    "DROP TABLE " + this.GetType().Name + "s";
                SqlCommand command = new SqlCommand(tabelaExiste, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();

                string queryString =  "CREATE TABLE " + this.GetType().Name + "s (";
                queryString += chavePrimaria;
                queryString += string.Join(",", campos.ToArray());
                queryString += "); ";

                command = new SqlCommand(queryString, connection);
                command.ExecuteNonQuery();
            }
        }


        public virtual void Salvar()
        {
            using (SqlConnection connection = new SqlConnection(
              connectionString))
            {
                List<string> campos = new List<string>();
                List<string> valores = new List<string>();

                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null && pOpcoesBase.UsarNoBancoDeDados && !pOpcoesBase.AutoIncrementar)
                    {
                        if(this.Key == 0)
                        {
                            if (!pOpcoesBase.ChavePrimaria)
                            {
                                campos.Add(pi.Name);

                                if (pi.PropertyType.Name == "Double")
                                {
                                    valores.Add("'" + pi.GetValue(this).ToString().Replace(".", "").Replace(",", ".") + "'");
                                }
                                else
                                {
                                    valores.Add("'" + pi.GetValue(this) + "'");
                                }
                            }
                        }
                        else
                        {
                            if (!pOpcoesBase.ChavePrimaria)
                            {
                                valores.Add(" " + pi.Name + " = '" + pi.GetValue(this) + "'");
                            }
                        }
                    }
                }

                string queryString = string.Empty;

                if (this.Key == 0)
                {
                    queryString = "insert into " + this.GetType().Name + "s (" + string.Join(", ", campos.ToArray()) + ")values(" + string.Join(", ", valores.ToArray()) + ");";
                }
                else
                {
                    queryString = "update " + this.GetType().Name + "s  set " + string.Join(", ", valores.ToArray()) + " where id = " + this.Key + ";";
                }
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public virtual void Excluir()
        {
            using (SqlConnection connection = new SqlConnection(
              connectionString))
            {
                string queryString = "delete from " + this.GetType().Name + "s where id = " + this.Key + "; ";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public virtual List<IBase> Todos()
        {
            var list = new List<IBase>();
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "select * from " + this.GetType().Name + "s";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();

                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    var obj = (IBase)Activator.CreateInstance(this.GetType());
                    setProperty(ref obj, reader);
                    list.Add(obj);
                }
            }
            return list;
        }

        public virtual List<IBase> Busca()
        {
            var list = new List<IBase>();
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                List<string> where = new List<string>();
                string chavePrimaria = string.Empty;
                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null)
                    {
                        if (pOpcoesBase.ChavePrimaria)
                        {
                            chavePrimaria = pi.Name;
                        }

                        if (pOpcoesBase.UsarParaBuscar)
                        {
                            var valor = pi.GetValue(this);
                            if (valor != null)
                            {
                                where.Add(pi.Name + " = '" + valor + "'");
                            }
                        }
                    }
                }

                string queryString = "select * from " + this.GetType().Name + "s where " + chavePrimaria + " is not null";
                if (where.Count > 0)
                {
                    queryString += " and " + string.Join(" and ", where.ToArray());
                }

                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();

                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    var obj = (IBase)Activator.CreateInstance(this.GetType());
                    setProperty(ref obj, reader);
                    list.Add(obj);
                }
            }
            return list;
        }

        private void setProperty(ref IBase obj, SqlDataReader reader)
        {
            foreach (PropertyInfo pi in obj.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                if (pOpcoesBase != null && pOpcoesBase.UsarNoBancoDeDados)
                {
                    pi.SetValue(obj, reader[pi.Name]);
                }
            }
        }
    }
}
