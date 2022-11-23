using System;

namespace Emr.OrchardCore.CKEditor.ViewModels
{
    public class CKEditorConfigurationViewModel
    {

        public string Name { get; set; } = String.Empty;
        public bool Enable { get; set; } = true;
        public string Configuration { get; set; }
        public string Description { get; set; } = String.Empty;
    }
}
