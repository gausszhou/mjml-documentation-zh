// .vuepress/config.js
module.exports = {
  theme: "@gausszhou/vuepress-theme-gauss",
  title: "MJML 指南",
  base: "/mjml-documentation-zh/",
  dest: "dist",
  themeConfig: {
    repo: "gausszhou/mjml-documentation-zh",
    repoLabel: "Github",
    docsRepo: "gausszhou/mjml-documentation-zh",
    docsBranch: "master/docs",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    lastUpdated: "Last Updated",
    sidebarDepth: 2,
    nav: [],
    sidebar: {
      "/": [
        "",
      ],
    },
  },
};
