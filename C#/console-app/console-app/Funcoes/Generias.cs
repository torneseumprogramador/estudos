using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Funcoes
{
    class Generias
    {
        //PacalCase
        //camelCase
        //under_line
        public int CalcularSoma2()
        {
            int a = 1;
            int b = 2;
            int c = a + b;
            return c;
        }

        public static int CalcularSoma()
        {
            int a = 1;
            int b = 2;
            int c = a + b;
            return c;
        }

        public static void MostrarMensagemNaTela()
        {
            Console.WriteLine("Ola pessoal");
        }
    }
}
