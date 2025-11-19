# 在 JSON 中使用 MJML

MJML can not only be used as a markup, but also as a JSON object, which can be very useful for
programmatic manipulation or with the MJML API.

MJML 不仅可以用作标记语言，还可以用作 JSON 对象，这对于程序化操作或与 MJML API 一起使用非常有用。

With the JSON format, a MJML component is defined as an `object` with the following properties:

在 JSON 格式中，MJML 组件被定义为一个具有以下属性的 object ：

- a `tagName` as a `string`. 一个 tagName 字段，表示标签名称
- a list of attributes as an `object`. 一个 attributes 字段，表示标签属性
- either a `content` as a `string` or a list of `children` tags as an `array`. 一个 content 字段或者一个 children 字段

Exactly like using MJML as a markup, the JSON definition can be passed as an object to the `mjml2html` function.
Here is working example:

与使用 MJML 作为标记语言完全相同，JSON 定义可以作为对象传递给 mjml2html 函数。以下是一个可运行的示例：

```javascript
var mjml2html = require("mjml");

console.log(
  mjml2html({
    tagName: "mjml",
    attributes: {},
    children: [
      {
        tagName: "mj-body",
        attributes: {},
        children: [
          {
            tagName: "mj-section",
            attributes: {},
            children: [
              {
                tagName: "mj-column",
                attributes: {},
                children: [
                  {
                    tagName: "mj-image",
                    attributes: {
                      width: "100px",
                      src: "/assets/img/logo-small.png",
                    },
                  },
                  {
                    tagName: "mj-divider",
                    attributes: {
                      "border-color": "#F46E43",
                    },
                  },
                  {
                    tagName: "mj-text",
                    attributes: {
                      "font-size": "20px",
                      color: "#F45E43",
                      "font-family": "Helvetica",
                    },
                    content: "Hello World",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
);
```
