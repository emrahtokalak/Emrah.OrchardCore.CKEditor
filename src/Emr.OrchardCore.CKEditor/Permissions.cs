using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrchardCore.Security.Permissions;

namespace Emr.OrchardCore.CKEditor
{
    public class Permissions : IPermissionProvider
    {
        public static readonly Permission ManageCKEditorConfigurations = new("ManageCKEditorConfigurations", "Manage CKEditor Configurations");

        public Task<IEnumerable<Permission>> GetPermissionsAsync()
        {
            return Task.FromResult(new[] { ManageCKEditorConfigurations }.AsEnumerable());
        }

        public IEnumerable<PermissionStereotype> GetDefaultStereotypes()
        {
            return new[]
            {
                new PermissionStereotype
                {
                    Name = "Administrator",
                    Permissions = new[] { ManageCKEditorConfigurations }
                },
                new PermissionStereotype
                {
                    Name = "Editor",
                    Permissions = new[] { ManageCKEditorConfigurations }
                }
            };
        }
    }
}