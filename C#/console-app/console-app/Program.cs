using Classes;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tela;

namespace console_app
{
    class Program
    {
        static void Main(string[] args)
        {
            //Menu.Criar();

            Console.WriteLine("===========Cadastro de cliente=====================");
            Cliente c = new Cliente();
            c.Nome = "Danilo 2";
            c.Telefone = "23223";
            c.CPF = "3333";
            c.Gravar();
            foreach (Cliente cl in Cliente.LerClientes())
            {
                Console.WriteLine(cl.Nome);
                Console.WriteLine(cl.Telefone);
                Console.WriteLine(cl.CPF);
                Console.WriteLine("================================");
            }

            Console.WriteLine("===========Cadastro de usuario=====================");
            Usuario u = new Usuario();
            u.Nome = "Danilo 2";
            u.Telefone = "23223";
            u.CPF = "3333";
            u.Gravar();
            foreach(Usuario us in Usuario.LerUsuarios())
            {
                Console.WriteLine(us.Nome);
                Console.WriteLine(us.Telefone);
                Console.WriteLine(us.CPF);
                Console.WriteLine("================================");
            }
        }
    }
}
