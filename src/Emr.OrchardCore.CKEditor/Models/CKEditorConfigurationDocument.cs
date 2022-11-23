using System;
using System.Collections.Generic;
using OrchardCore.Data.Documents;

namespace Emr.OrchardCore.CKEditor.Models
{
    public class CKEditorConfigurationDocument : Document
    {
        public Dictionary<string, CKEditorConfiguration> Configurations { get; } = new Dictionary<string, CKEditorConfiguration>(StringComparer.OrdinalIgnoreCase);
    }
}
