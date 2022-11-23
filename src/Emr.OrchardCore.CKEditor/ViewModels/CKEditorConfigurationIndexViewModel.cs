using System.Collections.Generic;
using Emr.OrchardCore.CKEditor.Models;

namespace Emr.OrchardCore.CKEditor.ViewModels
{
    public class CKEditorConfigurationIndexViewModel
    {
        public IList<CKEditorConfigurationEntry> Configurations { get; set; }
        public CKEditorConfigurationIndexOptions Options { get; set; }
        public dynamic Pager { get; set; }
    }

    public class CKEditorConfigurationEntry
    {
        public CKEditorConfiguration Configuration { get; set; }
    }

    public class CKEditorConfigurationIndexOptions
    {
        public string Search { get; set; }
    }
}
