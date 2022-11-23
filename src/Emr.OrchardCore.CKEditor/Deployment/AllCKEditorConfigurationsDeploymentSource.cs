using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using OrchardCore.Deployment;
using Emr.OrchardCore.CKEditor.Services;

namespace Emr.OrchardCore.CKEditor.Deployment
{
    public class AllCKEditorConfigurationsDeploymentSource : IDeploymentSource
    {
        private readonly CKEditorConfigurationManager _configurationManager;

        public AllCKEditorConfigurationsDeploymentSource(CKEditorConfigurationManager configurationManager)
        {
            _configurationManager = configurationManager;
        }

        public async Task ProcessDeploymentStepAsync(DeploymentStep step, DeploymentPlanResult result)
        {
            var allConfigurationsStep = step as AllCKEditorConfigurationsDeploymentStep;

            if (allConfigurationsStep == null)
            {
                return;
            }

            var configurationObjects = new JObject();
            var configurations = await _configurationManager.GetDocumentAsync();

            foreach (var configuration in configurations.Configurations)
            {
                configurationObjects[configuration.Key] = JObject.FromObject(configuration.Value);
            }

            result.Steps.Add(new JObject(
                new JProperty("name", "CKEditorConfigurations"),
                new JProperty("CKEditorConfigurations", configurationObjects)
            ));
        }
    }
}
