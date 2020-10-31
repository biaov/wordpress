/**
 * @file 配置文件
 * @author biaov<biaov@qq.com>
 * @date 2020-10-30 20:00
 */
const { addStyleResource } = require("../../build/less");
const themeConfig = require("../../build/themeConfig");
// 配置
const config = {
  base: "/",
  title: "个人博客",
  description: "这是我用 VuePress 搭建的个人博客！",
  dest: "dist",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  host: "127.0.0.1",
  port: "8888",
  themeConfig,
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    // stylus修改成less
    types.forEach(type => addStyleResource(config.module.rule("less").oneOf(type)));
  }
};

module.exports = config;
