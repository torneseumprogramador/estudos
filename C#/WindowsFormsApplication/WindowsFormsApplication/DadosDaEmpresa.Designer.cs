namespace WindowsFormsApplication
{
    partial class DadosDaEmpresa
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.btnVisitar = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(19, 25);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(357, 24);
            this.label1.TabIndex = 0;
            this.label1.Text = "Powered by Didox Business & Technology";
            // 
            // btnVisitar
            // 
            this.btnVisitar.Location = new System.Drawing.Point(155, 61);
            this.btnVisitar.Name = "btnVisitar";
            this.btnVisitar.Size = new System.Drawing.Size(75, 23);
            this.btnVisitar.TabIndex = 1;
            this.btnVisitar.Text = "Visitar Site";
            this.btnVisitar.UseVisualStyleBackColor = true;
            this.btnVisitar.Click += new System.EventHandler(this.btnVisitar_Click);
            // 
            // DadosDaEmpresa
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.btnVisitar);
            this.Controls.Add(this.label1);
            this.Name = "DadosDaEmpresa";
            this.Size = new System.Drawing.Size(395, 96);
            this.Load += new System.EventHandler(this.DadosDaEmpresa_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnVisitar;
    }
}
