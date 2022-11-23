using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "CKEditor",
    Author = "Emrah Tokalak",
    Description = "It allows you to manage your content with CKEditor.",
    Version = "1.0.0",
    Website = "http://emrahtokalak.com",
    Dependencies = new[] { "OrchardCore.ContentFields", "OrchardCore.Html" },
    Category = "Content Management"
)]