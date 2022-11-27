using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.Views;
using Emr.OrchardCore.CKEditor.ViewModels;
using OrchardCore.ContentFields.Fields;
using OrchardCore.Mvc.Utilities;

namespace Emr.OrchardCore.CKEditor.Settings
{
    public class HtmlFieldCKEditorSettingsDriver : ContentPartFieldDefinitionDisplayDriver<HtmlField>
    {
        private readonly IStringLocalizer S;

        public HtmlFieldCKEditorSettingsDriver(IStringLocalizer<HtmlFieldCKEditorSettingsDriver> localizer)
        {
            S = localizer;
        }

        public override IDisplayResult Edit(ContentPartFieldDefinition partFieldDefinition)
        {
            return Initialize<CKEditorSettingsViewModel>("HtmlFieldCKEditorEditorSettings_Edit", model =>
            {
                var settings = partFieldDefinition.GetSettings<HtmlBodyPartCKEditorSettings>();

                model.Options = settings.Options;
                model.InsertMediaWithUrl = settings.InsertMediaWithUrl;
            })
            .Location("Editor");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentPartFieldDefinition partFieldDefinition, UpdatePartFieldEditorContext context)
        {
            if (partFieldDefinition.Editor() == "CKEditor")
            {
                var model = new CKEditorSettingsViewModel();
                var settings = new HtmlFieldCKEditorSettings();

                await context.Updater.TryUpdateModelAsync(model, Prefix);

                //Todo: Check json validation
                // model.Options = FormatJson(model.Options);
                // if (!model.Options.IsJson())
                // {
                //     context.Updater.ModelState.AddModelError(Prefix + "." + nameof(CKEditorSettingsViewModel.Options), S["The options are written in an incorrect format."]);
                // }
                settings.InsertMediaWithUrl = model.InsertMediaWithUrl;
                settings.Options = model.Options;
                context.Builder.WithSettings(settings);
            }

            return Edit(partFieldDefinition);
        }
    }
}
