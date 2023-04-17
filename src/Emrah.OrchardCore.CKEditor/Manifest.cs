using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "CKEditor 5",
    Author = "Emrah Tokalak",
    Description = "It allows you to manage your content and media with CKEditor 5.",
    Version = "1.5.1",
    Website = "http://emrahtokalak.com",
    Dependencies = new[] { "OrchardCore.ContentFields", "OrchardCore.Html" },
    Category = "Content Management"
)]