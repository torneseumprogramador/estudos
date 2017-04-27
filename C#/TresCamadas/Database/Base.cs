using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseTXT
{
    public abstract class Base : IPessoa
    {
        public Base(string nome, string telefone, string cpf)
        {
            this.Nome = nome;
            this.Telefone = telefone;
            this.CPF = cpf;
        }

        public Base() { }

        public string Nome;
        public string Telefone;
        public string CPF;

        public void SetNome(string nome) { this.Nome = nome; }
        public void SetTelefone(string telefone) { this.Telefone = telefone; }
        public void SetCPF(string cpf) { this.CPF = cpf; }

        private string sobrenome = "Santos";

        public virtual void Gravar()
        {
            var dados = this.Ler();
            dados.Add(this);
            
            StreamWriter r = new StreamWriter(diretorioComArquivo());
            r.WriteLine("nome;telefone;cpf;");
            foreach (Base b in dados)
            {
                var linha = b.Nome + ";" + b.Telefone + ";" + b.CPF + ";";
                r.WriteLine(linha);
            }
            r.Close();
        }

        public virtual List<IPessoa> Ler()
        {
            var dados = new List<IPessoa>();
            if (File.Exists(diretorioComArquivo()))
            {
                using (StreamReader arquivo = File.OpenText(diretorioComArquivo()))
                {
                    string linha;
                    int i = 0;
                    while ((linha = arquivo.ReadLine()) != null)
                    {
                        i++;
                        if (i == 1) continue;
                        var baseArquivo = linha.Split(';');

                        var b = (IPessoa)Activator.CreateInstance(this.GetType());
                        b.SetNome(baseArquivo[0]);
                        b.SetTelefone(baseArquivo[1]);
                        b.SetCPF(baseArquivo[2]);
                        dados.Add(b);
                    }
                }
            }
            return dados;
        }

        internal string diretorioComArquivo()
        {
            return ConfigurationManager.AppSettings["CaminhoArquivos"] + this.GetType().Name + ".txt";
        }

        public virtual void Olhar()
        {
            Console.WriteLine("O cliente " + this.Nome + " " + this.sobrenome + " está olhando para mim");
        }

        protected int CalcularUmMaisDois()
        {
            return 1 + 2;
        }

        private int CalcularUmMaisDois2()
        {
            return 1 + 2;
        }

        public int CalcularUmMaisDois3()
        {
            return 1 + 2;
        }

        internal int CalcularUmMaisDois4()
        {
            return 1 + 2;
        }

    }
}
