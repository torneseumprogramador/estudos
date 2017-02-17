using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsApplication
{
    public class MDISingleton
    {
        private MDISingleton() { }

        private static MDIParentPrincipal instanceMDIParentPrincipal;

        public static MDIParentPrincipal InstanciaMDI()
        {
            if (instanceMDIParentPrincipal == null)
            {
                instanceMDIParentPrincipal = new MDIParentPrincipal();
                return instanceMDIParentPrincipal;
            }
            return instanceMDIParentPrincipal;
        }
    }
}
