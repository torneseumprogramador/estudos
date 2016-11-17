using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication
{
    public class Estado
    {
        public int Id;
        public string Nome;

        public override string ToString()
        {
            return this.Nome;
        }

        public static List<Estado> Lista()
        {
            var lista = new List<Estado>();
            var e1 = new Estado();
            e1.Id = 1;
            e1.Nome = "SP";

            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 2;
            e1.Nome = "RJ";
            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 3;
            e1.Nome = "MG";
            lista.Add(e1);

            e1 = new Estado();
            e1.Id = 4;
            e1.Nome = "GO";
            lista.Add(e1);

            return lista;
        }
    }

    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            txtResultado.Text = "Olá danilo este é o seu primeiro programa - " + ((Estado)cboEstados.SelectedItem).Id;
        }

        private void btnAbrir_Click(object sender, EventArgs e)
        {
            var form = new FrmShow();
            form.lblMensagem.Text = txtResultado.Text;
            form.Show();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            cboEstados.Items.Clear();
            foreach (Estado estado in Estado.Lista())
            {
                cboEstados.Items.Add(estado);
            }
        }
    }
}
