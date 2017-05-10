using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace Business
{
    public class Endereco
    {
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string CPF { get; set; }

        public void Gravar()
        {
            new Database.Endereco().Gravar(this.CPF, this.Logradouro, this.Numero, this.Cidade, this.Estado);
        }

        public static List<Endereco> PorCPF(string cpf)
        {
            var list = new List<Endereco>();
            var tabela = new Database.Endereco().PorCPF(cpf);
            if (tabela.Rows.Count > 0)
            {
                foreach (DataRow row in tabela.Rows)
                {
                    list.Add(new Endereco()
                    {
                        CPF = row["cpf"].ToString(),
                        Logradouro = row["logradouro"].ToString(),
                        Numero = row["numero"].ToString(),
                        Cidade = row["cidade"].ToString(),
                        Estado = row["estado"].ToString()
                    });
                }
            }
            return list;
        }
    }
}
