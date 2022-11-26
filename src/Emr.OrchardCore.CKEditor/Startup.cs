using Microsoft.Extensions.DependencyInjection;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.Modules;
using Emr.OrchardCore.CKEditor.Settings;

namespace Emr.OrchardCore.CKEditor
{
    public class Startup : StartupBase
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IContentPartFieldDefinitionDisplayDriver, HtmlFieldCKEditorSettingsDriver>();
            services.AddScoped<IContentTypePartDefinitionDisplayDriver, HtmlBodyPartCKEditorSettingsDriver>();
        }
    }
}