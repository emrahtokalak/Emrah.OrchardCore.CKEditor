using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.Views;
using Emr.OrchardCore.CKEditor.Services;
using Emr.OrchardCore.CKEditor.ViewModels;
using OrchardCore.ContentFields.Fields;

namespace Emr.OrchardCore.CKEditor.Settings
{
    public class HtmlFieldCKEditorSettingsDriver : ContentPartFieldDefinitionDisplayDriver<HtmlField>
    {
        private readonly CKEditorConfigurationManager _manager;
        private readonly IStringLocalizer S;

        public HtmlFieldCKEditorSettingsDriver(
            CKEditorConfigurationManager manager,
            IStringLocalizer<HtmlFieldCKEditorSettingsDriver> localizer)
        {
            _manager = manager;
            S = localizer;
        }

        public override IDisplayResult Edit(ContentPartFieldDefinition partFieldDefinition)
        {
            return Initialize<HtmlFieldCKEditorSettingsViewModel>("HtmlFieldCKEditorEditorSettings_Edit", async model =>
            {
                var settings = partFieldDefinition.GetSettings<HtmlFieldCKEditorSettings>();

                var document = await _manager.GetDocumentAsync();
                model.Configurations.Add(new SelectListItem { Text = S["Default Configuration"], Value = String.Empty });
                model.Configurations.AddRange(document.Configurations.Keys.Select(x => new SelectListItem { Text = x, Value = x }).ToList());
                if (!String.IsNullOrEmpty(settings.ConfigurationName) && document.Configurations.ContainsKey(settings.ConfigurationName))
                {
                    model.SelectedConfigurationName = settings.ConfigurationName;
                }
            })
            .Location("Editor");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentPartFieldDefinition partFieldDefinition, UpdatePartFieldEditorContext context)
        {
            if (partFieldDefinition.Editor() == "CKEditor")
            {
                var model = new HtmlFieldCKEditorSettingsViewModel();
                var settings = new HtmlFieldCKEditorSettings();

                await context.Updater.TryUpdateModelAsync(model, Prefix, m => m.SelectedConfigurationName);

                settings.ConfigurationName = model.SelectedConfigurationName;

                context.Builder.WithSettings(settings);
            }

            return Edit(partFieldDefinition);
        }
    }
}
