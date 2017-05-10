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
using BusinessModel;

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
            loadAll();
        }

        private void loadAll()
        {
            cboUsuario.DataSource = cboComboBusca.DataSource = Usuario.Todos();
        }

        private void btnEndereco_Click(object sender, EventArgs e)
        {
            var endereco = new EnderecoModel();
            endereco.CPF = ((UsuarioModel)cboUsuario.SelectedValue).CPF;
            endereco.Logradouro = txtLogradouro.Text;
            endereco.Numero = txtNumero.Text;
            endereco.Cidade = txtCidade.Text;
            endereco.Estado = txtEstado.Text;
            Endereco.Gravar(endereco);

            MessageBox.Show("Endereco salvo para usuário " + cboUsuario.SelectedValue + " com sucesso");
        }

        private void btnBuscar_Click(object sender, EventArgs e)
        {
            var usuario = (UsuarioModel)cboComboBusca.SelectedValue;
            lblNome.Text = "Nome: " + usuario.Nome;
            lblTelefone.Text = "Teletone: " + usuario.Telefone;
            lblCPF.Text = "CPF: " + usuario.CPF;
            gridEnderecos.DataSource = Endereco.PorCPF(usuario.CPF);
        }

        private void btnGravar_Click_1(object sender, EventArgs e)
        {
            var usuario = new UsuarioModel();
            usuario.Nome = txtNome.Text;
            usuario.Telefone = txtTelefone.Text;
            usuario.CPF = txtCPF.Text;
            Usuario.Gravar(usuario);

            MessageBox.Show("Usuário salvo com sucesso");
        }
    }
}
