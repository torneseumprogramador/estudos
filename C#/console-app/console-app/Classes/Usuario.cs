using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Usuario : Cliente
    {
        public Usuario(string nome, string telefone, string cpf)
        {
            this.Nome = nome;
            this.Telefone = telefone;
            this.CPF = cpf;
        }

        public Usuario() { }

        private static string caminhoBase()
        {
            return ConfigurationManager.AppSettings["BaseDeUsuarios"];
        }

        public override void Olhar()
        {
            int resultado = this.CalcularUmMaisDois();
            //this.CalcularUmMaisDois4();
            Console.WriteLine("O usuario " + this.Nome + " não tem o sobrenome, pois este é atributo da clase pai, está olhando para mim");
            Console.WriteLine("====================================");
            Console.WriteLine("O método original é:");
            base.Olhar();
        }

        public override void Gravar()
        {
            var usuario = Usuario.LerUsuarios();
            usuario.Add(this);
            if (File.Exists(caminhoBase()))
            {
                StreamWriter r = new StreamWriter(caminhoBase());
                r.WriteLine("nome;telefone;cpf;");
                foreach (Usuario c in usuario)
                {
                    var linha = c.Nome + ";" + c.Telefone + ";" + c.CPF + ";";
                    r.WriteLine(linha);
                }
                r.Close();
            }
        }

        public static List<Usuario> LerUsuarios()
        {
            var usuarios = new List<Usuario>();
            if (File.Exists(caminhoBase()))
            {
                using (StreamReader arquivo = File.OpenText(caminhoBase()))
                {
                    string linha;
                    int i = 0;
                    while ((linha = arquivo.ReadLine()) != null)
                    {
                        i++;
                        if (i == 1) continue;
                        var usuarioArquivo = linha.Split(';');

                        var usuario = new Usuario(usuarioArquivo[0], usuarioArquivo[1], usuarioArquivo[2]);
                        usuarios.Add(usuario);
                    }
                }
            }
            return usuarios;
        }
    }
}
