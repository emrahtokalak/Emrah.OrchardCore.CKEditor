using Microsoft.Extensions.DependencyInjection;
using OrchardCore.DisplayManagement.Descriptors;
using OrchardCore.Modules;

namespace Emr.OrchardCore.CKEditor.Shapes
{
    [Feature("Emr.OrchardCore.CKEditor")]
    [RequireFeatures("OrchardCore.Media")]
    public class Startup : StartupBase
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IShapeTableProvider, HtmlMediaShapes>();
        }
    }
}
