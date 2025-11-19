# 标准组件

MJML comes out of the box with a set of standard components to help you build easily your first templates without having to reinvent the wheel.

MJML 开箱即用，配备了一系列标准组件，可帮助您轻松构建第一个模板，而无需重新发明轮子。

## mj-section

Sections are intended to be used as rows within your email. They will be used to structure the layout.

邮件中的“版块”部分将作为行使用，用于构建邮件布局。

```html
<mjml>
  <mj-body>
    <mj-section full-width="full-width" background-color="red">
      <!-- Your columns go here -->
    </mj-section>
  </mj-body>
</mjml>
```

The full-width property will be used to manage the background width. By default, it will be 600px. With the full-width property on, it will be changed to 100%.

full-width 属性用于管理背景宽度。默认值为 600 像素。启用 full-width 属性后，背景宽度将变为 100%。

Inverting the order in which columns display: set the `direction` attribute to `rtl` to change the order in which columns display on desktop. Because MJML is mobile-first, structure the columns in the order you want them to stack on mobile, and use `direction` to change the order they display on desktop.
Sections cannot nest in sections. Columns can nest in sections; all content must be in a column.

反转列的显示顺序：将 direction 属性设置为 rtl 即可更改列在桌面端的显示顺序。由于 MJML 采用移动优先设计，因此请按照您希望它们在移动设备上的堆叠顺序来构建列，并使用 direction 来更改它们在桌面端的显示顺序。节不能嵌套在节中。列可以嵌套在节中；所有内容必须位于列中。

## mj-column

Columns enable you to horizontally organize the content within your sections. They must be located under mj-section tags in order to be considered by the engine. To be responsive, columns are expressed in terms of percentage.

列允许您在各个部分中水平组织内容。它们必须位于 `mj-section` 标签下才能被搜索引擎识别。为了实现响应式布局，列数以百分比表示。

The sum of columns in a section cannot be greater than the width of the parent `mj-section` (or 100%).
Every single column has to contain something because they are responsive containers, and will be vertically stacked on a mobile view. Any standard component, or component that you have defined and registered, can be placed within a column – except mj-column or mj-section elements.

一个分区内列数的总和不能超过父级 mj-section 的宽度（或 100%）。每一列都必须包含内容，因为它们是响应式容器，在移动视图中会垂直堆叠。任何标准组件或您定义并注册的组件都可以放置在列中——mj-column 或 mj-section 元素除外。

```html
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <!-- Your first column -->
      </mj-column>
      <mj-column>
        <!-- Your second column -->
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

Columns are meant to be used as a container for your content. They must not be used as offset. Any mj-element included in a column will have a width equivalent to 100% of this column's width.
Columns cannot be nested into columns, and sections cannot be nested into columns as well.

列用于容纳您的内容，不能用作偏移量。列中包含的任何 mj 元素的宽度都将等于该列宽度的 100%。列不能嵌套在其他列中，节也不能嵌套在其他列中。

## mj-image

Displays a responsive image in your email. It is similar to the HTML `<img />` tag. Note that if no width is provided, the image will use the parent column width.

在电子邮件中显示响应式图片。它类似于 HTML 的 `<img />` 标签。请注意，如果未指定宽度，图片将使用父列的宽度。

```html
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image
          width="300px"
          src="https://static.mailjet.com/mjml-website/documentation/image.png"
        />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## mj-text

This tag allows you to display text and HTML in your email.

此标签允许您在电子邮件中显示文本和 HTML。

```html
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-family="Helvetica" color="#F45E43">
          <h1>Title</h1>
          <p>Paragraph</p>
          <p style="font-family:Comic Sans Ms">Another paragraph</p>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

::: tip
`mj-text` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components.

`mj-text` 是一个“结束标签”，这意味着它可以包含 HTML 代码，并且这些代码将保持不变，因此它可以包含带有属性的 HTML 标签，但不能包含其他 MJML 组件。
:::

## mj-button

Displays a customizable button.

显示一个可自定义的按钮。

::: tip
The `mj-button` won't be fully clickable because of client support.
由于客户端支持问题， mj-button 并不能做到所有场景下都能点击。
:::

```html
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-button
          font-family="Helvetica"
          background-color="#f45e43"
          color="white"
        >
          Don't click me!
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

::: tip
`mj-button` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components.

mj-button 是一个“结束标签”，这意味着它可以包含 HTML 代码，这些代码将保持不变，因此它可以包含带有属性的 HTML 标签，但不能包含其他 MJML 组件。
:::
