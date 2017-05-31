using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Database;

namespace Business
{
    public class Usuario : Base
    {
        [OpcoesBase(UsarNoBancoDeDados = true)]
        public string Nome { get; set; }

        [OpcoesBase(UsarNoBancoDeDados = true)]
        public string Telefone { get; set; }

        [OpcoesBase(UsarNoBancoDeDados = true, ChavePrimaria = true, UsarParaBuscar = true)]
        public string CPF { get; set; }

        public List<Endereco> Enderecos
        {
            get
            {
                List<Endereco> enderecos = new List<Endereco>();
                foreach(Database.IBase iBase in new Endereco() { CPF = this.CPF }.Busca())
                {
                    enderecos.Add((Endereco)iBase);
                }
                return enderecos;
            }
        }

        public override string ToString()
        {
            return this.Nome;
        }
    }
}
