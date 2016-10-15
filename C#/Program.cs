using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Media
{
    class Program
    {
        static void Main(string[] args)
        {
            media();
            matrizLinhasColunas();
            escala();
        }

        public static void matrizLinhasColunas()
        {
            Console.WriteLine("Digite a quantidade de linhas");
            int linhas = int.Parse(Console.ReadLine());
            Console.WriteLine("Digite quantidade de colunas");
            int colunas = int.Parse(Console.ReadLine());

            for (int i = 0; i < linhas; i++)
            {
                if (i % 2 == 0)
                {
                    for (int x = colunas - 1; x > -1; x--)
                    {
                        Console.Write(x + " ");
                    }
                }
                else
                {
                    for (int x = 0; x < colunas; x++)
                    {
                        Console.Write(x + " ");
                    }
                }
                Console.Write("\n");
            }
        }

        public static void escala()
        {
            Console.WriteLine("Digite uma das escalas de temperatura abaixo");
            Console.WriteLine("1 - Celsius");
            Console.WriteLine("2 - Kelvin");
            Console.WriteLine("3 - Fahrenheit");
            int escala = int.Parse(Console.ReadLine());
            if(escala < 1 || escala > 3)
            {
                Console.WriteLine("Opção inválida");
            }
            else
            {
                string temp = "";
                switch (escala)
                {
                    case 1:
                        temp = "Celsius";
                        break;
                    case 2:
                        temp = "Kelvin";
                        break;
                    default:
                        temp = "Fahrenheit";
                        break;
                }
                
                Console.WriteLine("Digite a temperatura em " + temp);
                double temperatura = double.Parse(Console.ReadLine());
                if(temperatura > 0)
                {
                    Console.WriteLine("Temperaturas válidas são aquelas que estão abaixo de zero graus");
                }
                else
                {
                    if(escala == 1)
                    {
                        int tempC = 33;
                        double tempK = 33 + 273.15;
                        double tempF = ((9 / 5) * temperatura) + 32;
                        Console.WriteLine("Resumo das escalas:");
                        Console.WriteLine("Celsius    : " + tempC);
                        Console.WriteLine("Kelvin     : " + tempK);
                        Console.WriteLine("Fahrenheit : " + tempF);
                    }
                    else if(escala == 2)
                    {
                        int tempK = 33;
                        double tempC = 33 - 273.15;
                        double tempF = ((9 / 5) * tempC) + 32;
                        Console.WriteLine("Resumo das escalas:");
                        Console.WriteLine("Celsius    : " + tempC);
                        Console.WriteLine("Kelvin     : " + tempK);
                        Console.WriteLine("Fahrenheit : " + tempF);
                    }
                    else
                    {
                        int tempF = 33;
                        double tempC = (5 / 9) * (33 - 32);
                        double tempK = tempC + 273.15;
                        Console.WriteLine("Resumo das escalas:");
                        Console.WriteLine("Celsius    : " + tempC);
                        Console.WriteLine("Kelvin     : " + tempK);
                        Console.WriteLine("Fahrenheit : " + tempF);
                    }
                }

            }


        }

        public static void media()
        {
            string sair = "n";
            do
            {
                Console.WriteLine("Por favor, indique uma série de inteiros. E nagativo para sair");
                int somaNumeros = 0;
                int quantidade = 0;
                int maiorNumero = 0;
                while (true)
                {
                    int numero = int.Parse(Console.ReadLine());
                    if (numero < 0)
                    {
                        break;
                    }

                    if (numero > maiorNumero)
                    {
                        maiorNumero = numero;
                    }

                    somaNumeros += numero;
                    quantidade++;
                }

                Console.WriteLine("O maior número é: " + maiorNumero);
                Console.WriteLine("A media para os numeros digitados é: " + (somaNumeros / quantidade));
                Console.WriteLine("Digite y para sair ou n para fazer novamente.");
                sair = Console.ReadLine();
            }
            while (sair == "n");
        }
    }
}
