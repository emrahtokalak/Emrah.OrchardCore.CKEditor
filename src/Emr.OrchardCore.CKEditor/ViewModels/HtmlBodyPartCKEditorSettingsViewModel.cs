using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Emr.OrchardCore.CKEditor.ViewModels
{
    public class HtmlBodyPartCKEditorSettingsViewModel
    {
        public string SelectedConfigurationName { get; set; }
        [BindNever]
        public List<SelectListItem> Configurations { get; set; } = new List<SelectListItem>();
    }
}
