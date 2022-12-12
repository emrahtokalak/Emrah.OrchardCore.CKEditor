using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using Emrah.OrchardCore.CKEditor.ViewModels;
using OrchardCore.Html.Models;
using OrchardCore.Mvc.Utilities;
using Newtonsoft.Json.Linq;

namespace Emrah.OrchardCore.CKEditor.Settings
{
    public class HtmlBodyPartCKEditorSettingsDriver : ContentTypePartDefinitionDisplayDriver<HtmlBodyPart>
    {

        private readonly IStringLocalizer S;

        public HtmlBodyPartCKEditorSettingsDriver(
            IStringLocalizer<HtmlBodyPartCKEditorSettingsDriver> localizer)
        {
            S = localizer;
        }

        public override IDisplayResult Edit(ContentTypePartDefinition contentTypePartDefinition, IUpdateModel updater)
        {
            if (!String.Equals(nameof(HtmlBodyPart), contentTypePartDefinition.PartDefinition.Name))
            {
                return null;
            }

            return Initialize<CKEditorSettingsViewModel>("HtmlBodyPartCKEditorEditorSettings_Edit", model =>
               {
                   var settings = contentTypePartDefinition.GetSettings<HtmlBodyPartCKEditorSettings>();

                   model.Options = settings.Options;
                   model.InsertMediaWithUrl = settings.InsertMediaWithUrl;
               })
               .Location("Editor");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentTypePartDefinition contentTypePartDefinition, UpdateTypePartEditorContext context)
        {
            if (!String.Equals(nameof(HtmlBodyPart), contentTypePartDefinition.PartDefinition.Name))
            {
                return null;
            }

            if (contentTypePartDefinition.Editor() == "CKEditor")
            {
                var model = new CKEditorSettingsViewModel();
                var settings = new HtmlBodyPartCKEditorSettings();

                await context.Updater.TryUpdateModelAsync(model, Prefix);

                settings.InsertMediaWithUrl = model.InsertMediaWithUrl;
                settings.Options = model.Options;
                context.Builder.WithSettings(settings);
            }

            return Edit(contentTypePartDefinition, context.Updater);
        }

        private static string FormatJson(string json)
        {
            var jObject = JObject.Parse(json);
            return jObject.ToString(Newtonsoft.Json.Formatting.Indented);
        }
    }
}
