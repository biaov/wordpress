const { readdirSync } = require("fs");
const { resolve } = require("path");
const files = readdirSync(resolve(__dirname, "../docs/blog"));
// 目录配置
const children = Array.from(new Array(files.length - 1), (_, i) => {
  const num = i + 1;
  return num < 10 ? "0" + num : String(num);
});
children.reverse();
// 配置文件
const config = {
  logo: "/logo.svg",
  search: false,
  smoothScroll: true,
  nav: [
    {
      text: "首页",
      link: "/"
    },
    {
      text: "博客",
      ariaLabel: "博客菜单",
      items: [
        {
          text: "我的博客",
          link: "/blog/"
        },
        {
          text: "CSDN",
          link: "https://blog.csdn.net/biao_feng",
          target: "_blank"
        }
      ]
    },
    {
      text: "Github",
      link: "https://github.com/biaov/wordpress",
      target: "_blank"
    }
  ],
  sidebar: {
    "/blog/": [
      {
        title: "首页",
        path: "/"
      },
      {
        title: "博文",
        path: "/blog/",
        collapsable: false,
        sidebarDepth: 3,
        children
      }
    ]
  }
};

module.exports = config;
