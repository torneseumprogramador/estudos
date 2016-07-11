using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Componentes
{
    public class Ferramentas
    {
        internal string MerodoSomenteParaMeuAssembly()
        {
            return "Este método só pode ser acessado dentro deste assembly compenentes";
        }

        public string MerodoParaTodosQueUtilizarOAssembly()
        {
            return "Este método para todos";
        }

        public bool ValidarCPF(string cpf)
        {
            return true;
        }
    }
}
