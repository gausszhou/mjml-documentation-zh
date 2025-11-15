# 基本布局示例

In this section, you're going to learn how to code a basic email template using MJML.

在本节中，您将学习如何使用 MJML 编写基本的电子邮件模板。

Here is the final render we want to end with:

这是我们最终想要呈现的渲染效果：

<p style="text-align: center;" >
  <a href="https://mjml.io/try-it-live/templates/basic"><img width="350px" src="https://static.mailjet.com/mjml-website/documentation/basic-layout-example.png" alt="sexy"></a>
</p>

Looks cool, right? 看起来很酷，对吧？

## Sections 章节

```html
<mjml>
  <mj-body>
    <!-- Company Header -->
    <mj-section background-color="#f0f0f0"></mj-section>
    <!-- Image Header -->
    <mj-section background-color="#f0f0f0"></mj-section>
    <!-- Introduction Text -->
    <mj-section background-color="#fafafa"></mj-section>
    <!-- 2 columns section -->
    <mj-section background-color="white"></mj-section>
    <!-- Icons -->
    <mj-section background-color="#fbfbfb"></mj-section>
    <!-- Social icons -->
    <mj-section background-color="#f0f0f0"></mj-section>
  </mj-body>
</mjml>
```

First, we will implement the skeleton which are the sections. Here, our email is going to be divided into 6 sections.

首先，我们将实现邮件框架，也就是邮件的各个部分。这里，我们的邮件将分为 6 个部分。

## Company Header 公司头部

```html
<!-- Company Header -->
<mj-section background-color="#f0f0f0">
  <mj-column>
    <mj-text
      align="center"
      font-style="italic"
      font-size="20px"
      color="#626262"
    >
      My Company
    </mj-text>
  </mj-column>
</mj-section>
```

The first section of the email consists in a centered banner, containing only the company name. The following markup is the MJML representation of the layout we want to obtain.

邮件的第一部分是一个居中的横幅，其中仅包含公司名称。以下标记是我们想要实现的布局的 MJML 表示。

::: tip
Remember everything has to be contained in one column.  
记住，所有内容都必须包含在同一列中。
:::

The text padding represents the inner space around the content within the `mj-text` element.

文本内边距表示 `mj-text` 元素内内容周围的内部空间。

## Image Header 图片头部

```html
<!-- Image Header -->
<mj-section
  background-url="https://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
  background-size="cover"
  background-repeat="no-repeat"
>
  <mj-column width="600px">
    <mj-text
      align="center"
      color="#fff"
      font-size="40px"
      font-family="Helvetica Neue"
    >
      Slogan here
    </mj-text>
    <mj-button background-color="#F63A4D" href="#"> Promotion </mj-button>
  </mj-column>
</mj-section>
```

Next comes a section with a background image and a block of text (representing the company slogan) and a button pointing to a page listing all the company promotions.

接下来是一个包含背景图片和一段文字（代表公司标语）的部分，以及一个指向列出公司所有促销活动的页面的按钮。

To add the image header, you will have to replace the section's background-color by a background-url.
Similarly to the first header, you will have to center the text both vertically and horizontally.
The padding remains the same.
The button `href` sets the button location.
In order to have the background rendered full-width in the column, set the column width to 600px with `width="600px"`.

要添加图片标题，您需要将该部分的背景颜色替换为背景 URL。与第一个标题类似，您需要将文本垂直和水平居中。内边距保持不变。按钮的 `href` 用于设置按钮的位置。为了使背景在列中全宽显示，请将列宽设置为 `600px`，即 `width="600px"` 。

## Introduction Text 介绍文本

```html
<!-- Intro text -->
<mj-section background-color="#fafafa">
  <mj-column width="400px">
    <mj-text
      font-style="italic"
      font-size="20px"
      font-family="Helvetica Neue"
      color="#626262"
    >
      My Awesome Text
    </mj-text>
    <mj-text color="#525252">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim
      eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras
      id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh.
      Proin nec commodo purus. Sed eget nulla elit. Nulla aliquet mollis
      faucibus.
    </mj-text>

    <mj-button background-color="#F45E43" href="#"> Learn more </mj-button>
  </mj-column>
</mj-section>
```

The introduction text will consist of a title, a main text and a button.
The title is a regular `mj-text` that can be customized.

介绍文本将包含标题、正文和按钮。标题为可自定义的常规 `mj-text` 。

## 2 Columns Section 2列部分

```html
<!-- Side image -->
<mj-section background-color="white">
  <!-- Left image -->
  <mj-column>
    <mj-image
      width="200px"
      src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
    />
  </mj-column>
  <!-- right paragraph -->
  <mj-column>
    <mj-text
      font-style="italic"
      font-size="20px"
      font-family="Helvetica Neue"
      color="#626262"
    >
      Find amazing places
    </mj-text>
    <mj-text color="#525252">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim
      eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras
      id dui lectus. Vestibulum sed finibus lectus.
    </mj-text>
  </mj-column>
</mj-section>
```

This sections is made up of 2 columns. One containing an image, the other one containing a text.
For the image part, note that when a tag does not have any child, you can use the XML self-closing tag syntax:
`<mj-image />`

本部分由两列组成，一列包含图片，另一列包含文本。 关于图像部分，请注意，当标签没有任何子元素时，可以使用 XML 自闭合标签语法： `<mj-image />`

For the text part, you are going to need two `<mj-text>`s like above. One with a title format, and the other one as a regular text.

文本部分，你需要两个像上面那样的 `<mj-text>` 元素。一个使用标题格式，另一个使用普通文本格式

## Icons 图标

```html
<!-- Icons -->
<mj-section background-color="#fbfbfb">
  <mj-column>
    <mj-image width="100px" src="https://191n.mj.am/img/191n/3s/x0l.png" />
  </mj-column>
  <mj-column>
    <mj-image width="100px" src="https://191n.mj.am/img/191n/3s/x01.png" />
  </mj-column>
  <mj-column>
    <mj-image width="100px" src="https://191n.mj.am/img/191n/3s/x0s.png" />
  </mj-column>
</mj-section>
```

This section is a 3-columns-based section. Please notice you can make the padding vary to change the space around the images.

本部分采用三列布局。请注意，您可以调整内边距来改变图片周围的间距。

## Social Icons 社交图标

```html
<mj-section background-color="#e7e7e7">
  <mj-column>
    <mj-social>
      <mj-social-element name="facebook">Share</mj-social-element>
    </mj-social>
  </mj-column>
</mj-section>
```

The MJML standard components library comes with a `mj-social` component. Here, we're going to use `facebook` only.

MJML 标准组件库自带一个 `mj-social` 组件。这里，我们将只使用 `facebook` 。
