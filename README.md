# Emr.OrchardCore.CKEditor

Based on https://github.com/ThisNetWorks/ThisNetWorks.OrchardCore.CKEditor project. Thanks to @deanmarcussen

## Development
### How to build CKEditor.js

```bash
# Navigate to main folder where ckeditor config is
cd src/Emr.OrchardCore.CKEditor/Assets/scripts/ckeditor5-build-classic-orchardcore
# install packages
npm install
# build with webpack
npm run build
```
This will create a custom build in `~/wwwroot/scripts/ckeditor-classic-orchardcore` directory.\
If you wish to change filename or output directory you need to update `webpack.config.js`.
After that you need to update `HtmlBodyPart-CKEditor.Edit.cshtml` and `HtmlField-CKEditor.Edit.cshtml` files with correct file path.