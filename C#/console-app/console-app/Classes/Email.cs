using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Email
    {
        private Email() { }

        private static Email instancia;

        public string Origin;
        public string Destino;
        public string Titulo;
        public string Corpo;

        public void EnviarEmail()
        {
            Console.WriteLine("Enviando email para: " + Destino + "\nCom o titulo: " + Titulo + "\nCorpo: " + Corpo);
        }

        public static Email Instancia
        {
            get
            {
                if(instancia == null)
                {
                    instancia = new Email();
                }

                return instancia;
            }
        }
    }
}
