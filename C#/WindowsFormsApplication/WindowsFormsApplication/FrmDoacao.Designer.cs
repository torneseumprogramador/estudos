namespace WindowsFormsApplication
{
    partial class FrmDoacao
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
            this.button1 = new System.Windows.Forms.Button();
            this.dadosDaEmpresa1 = new WindowsFormsApplication.DadosDaEmpresa();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(285, 39);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(326, 159);
            this.button1.TabIndex = 0;
            this.button1.Text = "Para fazer a doação clique aqui";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // dadosDaEmpresa1
            // 
            this.dadosDaEmpresa1.Location = new System.Drawing.Point(547, 566);
            this.dadosDaEmpresa1.Name = "dadosDaEmpresa1";
            this.dadosDaEmpresa1.Size = new System.Drawing.Size(395, 96);
            this.dadosDaEmpresa1.TabIndex = 1;
            // 
            // FrmDoacao
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(945, 664);
            this.Controls.Add(this.dadosDaEmpresa1);
            this.Controls.Add(this.button1);
            this.Name = "FrmDoacao";
            this.Text = "FrmDoacao";
            this.Load += new System.EventHandler(this.FrmDoacao_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private DadosDaEmpresa dadosDaEmpresa1;
    }
}