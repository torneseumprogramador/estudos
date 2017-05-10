using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace Database
{
    public class Usuario
    {
        private string connectionString;
        public Usuario()
        {
            connectionString = ConfigurationManager.AppSettings["SqlConnection"];
        }

        public void Gravar(string nome, string telefone, string cpf)
        {
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "insert into usuarios (nome, telefone, cpf)values('" + nome + "', '" + telefone + "', '" + cpf + "');";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public DataTable Todos()
        {
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "select * from usuarios";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();

                SqlDataAdapter adapter = new SqlDataAdapter();
                adapter.SelectCommand = command;

                DataTable table = new DataTable();
                adapter.Fill(table);

                return table;
            }
        }

        public DataTable PorCPF(string cpf)
        {
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "select * from usuarios where cpf='" + cpf + "'";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();

                SqlDataAdapter adapter = new SqlDataAdapter();
                adapter.SelectCommand = command;

                DataTable table = new DataTable();
                adapter.Fill(table);

                return table;
            }
        }
    }
}
