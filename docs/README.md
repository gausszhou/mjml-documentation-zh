# MLML 指南

MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase. MJML’s open-source engine generates high quality responsive HTML compliant with best practices.

MJML 是一种标记语言，旨在简化响应式电子邮件的编码过程。其语义化的语法使其简单易用，丰富的标准组件库可加快开发速度并减轻电子邮件代码库的负担。MJML 的开源引擎可生成符合最佳实践的高质量响应式 HTML。

## Overview 概述

MJML rolls up all of what Mailjet has learned about HTML email design over the past few years and abstracts the whole layer of complexity related to responsive email design.

MJML 汇总了 Mailjet 在过去几年中积累的关于 HTML 电子邮件设计的所有经验，并抽象化了与响应式电子邮件设计相关的整个复杂层面。

Get your speed and productivity boosted with MJML’s semantic syntax. Say goodbye to endless HTML table nesting or email client specific CSS. Building a responsive email is super easy with tags such as `<mj-section>` and `<mj-column>`.

使用 MJML 的语义语法，提升您的速度和效率。告别无休止的 HTML 表格嵌套或针对特定邮件客户端的 CSS。使用 `<mj-section>` 和 `<mj-column>` 等标签，构建响应式电子邮件变得异常简单。

MJML has been designed with responsiveness in mind. The abstraction it offers guarantee you to always be up-to-date with the industry practices and responsive. Email clients update their specs and requirements regularly, but we geek about that stuff - we’ll stay on top of it so you can spend less time reading up on latest email client updates and more time designing beautiful email.

MJML 的设计以响应式设计为核心。它提供的抽象层确保您始终与行业标准保持同步，并具备响应式功能。电子邮件客户端会定期更新其规范和要求，但我们对此非常关注——我们会密切关注最新动态，让您可以减少阅读最新电子邮件客户端更新的时间，将更多精力投入到设计精美的电子邮件上。

## Example 举例

```html
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image
          width="100px"
          src="https://mjml.io/assets/img/logo-small.png"
        ></mj-image>
        <mj-divider border-color="#F45E43"></mj-divider>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica"
          >Hello World</mj-text
        >
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```
