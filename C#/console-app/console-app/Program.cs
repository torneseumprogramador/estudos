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

            var clientes = Cliente.LerClientes();

            var cliente = new Cliente();
            cliente.Nome = "danilo";
            cliente.Telefone = "21128398373";
            cliente.CPF = "2187987493";
            cliente.Gravar();

            /*
            var cliente2 = new Cliente();
            cliente2.Telefone = "3232323223";
            cliente2.CPF = "121322323";
            cliente2.Nome = "Sheila";
            cliente2.Gravar();
            */



        }
    }
}
