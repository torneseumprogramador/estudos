using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication
{
    public partial class DadosDaEmpresa : UserControl
    {
        public DadosDaEmpresa()
        {
            InitializeComponent();
        }

        public string Busca;

        private void btnVisitar_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("chrome", "http://www.torneseumprogramador.com.br/busca?q=" + Busca);
        }

        private void DadosDaEmpresa_Load(object sender, EventArgs e)
        {

        }
    }
}
