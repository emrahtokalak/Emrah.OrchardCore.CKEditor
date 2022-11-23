using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using OrchardCore.Admin;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.Deployment;
using OrchardCore.DisplayManagement.Handlers;
using OrchardCore.Modules;
using OrchardCore.Mvc.Core.Utilities;
using OrchardCore.Navigation;
using OrchardCore.Recipes;
using OrchardCore.Security.Permissions;
using Emr.OrchardCore.CKEditor.Controllers;
using Emr.OrchardCore.CKEditor.Deployment;
using Emr.OrchardCore.CKEditor.Models;
using Emr.OrchardCore.CKEditor.Recipes;
using Emr.OrchardCore.CKEditor.Services;
using Emr.OrchardCore.CKEditor.Settings;

namespace Emr.OrchardCore.CKEditor
{
    public class Startup : StartupBase
    {
        private readonly AdminOptions _adminOptions;

        public Startup(IOptions<AdminOptions> adminOptions)
        {
            _adminOptions = adminOptions.Value;
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services
                .AddScoped<CKEditorConfigurationManager>()
                .AddScoped<IPermissionProvider, Permissions>()
                .AddScoped<INavigationProvider, AdminMenu>()
                .AddScoped<IContentPartFieldDefinitionDisplayDriver, HtmlFieldCKEditorClassicSettingsDriver>()
                .AddScoped<IContentTypePartDefinitionDisplayDriver, HtmlBodyPartCKEditorClassicSettingsDriver>()
                .AddRecipeExecutionStep<CKEditorConfigurationsStep>()
                .Configure<CKEditorOptions>(o =>
                {
                    o.DefaultConfiguration =
                    @"
                    { 
                        toolbar : 
                            [
                                'heading',
                                '|',
                                'bold',
                                'italic',
                                'link',
                                'bulletedList',
                                'numberedList',
                                '|',
                                'indent',
                                'outdent',
                                '|',
                                'insertImage',
                                'blockQuote',
                                'insertTable',
                                'undo',
                                'redo'
                            ]
                    }";

                });

        }

        public override void Configure(IApplicationBuilder builder, IEndpointRouteBuilder routes, IServiceProvider serviceProvider)
        {
            var adminControllerName = typeof(AdminController).ControllerName();

            routes.MapAreaControllerRoute(
                name: "EmrCKEditor",
                areaName: "Emr.OrchardCore.CKEditor",
                pattern: _adminOptions.AdminUrlPrefix + "/CKEditor",
                defaults: new { controller = adminControllerName, action = nameof(AdminController.Index) }
            );
            routes.MapAreaControllerRoute(
                name: "EmrCKEditorCreate",
                areaName: "Emr.OrchardCore.CKEditor",
                pattern: _adminOptions.AdminUrlPrefix + "/CKEditor/Create/{name}",
                defaults: new { controller = adminControllerName, action = nameof(AdminController.Create) }
            );
            routes.MapAreaControllerRoute(
                name: "EmrCKEditorEdit",
                areaName: "Emr.OrchardCore.CKEditor",
                pattern: _adminOptions.AdminUrlPrefix + "/CKEditor/Edit/{name}",
                defaults: new { controller = adminControllerName, action = nameof(AdminController.Edit) }
            );
        }
    }

    [RequireFeatures("OrchardCore.Deployment")]
    public class DeploymentStartup : StartupBase
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IDeploymentSource, AllCKEditorConfigurationsDeploymentSource>()
                .AddSingleton<IDeploymentStepFactory>(new DeploymentStepFactory<AllCKEditorConfigurationsDeploymentStep>())
                .AddScoped<IDisplayDriver<DeploymentStep>, AllCKEditorConfigurationsDeploymentStepDriver>();
        }
    }
}