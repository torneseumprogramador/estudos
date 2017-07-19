using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public interface IBase
    {
        int Key { get; }
        void Salvar();
        void Excluir();
        void CriarTabela();
        List<IBase> Todos();
        List<IBase> Busca();
    }
}
