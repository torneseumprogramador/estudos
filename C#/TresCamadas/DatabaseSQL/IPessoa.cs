using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseSQL
{
    public interface IPessoa
    {
        void SetNome(string nome);
        void SetTelefone(string telefone);
        void SetCPF(string cpf);
        void Gravar();
    }
}
