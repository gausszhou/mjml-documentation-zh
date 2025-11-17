# 标准头部组件

Head components ease your development process, enabling you to import fonts, define default styles or create classes for MJML components among others.

头部组件简化了您的开发过程，使您能够导入字体、定义默认样式或为 MJML 组件创建类等等。

## mj-attributes

Inside `mj-attributes`, a tag citing one MJML component (like `mj-text`; see example) overrides default settings for listed MJML attributes on the one component.

在 mj-attributes 中，引用一个 MJML 组件的标签（如 mj-text ；参见示例）会覆盖该组件上列出的 MJML 属性的默认设置。

An `mj-all` is like the above, but affects all MJML components via the one tag.

mj-all 与上述类似，但它通过一个标签影响所有 MJML 组件。

`mj-class` tags create a named group of MJML attributes you can apply to MJML components. To apply them, use `mj-class="<name>"`.

mj-class 标签创建一组命名的 MJML 属性，您可以将其应用于 MJML 组件。要应用它们，请使用 `mj-class="<name>"`。

```html
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-text padding="0" />
      <mj-class name="blue" color="blue" />
      <mj-class name="big" font-size="20px" />
      <mj-all font-family="Arial" />
    </mj-attributes>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text mj-class="blue big"> Hello World! </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## mj-breakpoint

This tag allows you to control on which breakpoint the layout should go desktop/mobile.

此标签允许您控制布局在哪个断点处应切换到桌面/移动端。

| 属性  | 单位 | 描述 | 默认值 |
| --- |  --- | --- | --- |
| width  | px  | 断点值 | n/a |

```html
<mjml>
  <mj-head>
    <mj-breakpoint width="320px" />
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text> Hello World! </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## mj-html-attributes

This tag allows you to add custom attributes on any html tag of the generated html, using css selectors. It's not needed for most email creations, but can be useful in some cases, i.e. editable templates.

此标签允许您使用 CSS 选择器为生成的 HTML 中的任何 HTML 标签添加自定义属性。大多数电子邮件创建并不需要它，但在某些情况下非常有用，例如可编辑模板。

```html
<mjml>
  <mj-head>
    <mj-html-attributes>
      <mj-selector path=".custom div">
        <mj-html-attribute name="data-id">42</mj-html-attribute>
      </mj-selector>
    </mj-html-attributes>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text css-class="custom">
          Hello World!
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

In the generated html, a `mj-text` becomes a td, and a div inside this td. In this example, the td will have the `class="custom"`. Using the css selector `path=".custom div"`, the div inside the td will get the attribute data-id="42".

在生成的 HTML 中，`mj-text` 会变成一个 td 元素，并且该 td 元素内还会包含一个 div 元素。在本例中，td 元素的 class 属性为“custom”。使用 CSS 选择器 `path=".custom div"`, ，td 元素内的 div 元素将获得 data-id 属性，其值为“42”。

To use this component, you will likely have to look at the generated html to see where exactly are the css-class applied, to know which css selector you need to use to add your custom attribute on the right html tag.

要使用此组件，您可能需要查看生成的 html，以了解 css 类的具体应用位置，从而知道需要使用哪个 css 选择器才能将自定义属性添加到正确的 html 标签中。

You can use multiple `mj-selector` inside a `mj-html-attributes`, and multiple `mj-html-attribute` inside a `mj-selector`.

您可以在 `mj-html-attributes` 中使用多个 `mj-selector`，也可以在 `mj-selector` 中使用多个 `mj-html-attribute`。

## mj-preview

This tag allows you to set the preview that will be displayed in the inbox of the recipient.

此标签允许您设置将在收件人收件箱中显示的预览。

```html
<mjml>
  <mj-head>
    <mj-preview>Hello MJML</mj-preview>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text> Hello World! </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## mj-style

This tag allows you to set CSS styles that will be applied to the HTML in your MJML document as well as the HTML outputted. The CSS styles will be added to the head of the rendered HTML by default, but can also be inlined by using the inline="inline" attribute.

此标签允许您设置 CSS 样式，这些样式将应用于 MJML 文档中的 HTML 以及输出的 HTML。默认情况下，CSS 样式将添加到渲染后的 HTML 的头部，但也可以使用 `inline="inline"` 属性将其内联。

Here is an example showing the use in combination with the css-class attribute, which is supported by all body components.

以下示例展示了如何将其与 css-class 属性结合使用，所有 body 组件都支持该属性。

```html
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="mjclass" color="green" font-size="30px" />
    </mj-attributes>
    <mj-style inline="inline"> .blue-text div { color: blue !important; } </mj-style>
    <mj-style> .red-text div { color: red !important; text-decoration: underline !important; } </mj-style>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text css-class="red-text">I'm red and underlined</mj-text>
        <mj-text css-class="blue-text">I'm blue because of inline</mj-text>
        <mj-text mj-class="mjclass">I'm green</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## mj-title

Defines the document's title that browsers show in the title bar or a page's tab.

定义浏览器在标题栏或页面标签页中显示的文档标题。

```html
<mjml>
  <mj-head>
    <mj-title>Hello MJML</mj-title>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text> Hello World! </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```
