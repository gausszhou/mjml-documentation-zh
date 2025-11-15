# 组件

Components are the core of MJML. A component is an abstraction of a more complex email-responsive HTML layout. It exposes attributes, enabling you to interact with the final component visual aspect.

组件是 MJML 的核心。组件是对更复杂的电子邮件响应式 HTML 布局的抽象。它公开属性，使您能够与组件的最终视觉效果进行交互。

MJML comes out of the box with a set of standard components to help you build easily your first templates without having to reinvent the wheel.

MJML 开箱即用，配备了一系列标准组件，可帮助您轻松构建第一个模板，而无需重新发明轮子。

For instance, the `mj-button` component is, on the inside, a complex HTML layout:

例如， mj-button 组件内部就是一个复杂的 HTML 布局：

```html
<!-- MJML -->
<mj-button href="#"> Hello There! </mj-button>

<!-- HTML -->
<table
  cellpadding="0"
  cellspacing="0"
  style="border:none;border-radius:3px;"
  align="center"
>
  <tbody>
    <tr>
      <td
        style="background-color:#414141;border-radius:3px;color:#ffffff;cursor:auto;"
        align="center"
        valign="middle"
        bgcolor="#414141"
      >
        <a
          class="mj-content"
          href="#"
          style="display:inline-block;text-decoration:none;background-color:#414141;border:1px solid #414141;border-radius:3px;color:#ffffff;font-size:13px;font-weight:bold;padding:15px 30px;"
          target="_blank"
        >
          Hello There!
        </a>
      </td>
    </tr>
  </tbody>
</table>
```

::: tip Which email clients/versions are supported?\*\*
For full details of component support, [please visit our support matrix](https://mjml.io/compatibility).  
有关组件支持的完整详细信息，请访问我们的支持矩阵。
:::

## mjml

A MJML document starts with a `<mjml>` tag, it can contain only `mj-head` and `mj-body` tags. Both have the same purpose of `head` and `body` in a HTML document.

MJML 文档以 `<mjml>` 标签开头，它只能包含 mj-head 和 mj-body 标签。这两个标签的作用与 HTML 文档中的 head 和 body 标签相同。

| 属性 | 值类型 | 描述                                             | 默认值 |
| ---- | ------ | ------------------------------------------------ | ------ |
| owa  | string | 如果设置为“桌面”，则强制使用不支持媒体查询的旧版 | none   |
| lang | string | 用作 `<html lang="">` 属性                       | und    |
| dir  | string | 用作 `<html dir="">` 属性                        | auto   |

## mj-head

mj-head contains head components, related to the document such as style and meta elements (see head components).

mj-head 包含与文档相关的头部组件，例如样式和元元素（请参阅头部组件 ）。

## mj-body

This is the starting point of your email. To aid accessibility, MJML automatically adds a div tag as the child of the body, with the following ARIA attributes `role="article"`, `aria-roledescription="email"` and `aria-label="EMAIL NAME"`, where 'EMAIL NAME' is taken from the content of the `mj-title` tag. The `lang` and `dir` attributes are also added here, with values taken from the `mjml` tag.

这是您邮件的开头部分。为了提高可访问性，MJML 会自动在 body 标签下添加一个 div 标签作为子元素，并为其添加以下 ARIA 属性： `role="article"` 、`aria-roledescription="email"` 和 `aria-label="EMAIL NAME"` ，其中“邮箱地址”取自 `mj-title` 标签的内容。`lang` `dir` 属性也会在此处添加，其值取自 `mjml` 标签。

```html
<mjml>
  <mj-body>
    <!-- Your email goes here -->
  </mj-body>
</mjml>
```

| 属性             | 值类型        | 描述       | 默认值 |
| ---------------- | ------------- | ---------- | ------ |
| background-color | color formats | 背景颜色   | n/a    |
| css-class        | string        | 类名       | n/a    |
| width            | px            | 邮件的宽度 | 600px  |

## mj-include

The `mjml-core` package allows you to include external `mjml` files
to build your email template.

`mjml-core` 包允许您包含外部 mjml 文件来构建电子邮件模板

```xml
<!-- header.mjml -->
<mj-section>
  <mj-column>
    <mj-text>This is a header</mj-text>
  </mj-column>
</mj-section>
```

You can wrap your external mjml files inside the default `mjml > mj-body` tags to make it easier to preview outside the main template.

您可以将外部 mjml 文件包装在默认的 `mjml > mj-body` 中。 添加标签以便更轻松地在主模板之外进行预览。

```xml
<!-- main.mjml -->
<mjml>
  <mj-body>
    <mj-include path="./header.mjml" />
  </mj-body>
</mjml>
```

The `MJML` engine will then replace your included files before starting the rendering process.

`MJML` 引擎随后会替换您包含的文件，然后再开始渲染过程。

## Other file types 其他文件类型

You can include external `css` files. They will be inserted the same way as when using a `mj-style`. You need to specify that you're including a css file using the `type="css"` attribute. If you want the css to be inlined, you can use the `css-inline="inline"` attribute.

您可以引入外部 css 文件。它们的插入方式与使用 `mj-style` 时相同。您需要使用 `type="css"` 属性指定要引入的 CSS 文件。如果您希望 CSS 内联，可以使用 `css-inline="inline"` 属性。

```xml
<!-- main.mjml -->
  <mj-include path="./styles.css" type="css" />
  <mj-include path="./inline-styles.css" type="css" css-inline="inline" />
```

You can also include external `html` files. They will be inserted the same way as when using a `mj-raw`. You need to specify that you're including a html file using the `type="html"` attribute.

您还可以包含外部 `html` 文件。它们的插入方式与使用 `mj-raw` 时相同。您需要使用 `type="html"` 属性来指定要包含的是 HTML 文件。

```xml
<!-- main.mjml -->
  <mj-include path="./partial.html" type="html" />
```
