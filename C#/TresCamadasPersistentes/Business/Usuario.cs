using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace Business
{
    public class Usuario
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string CPF { get; set; }
        public List<Endereco> Enderecos
        {
            get
            {
                return Endereco.PorCPF(this.CPF);
            }
        }

        public override string ToString()
        {
            return this.Nome;
        }

        public void Gravar()
        {
            new Database.Usuario().Gravar(this.Nome, this.Telefone, this.CPF);
        }

        public static List<Usuario> Todos()
        {
            var list = new List<Usuario>();
            var tabela = new Database.Usuario().Todos();
            if (tabela.Rows.Count > 0)
            {
                foreach(DataRow row in tabela.Rows)
                {
                    list.Add(new Usuario() {
                        CPF = row["cpf"].ToString(),
                        Telefone = row["telefone"].ToString(),
                        Nome = row["nome"].ToString()
                    });
                }
            }
            return list;
        }
    }
}
