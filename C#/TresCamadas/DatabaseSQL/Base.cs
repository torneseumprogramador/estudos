using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;

namespace DatabaseSQL
{
    public abstract class Base : IPessoa
    {
        public Base(string nome, string telefone, string cpf)
        {
            this.Nome = nome;
            this.Telefone = telefone;
            this.CPF = cpf;
        }

        public Base() { }

        public string Nome;
        public string Telefone;
        public string CPF;

        public void SetNome(string nome) { this.Nome = nome; }
        public void SetTelefone(string telefone) { this.Telefone = telefone; }
        public void SetCPF(string cpf) { this.CPF = cpf; }

        public virtual void Gravar()
        {
            string connectionString = ConfigurationManager.AppSettings["SqlConnection"];
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "insert into " + this.GetType().Name + "s (nome, telefone, cpf)values('" + this.Nome + "', '" + this.Telefone + "', '" + this.CPF + "');";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }
    }
}
