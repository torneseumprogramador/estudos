using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public abstract class Animal
    {
        public string Coleira;
        public string Pelo;
        public string Olhos;

        public abstract void Latir();

        public string Correr()
        {
            return "animal está correndo";
        }
    }
}
