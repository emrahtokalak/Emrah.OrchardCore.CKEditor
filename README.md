# Emrah.OrchardCore.CKEditor

Module for [Orchard Core](https://github.com/OrchardCMS/OrchardCore). CKEditor 5 is an ultra-modern JavaScript rich text editor. 

## Nuget

[![NuGet](https://img.shields.io/nuget/v/Emrah.OrchardCore.CKEditor.svg)](https://www.nuget.org/packages/Emrah.OrchardCore.CKEditor)

## Orchard Core Reference

This module is referencing a stable build of Orchard Core ([`1.5.0`](https://www.nuget.org/packages/OrchardCore.Module.Targets/1.5.0)).

## Credit

Based on https://github.com/ThisNetWorks/ThisNetWorks.OrchardCore.CKEditor project. Thanks to @deanmarcussen

## Compiling Assets
### How to build CKEditor.js
In order to build CKEditor you need [Node.js](https://nodejs.org/en/download/).
Packages are tested with `npm@6.14.17` and `node@14.21.1`

```bash
# Navigate to main folder where ckeditor config is
cd src/Emrah.OrchardCore.CKEditor/Assets/scripts/ckeditor5-build-classic-orchardcore
# install packages
npm install
# build with webpack
npm run build
```
This will create a custom build in `~/wwwroot/scripts/ckeditor-classic-orchardcore` directory.\
If you wish to change filename or output directory you need to update `webpack.config.js`.
After that you need to update [HtmlBodyPart-CKEditor.Edit.cshtml](./src/Emrah.OrchardCore.CKEditor/Views/HtmlBodyPart-CKEditor.Edit.cshtml) and
[HtmlField-CKEditor.Edit.cshtml](./src/Emrah.OrchardCore.CKEditor/Views/HtmlField-CKEditor.Edit.cshtml) files with correct file path.