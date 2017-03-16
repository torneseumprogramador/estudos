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
    public partial class FrmCadastro : Form
    {
        public FrmCadastro()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            var nome = txtNome.Text;
            try
            {
                int numero = int.Parse(txtNumero.Text);
            
                if(numero == 2)
                {
                    throw new ErroDeProposito("Erro de propósito");
                }
                else if(numero == 4)
                {
                    throw new Exception("Erro de propósito genérico");
                }
                numero += 100;

                MessageBox.Show("Olá " + nome + ", o valor do numero mais 100 é de: " + numero);
            }
            catch (FormatException errFormat)
            {
                MessageBox.Show("Olá cliente, voce por acaso não digiou letra no lugar de numero aqui ? (" + errFormat.Message + ")");
                txtNumero.Focus();
            }
            catch (ErroDeProposito errProposito)
            {
                MessageBox.Show("Erro de propósito - " + errProposito.StackTrace);
            }
            catch (Exception err)
            {
                MessageBox.Show("Olá cliente, voce por acaso não digiou letra no lugar de numero aqui ? " + err.Message);
            }
            finally
            {
                MessageBox.Show("Todoas as minhas exceções tratadas");
            }
        }

        private void maskedTextBox2_Leave(object sender, EventArgs e)
        {
            if (maskedTextBox2.MaskCompleted)
            {
                MessageBox.Show("valido");
            }
            else
            {
                MessageBox.Show("invalido");
            }
        }

        private void maskedTextBox6_Leave(object sender, EventArgs e)
        {
            if (!maskedTextBox6.MaskCompleted)
            {
                MessageBox.Show("invalido");
            }
        }

        private void maskedTextBox1_Leave(object sender, EventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show(maskedTextBox1.Text);
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Estou buscando no banco de dados com o termo: " + txtBuscaTool.Text);
        }
    }

    public class ErroDeProposito : Exception
    {
        public ErroDeProposito(string erro):base(erro)
        {
        }
    }
}
