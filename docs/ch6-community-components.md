# 社区组件

In addition to the standard components available in MJML, our awesome community is contributing by creating their own components.

除了 MJML 中提供的标准组件外，我们优秀的社区还在通过创建自己的组件做出贡献。

To use a community component, proceed as follows:

- Install MJML locally with `npm install mjml` in a folder
- Install the community component with `npm install {component-name}` in the same folder
- Create a `.mjmlconfig` file in the same folder with:

```json
{
  "packages": ["component-name/path-to-js-file"]
}
```

Finally, you can now use the component in a MJML file, for example `index.mjml`, and run MJML locally in your terminal (make sure to be in the folder where you installed MJML and the community component): `./node_modules/.bin/mjml index.mjml`.

最后，您现在可以在 MJML 文件（例如 index.mjml ）中使用该组件，并在终端中本地运行 MJML（确保位于您安装 MJML 和社区组件的文件夹中）： ./node_modules/.bin/mjml index.mjml 。
