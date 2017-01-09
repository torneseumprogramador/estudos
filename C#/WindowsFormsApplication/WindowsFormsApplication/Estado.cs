using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsApplication
{
    public class Estado
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }

        public override string ToString()
        {
            return this.Nome;
        }

        public static List<Estado> Lista()
        {
            var lista = new List<Estado>();
            var e1 = new Estado();
            e1.Id = 1;
            e1.Nome = "SP";

            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 2;
            e1.Nome = "RJ";
            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 3;
            e1.Nome = "MG";
            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 4;
            e1.Nome = "GO";
            lista.Add(e1);

            return lista;
        }
    }

}
