using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Business;

namespace TresCamadas
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            var carro = new Carro();
            //carro.CriarTabela();
            carro.Nome = "Fiesta 2";
            carro.Marca = "Ford";
            carro.Quantidade = 2;
            carro.Valor = 25000.50;
            carro.Salvar();

            loadAll();
        }

        private void loadAll()
        {
            dgUsuarios.AutoGenerateColumns = false;
            dgUsuarios.DataSource = cboUsuario.DataSource = cboComboBusca.DataSource = new Usuario().Todos();
        }

        private void btnEndereco_Click(object sender, EventArgs e)
        {
            var endereco = new Endereco();
            endereco.CPF = ((Usuario)cboUsuario.SelectedValue).CPF;
            endereco.Logradouro = txtLogradouro.Text;
            endereco.Numero = txtNumero.Text;
            endereco.Cidade = txtCidade.Text;
            endereco.Estado = txtEstado.Text;
            endereco.Salvar();

            MessageBox.Show("Endereco salvo para usuário " + cboUsuario.SelectedValue + " com sucesso");
        }

        private void btnBuscar_Click(object sender, EventArgs e)
        {
            var usuario = (Usuario)cboComboBusca.SelectedValue;
            lblNome.Text = "Nome: " + usuario.Nome;
            lblTelefone.Text = "Teletone: " + usuario.Telefone;
            lblCPF.Text = "CPF: " + usuario.CPF;
            gridEnderecos.DataSource = usuario.Enderecos;
        }

        private void btnGravar_Click_1(object sender, EventArgs e)
        {
            var usuario = new Usuario();
            if(txtId.Text != "")
            {
                usuario.Id = int.Parse(txtId.Text);
            }
            usuario.Nome = txtNome.Text;
            usuario.Telefone = txtTelefone.Text;
            usuario.CPF = txtCPF.Text;
            usuario.Salvar();
            limparCampos();
            loadAll();
            MessageBox.Show("Usuário salvo com sucesso");
        }

        private void dgUsuarios_CellDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
            Usuario usuario = ((Usuario)dgUsuarios.Rows[e.RowIndex].DataBoundItem);
            txtNome.Text = usuario.Nome;
            txtTelefone.Text = usuario.Telefone;
            txtCPF.Text = usuario.CPF;
            txtId.Text = usuario.Id.ToString();
            btnGravar.Text = "Alterar";
        }

        private void limparCampos()
        {
            txtNome.Text = string.Empty;
            txtTelefone.Text = string.Empty;
            txtCPF.Text = string.Empty;
            txtId.Text = string.Empty;
            btnGravar.Text = "Gravar";
        }

        private void btnExcluir_Click(object sender, EventArgs e)
        {
            var retorno = MessageBox.Show("Tem certeza que deseja excluir", "Excluir", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (retorno.Equals(DialogResult.Yes))
            {
                foreach (DataGridViewCell cell in dgUsuarios.SelectedCells)
                {
                    Usuario usuario = ((Usuario)dgUsuarios.Rows[cell.RowIndex].DataBoundItem);
                    usuario.Excluir();
                }

                foreach (DataGridViewRow row in dgUsuarios.SelectedRows)
                {
                    Usuario usuario = ((Usuario)row.DataBoundItem);
                    usuario.Excluir();
                }
            }

            loadAll();
        }
    }
}
