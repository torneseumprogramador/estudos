using Classes;
using Componentes;
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
            Menu.Criar();
        }
    }
}

#region "Códigos antigos para teste"

/*class Animal
    {
        public string teste;

        public virtual string teste2()
        {
            return "";
        }
    }

    class Macaco : Animal
    {
        public override string teste2()
        {
            return "sss";
        }
    }
    
    partial class Animal
    {
        public string teste;
        partial void tt();
    }

    partial class Animal
    {
        public string teste2;
        partial void tt()
        {
            Console.Write("teste");
        }
    }
    */


/*Email.Instancia.Corpo = "bal bla bla";
Email.Instancia.Titulo = "Titulo do email";
Email.Instancia.Origin = "danilo@beminfinito.com.br";
Email.Instancia.Destino = "danilo@beminfinito.com.br";

Email.Instancia.EnviarEmail();

var a = new Animal();

a.teste = "";

var c = new Cachorro();
c.Idade = 1;
Console.WriteLine(c.Idade);

c.Idade2 = 1;

Console.WriteLine(c.Idade2);

c.SetIdade2(2);
c.GetIdade2();
*/

/*
var cachorro = new Classes.Cachorro();
cachorro.Latir();
//Menu.Criar();

Console.WriteLine("===========Cadastro de cliente=====================");
Cliente c = new Cliente();
c.Nome = "Cliente";
c.Telefone = "23223";
c.CPF = "3333";
c.Gravar();
foreach (Cliente cl in new Cliente().Ler())
{
    Console.WriteLine(cl.Nome);
    Console.WriteLine(cl.Telefone);
    Console.WriteLine(cl.CPF);
    Console.WriteLine("================================");
}

Console.WriteLine("==============Cadastro de usuario==================");
Usuario u = new Usuario();
u.Nome = "Usuario";
u.Telefone = "23223";
u.CPF = "3333";
u.Gravar();
foreach (Usuario us in new Usuario().Ler())
{
    Console.WriteLine(us.Nome);
    Console.WriteLine(us.Telefone);
    Console.WriteLine(us.CPF);
    Console.WriteLine("================================");
}

/*Ferramentas f = new Ferramentas();
bool d = f.ValidarCPF("sddsds");

Cliente c = new Cliente();
c.CalcularUmMaisDois4();
Console.WriteLine("===========Cadastro de usuario=====================");

*/
#endregion