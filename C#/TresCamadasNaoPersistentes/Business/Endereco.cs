using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessModel;
using System.Data;

namespace Business
{
    public class Endereco
    {
        public static void Gravar(EnderecoModel endereco)
        {
            new Database.Endereco().Gravar(endereco.CPF, endereco.Logradouro, endereco.Numero, endereco.Cidade, endereco.Estado);
        }

        public static List<EnderecoModel> PorCPF(string cpf)
        {
            var list = new List<EnderecoModel>();
            var tabela = new Database.Endereco().PorCPF(cpf);
            if (tabela.Rows.Count > 0)
            {
                foreach (DataRow row in tabela.Rows)
                {
                    list.Add(new EnderecoModel()
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
