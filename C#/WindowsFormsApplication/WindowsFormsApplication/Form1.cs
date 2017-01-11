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
            /***************************************/
            cboEstados.DataSource = Estado.Lista();
            cboEstados.Text = "[Selecione]";

            /*
            cboEstados.Items.Clear();
            foreach (Estado estado in Estado.Lista())
            {
                cboEstados.Items.Add(estado);
            }*/

            /***************************************/

            // maneria simples de utilizar
            //dataGridView1.DataSource = Estado.Lista();

            /*
            // maneria complexa de utilizar
            dataGridView.ColumnCount = 2;
            dataGridView.Columns[0].Name = "Id";
            dataGridView.Columns[1].Name = "Nome";

            var rows = new List<string[]>();
            foreach (Estado estado in Estado.Lista())
            {
                string[] row1 = new string[] { estado.Id.ToString(), estado.Nome };
                rows.Add(row1);
            }

            foreach (string[] rowArray in rows)
            {
                dataGridView.Rows.Add(rowArray);
            }
            */


            // maneria intermediária de utilizar
            //utilizando Link
            var data = from estado in Estado.Lista()
                        //where estado.Id == 1 || estado.Id == 2
                        //orderby estado.Nome
                        select new
                        {
                            Id = estado.Id,
                            Nome = estado.Nome
                        };

            dataGridView.DataSource = data.ToList();

            
        }

        private void novoTextoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new FrmTexto().Show();
        }

        private void sairToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void sobreToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new FrmSobre().Show();
        }

        private void licençaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new FrmLicenca().Show();
        }

        private void doaçãoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new FrmDoacao().Show();
        }
    }
}
