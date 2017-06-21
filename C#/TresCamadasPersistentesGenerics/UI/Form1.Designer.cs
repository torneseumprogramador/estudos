namespace TresCamadas
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tabs = new System.Windows.Forms.TabControl();
            this.Usuario = new System.Windows.Forms.TabPage();
            this.btnGravar = new System.Windows.Forms.Button();
            this.txtCPF = new System.Windows.Forms.MaskedTextBox();
            this.txtTelefone = new System.Windows.Forms.MaskedTextBox();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.Endereco = new System.Windows.Forms.TabPage();
            this.txtNumero = new System.Windows.Forms.TextBox();
            this.numero = new System.Windows.Forms.Label();
            this.txtCidade = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.txtEstado = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.cboUsuario = new System.Windows.Forms.ComboBox();
            this.txtLogradouro = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.btnEndereco = new System.Windows.Forms.Button();
            this.label6 = new System.Windows.Forms.Label();
            this.Resultado = new System.Windows.Forms.TabPage();
            this.gridEnderecos = new System.Windows.Forms.DataGridView();
            this.lblCPF = new System.Windows.Forms.Label();
            this.lblTelefone = new System.Windows.Forms.Label();
            this.lblNome = new System.Windows.Forms.Label();
            this.btnBuscar = new System.Windows.Forms.Button();
            this.cboComboBusca = new System.Windows.Forms.ComboBox();
            this.label8 = new System.Windows.Forms.Label();
            this.dgUsuarios = new System.Windows.Forms.DataGridView();
            this.Nome = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Telefone = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.CPF = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.txtId = new System.Windows.Forms.TextBox();
            this.btnExcluir = new System.Windows.Forms.Button();
            this.tabs.SuspendLayout();
            this.Usuario.SuspendLayout();
            this.Endereco.SuspendLayout();
            this.Resultado.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridEnderecos)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgUsuarios)).BeginInit();
            this.SuspendLayout();
            // 
            // tabs
            // 
            this.tabs.Controls.Add(this.Usuario);
            this.tabs.Controls.Add(this.Endereco);
            this.tabs.Controls.Add(this.Resultado);
            this.tabs.Location = new System.Drawing.Point(12, 12);
            this.tabs.Name = "tabs";
            this.tabs.SelectedIndex = 0;
            this.tabs.Size = new System.Drawing.Size(587, 695);
            this.tabs.TabIndex = 7;
            // 
            // Usuario
            // 
            this.Usuario.Controls.Add(this.btnExcluir);
            this.Usuario.Controls.Add(this.txtId);
            this.Usuario.Controls.Add(this.dgUsuarios);
            this.Usuario.Controls.Add(this.btnGravar);
            this.Usuario.Controls.Add(this.txtCPF);
            this.Usuario.Controls.Add(this.txtTelefone);
            this.Usuario.Controls.Add(this.txtNome);
            this.Usuario.Controls.Add(this.label3);
            this.Usuario.Controls.Add(this.label2);
            this.Usuario.Controls.Add(this.label1);
            this.Usuario.Location = new System.Drawing.Point(4, 22);
            this.Usuario.Name = "Usuario";
            this.Usuario.Padding = new System.Windows.Forms.Padding(3);
            this.Usuario.Size = new System.Drawing.Size(579, 669);
            this.Usuario.TabIndex = 0;
            this.Usuario.Text = "Usuario";
            this.Usuario.UseVisualStyleBackColor = true;
            // 
            // btnGravar
            // 
            this.btnGravar.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnGravar.Location = new System.Drawing.Point(15, 227);
            this.btnGravar.Name = "btnGravar";
            this.btnGravar.Size = new System.Drawing.Size(98, 49);
            this.btnGravar.TabIndex = 12;
            this.btnGravar.Text = "Gravar";
            this.btnGravar.UseVisualStyleBackColor = true;
            this.btnGravar.Click += new System.EventHandler(this.btnGravar_Click_1);
            // 
            // txtCPF
            // 
            this.txtCPF.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtCPF.Location = new System.Drawing.Point(133, 138);
            this.txtCPF.Mask = "000.000.000.00";
            this.txtCPF.Name = "txtCPF";
            this.txtCPF.Size = new System.Drawing.Size(154, 29);
            this.txtCPF.TabIndex = 11;
            // 
            // txtTelefone
            // 
            this.txtTelefone.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtTelefone.Location = new System.Drawing.Point(133, 92);
            this.txtTelefone.Mask = "(99) 0000-0000";
            this.txtTelefone.Name = "txtTelefone";
            this.txtTelefone.Size = new System.Drawing.Size(154, 29);
            this.txtTelefone.TabIndex = 10;
            // 
            // txtNome
            // 
            this.txtNome.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNome.Location = new System.Drawing.Point(133, 54);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(369, 29);
            this.txtNome.TabIndex = 9;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(11, 138);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(52, 24);
            this.label3.TabIndex = 8;
            this.label3.Text = "CPF:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(11, 97);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(90, 24);
            this.label2.TabIndex = 7;
            this.label2.Text = "Telefone:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(11, 49);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(67, 24);
            this.label1.TabIndex = 6;
            this.label1.Text = "Nome:";
            // 
            // Endereco
            // 
            this.Endereco.Controls.Add(this.txtNumero);
            this.Endereco.Controls.Add(this.numero);
            this.Endereco.Controls.Add(this.txtCidade);
            this.Endereco.Controls.Add(this.label7);
            this.Endereco.Controls.Add(this.txtEstado);
            this.Endereco.Controls.Add(this.label5);
            this.Endereco.Controls.Add(this.cboUsuario);
            this.Endereco.Controls.Add(this.txtLogradouro);
            this.Endereco.Controls.Add(this.label4);
            this.Endereco.Controls.Add(this.btnEndereco);
            this.Endereco.Controls.Add(this.label6);
            this.Endereco.Location = new System.Drawing.Point(4, 22);
            this.Endereco.Name = "Endereco";
            this.Endereco.Padding = new System.Windows.Forms.Padding(3);
            this.Endereco.Size = new System.Drawing.Size(579, 468);
            this.Endereco.TabIndex = 1;
            this.Endereco.Text = "Endereco";
            this.Endereco.UseVisualStyleBackColor = true;
            // 
            // txtNumero
            // 
            this.txtNumero.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNumero.Location = new System.Drawing.Point(141, 134);
            this.txtNumero.Name = "txtNumero";
            this.txtNumero.Size = new System.Drawing.Size(369, 29);
            this.txtNumero.TabIndex = 34;
            // 
            // numero
            // 
            this.numero.AutoSize = true;
            this.numero.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.numero.Location = new System.Drawing.Point(19, 139);
            this.numero.Name = "numero";
            this.numero.Size = new System.Drawing.Size(84, 24);
            this.numero.TabIndex = 27;
            this.numero.Text = "Numero:";
            // 
            // txtCidade
            // 
            this.txtCidade.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtCidade.Location = new System.Drawing.Point(141, 185);
            this.txtCidade.Name = "txtCidade";
            this.txtCidade.Size = new System.Drawing.Size(369, 29);
            this.txtCidade.TabIndex = 25;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(19, 185);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(70, 24);
            this.label7.TabIndex = 25;
            this.label7.Text = "Cidade";
            // 
            // txtEstado
            // 
            this.txtEstado.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtEstado.Location = new System.Drawing.Point(141, 239);
            this.txtEstado.Name = "txtEstado";
            this.txtEstado.Size = new System.Drawing.Size(369, 29);
            this.txtEstado.TabIndex = 26;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(19, 239);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(68, 24);
            this.label5.TabIndex = 23;
            this.label5.Text = "Estado";
            // 
            // cboUsuario
            // 
            this.cboUsuario.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F);
            this.cboUsuario.FormattingEnabled = true;
            this.cboUsuario.Location = new System.Drawing.Point(141, 39);
            this.cboUsuario.Name = "cboUsuario";
            this.cboUsuario.Size = new System.Drawing.Size(369, 32);
            this.cboUsuario.TabIndex = 22;
            // 
            // txtLogradouro
            // 
            this.txtLogradouro.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtLogradouro.Location = new System.Drawing.Point(141, 88);
            this.txtLogradouro.Name = "txtLogradouro";
            this.txtLogradouro.Size = new System.Drawing.Size(369, 29);
            this.txtLogradouro.TabIndex = 23;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(19, 93);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(113, 24);
            this.label4.TabIndex = 20;
            this.label4.Text = "Logradouro:";
            // 
            // btnEndereco
            // 
            this.btnEndereco.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEndereco.Location = new System.Drawing.Point(23, 317);
            this.btnEndereco.Name = "btnEndereco";
            this.btnEndereco.Size = new System.Drawing.Size(98, 49);
            this.btnEndereco.TabIndex = 19;
            this.btnEndereco.Text = "Gravar";
            this.btnEndereco.UseVisualStyleBackColor = true;
            this.btnEndereco.Click += new System.EventHandler(this.btnEndereco_Click);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(19, 34);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(79, 24);
            this.label6.TabIndex = 13;
            this.label6.Text = "Usuario:";
            // 
            // Resultado
            // 
            this.Resultado.Controls.Add(this.gridEnderecos);
            this.Resultado.Controls.Add(this.lblCPF);
            this.Resultado.Controls.Add(this.lblTelefone);
            this.Resultado.Controls.Add(this.lblNome);
            this.Resultado.Controls.Add(this.btnBuscar);
            this.Resultado.Controls.Add(this.cboComboBusca);
            this.Resultado.Controls.Add(this.label8);
            this.Resultado.Location = new System.Drawing.Point(4, 22);
            this.Resultado.Name = "Resultado";
            this.Resultado.Padding = new System.Windows.Forms.Padding(3);
            this.Resultado.Size = new System.Drawing.Size(579, 468);
            this.Resultado.TabIndex = 2;
            this.Resultado.Text = "Resultado";
            this.Resultado.UseVisualStyleBackColor = true;
            // 
            // gridEnderecos
            // 
            this.gridEnderecos.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridEnderecos.Location = new System.Drawing.Point(20, 215);
            this.gridEnderecos.Name = "gridEnderecos";
            this.gridEnderecos.Size = new System.Drawing.Size(544, 236);
            this.gridEnderecos.TabIndex = 30;
            // 
            // lblCPF
            // 
            this.lblCPF.AutoSize = true;
            this.lblCPF.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCPF.Location = new System.Drawing.Point(16, 188);
            this.lblCPF.Name = "lblCPF";
            this.lblCPF.Size = new System.Drawing.Size(47, 24);
            this.lblCPF.TabIndex = 29;
            this.lblCPF.Text = "CPF";
            // 
            // lblTelefone
            // 
            this.lblTelefone.AutoSize = true;
            this.lblTelefone.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTelefone.Location = new System.Drawing.Point(16, 149);
            this.lblTelefone.Name = "lblTelefone";
            this.lblTelefone.Size = new System.Drawing.Size(85, 24);
            this.lblTelefone.TabIndex = 28;
            this.lblTelefone.Text = "Telefone";
            // 
            // lblNome
            // 
            this.lblNome.AutoSize = true;
            this.lblNome.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNome.Location = new System.Drawing.Point(16, 109);
            this.lblNome.Name = "lblNome";
            this.lblNome.Size = new System.Drawing.Size(62, 24);
            this.lblNome.TabIndex = 27;
            this.lblNome.Text = "Nome";
            // 
            // btnBuscar
            // 
            this.btnBuscar.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F);
            this.btnBuscar.Location = new System.Drawing.Point(501, 34);
            this.btnBuscar.Name = "btnBuscar";
            this.btnBuscar.Size = new System.Drawing.Size(63, 31);
            this.btnBuscar.TabIndex = 25;
            this.btnBuscar.Text = "Ok";
            this.btnBuscar.UseVisualStyleBackColor = true;
            this.btnBuscar.Click += new System.EventHandler(this.btnBuscar_Click);
            // 
            // cboComboBusca
            // 
            this.cboComboBusca.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F);
            this.cboComboBusca.FormattingEnabled = true;
            this.cboComboBusca.Location = new System.Drawing.Point(126, 34);
            this.cboComboBusca.Name = "cboComboBusca";
            this.cboComboBusca.Size = new System.Drawing.Size(369, 32);
            this.cboComboBusca.TabIndex = 24;
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.Location = new System.Drawing.Point(16, 42);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(79, 24);
            this.label8.TabIndex = 23;
            this.label8.Text = "Usuario:";
            // 
            // dgUsuarios
            // 
            this.dgUsuarios.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgUsuarios.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Nome,
            this.Telefone,
            this.CPF});
            this.dgUsuarios.Location = new System.Drawing.Point(15, 300);
            this.dgUsuarios.Name = "dgUsuarios";
            this.dgUsuarios.Size = new System.Drawing.Size(558, 314);
            this.dgUsuarios.TabIndex = 13;
            this.dgUsuarios.CellDoubleClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgUsuarios_CellDoubleClick);
            // 
            // Nome
            // 
            this.Nome.DataPropertyName = "Nome";
            this.Nome.HeaderText = "Nome";
            this.Nome.Name = "Nome";
            // 
            // Telefone
            // 
            this.Telefone.DataPropertyName = "Telefone";
            this.Telefone.HeaderText = "Telefone";
            this.Telefone.Name = "Telefone";
            // 
            // CPF
            // 
            this.CPF.DataPropertyName = "CPF";
            this.CPF.HeaderText = "CPF do Usuario";
            this.CPF.Name = "CPF";
            // 
            // txtId
            // 
            this.txtId.Location = new System.Drawing.Point(445, 244);
            this.txtId.Name = "txtId";
            this.txtId.Size = new System.Drawing.Size(44, 20);
            this.txtId.TabIndex = 14;
            this.txtId.Visible = false;
            // 
            // btnExcluir
            // 
            this.btnExcluir.Location = new System.Drawing.Point(465, 620);
            this.btnExcluir.Name = "btnExcluir";
            this.btnExcluir.Size = new System.Drawing.Size(86, 43);
            this.btnExcluir.TabIndex = 15;
            this.btnExcluir.Text = "Excluir";
            this.btnExcluir.UseVisualStyleBackColor = true;
            this.btnExcluir.Click += new System.EventHandler(this.btnExcluir_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(604, 719);
            this.Controls.Add(this.tabs);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.tabs.ResumeLayout(false);
            this.Usuario.ResumeLayout(false);
            this.Usuario.PerformLayout();
            this.Endereco.ResumeLayout(false);
            this.Endereco.PerformLayout();
            this.Resultado.ResumeLayout(false);
            this.Resultado.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridEnderecos)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgUsuarios)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TabControl tabs;
        private System.Windows.Forms.TabPage Usuario;
        private System.Windows.Forms.Button btnGravar;
        private System.Windows.Forms.MaskedTextBox txtCPF;
        private System.Windows.Forms.MaskedTextBox txtTelefone;
        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TabPage Endereco;
        private System.Windows.Forms.TextBox txtNumero;
        private System.Windows.Forms.Label numero;
        private System.Windows.Forms.TextBox txtCidade;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox txtEstado;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.ComboBox cboUsuario;
        private System.Windows.Forms.TextBox txtLogradouro;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btnEndereco;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TabPage Resultado;
        private System.Windows.Forms.ComboBox cboComboBusca;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Button btnBuscar;
        private System.Windows.Forms.Label lblCPF;
        private System.Windows.Forms.Label lblTelefone;
        private System.Windows.Forms.Label lblNome;
        private System.Windows.Forms.DataGridView gridEnderecos;
        private System.Windows.Forms.DataGridView dgUsuarios;
        private System.Windows.Forms.DataGridViewTextBoxColumn Nome;
        private System.Windows.Forms.DataGridViewTextBoxColumn Telefone;
        private System.Windows.Forms.DataGridViewTextBoxColumn CPF;
        private System.Windows.Forms.TextBox txtId;
        private System.Windows.Forms.Button btnExcluir;
    }
}

