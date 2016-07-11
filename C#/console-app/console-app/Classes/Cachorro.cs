using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Cachorro : Animal
    {
        public int Idade;

        private int idadePreDefinida = 2;

        public int Idade2
        {
            get
            {
                return idadePreDefinida;
            }
            set
            {
                idadePreDefinida = value;
            }
        }

        public int GetIdade2()
        {
            return idadePreDefinida;
        }

        public void SetIdade2(int idade2)
        {
            idadePreDefinida = idade2;
        }

        public override void Latir()
        {
            Console.WriteLine("Au eu sou um cachorrinho");
        }
    }
}
