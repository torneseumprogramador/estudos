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
    public class Endereco
    {
        private string connectionString;
        public Endereco()
        {
            connectionString = ConfigurationManager.AppSettings["SqlConnection"];
        }

        public void Gravar(string cpf, string logradouro, string numero, string cidade, string estado)
        {
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "insert into enderecos (cpf, logradouro, numero, cidade, estado)values(" + cpf + ", '" + logradouro + "', '" + numero + "', '" + cidade + "', '" + estado + "');";
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public DataTable PorCPF(string cpf)
        {
            using (SqlConnection connection = new SqlConnection(
               connectionString))
            {
                string queryString = "select * from enderecos where cpf='" + cpf + "'";
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
