using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Localization;
using OrchardCore.Navigation;

namespace Emr.OrchardCore.CKEditor
{
    public class AdminMenu : INavigationProvider
    {
        private readonly IStringLocalizer S;

        public AdminMenu(IStringLocalizer<AdminMenu> localizer)
        {
            S = localizer;
        }

        public Task BuildNavigationAsync(string name, NavigationBuilder builder)
        {
            if (String.Equals(name, "admin", StringComparison.OrdinalIgnoreCase))
            {
                builder.Add(S["Configuration"], configuration => configuration
                    .Add(S["Settings"], settings => settings
                        .Add(S["CKEditor Configurations"], S["CKEditor Configurations"].PrefixPosition(), import => import
                            .AddClass("fa-pencil").Id("ckeditorConfigurations")
                                .Action("Index", "Admin", new { area = "Emr.OrchardCore.CKEditor" })
                                .Permission(Permissions.ManageCKEditorConfigurations)
                                .LocalNav())
                    ));
            }

            return Task.CompletedTask;
        }
    }
}