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

        public virtual void Salvar()
        {
            using (SqlConnection connection = new SqlConnection(
              connectionString))
            {
                List<string> campos = new List<string>();
                List<string> valores = new List<string>();

                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null && pOpcoesBase.UsarNoBancoDeDados)
                    {
                        campos.Add(pi.Name);
                        valores.Add("'" + pi.GetValue(this) + "'");
                    }
                }

                string queryString = "insert into " + this.GetType().Name + "s (" + string.Join(", ", campos.ToArray()) + ")values(" + string.Join(", ", valores.ToArray()) + ");";
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
                foreach (PropertyInfo pi in this.GetType().GetProperties(BindingFlags.Public))
                {
                    OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                    if (pOpcoesBase != null)
                    {
                        if (pOpcoesBase.ChavePrimaria)
                        {
                            chavePrimaria = pi.Name;
                        }

                        if (pOpcoesBase.UsarNoBancoDeDados)
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
            foreach (PropertyInfo pi in obj.GetType().GetProperties(BindingFlags.Public))
            {
                OpcoesBase pOpcoesBase = (OpcoesBase)pi.GetCustomAttribute(typeof(OpcoesBase));
                if (pOpcoesBase != null && pOpcoesBase.UsarNoBancoDeDados)
                {
                    pi.SetValue(obj, reader[pi.Name].ToString());
                }
            }
        }
    }
}
