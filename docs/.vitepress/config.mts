import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import mineh5ui from './mineh5ui.mjs'
import { search } from './search.mjs'

/**
 * docs 文件夹
 */
const items = readdirSync(resolve(__dirname, '../docs'))
  .filter(item => item !== 'README.md')
  .reverse()

export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  themeConfig: {
    logo: '/logo.svg',
    lastUpdatedText: '更新时间',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '博客',
        items: [
          {
            text: '我的博客',
            link: '/docs/'
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/biao_feng',
            target: '_blank'
          }
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/biaov/wordpress',
        target: '_blank'
      },
      {
        text: '案例集锦',
        items: [
          {
            text: 'Github 源码',
            items: [
              {
                text: '组件库 mine-h5-ui',
                link: 'https://github.com/biaov/mine-h5-ui',
                target: '_blank'
              },
              {
                text: '初始化项目 create-mine',
                link: 'https://github.com/biaov/create-mine',
                target: '_blank'
              },
              {
                text: '客户端 mine-desktop',
                link: 'https://github.com/biaov/mine-desktop',
                target: '_blank'
              },
              {
                text: '项目模板 project-template',
                link: 'https://github.com/biaov/project-template',
                target: '_blank'
              },
              {
                text: '生态系统 ecosystem',
                link: 'https://github.com/biaov/ecosystem',
                target: '_blank'
              },
              {
                text: '多命令简化 mine-auto-cli',
                link: 'https://github.com/biaov/mine-auto-cli',
                target: '_blank'
              },
              {
                text: '特效集锦 effects',
                link: 'https://github.com/biaov/effects',
                target: '_blank'
              }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/docs/': [
        {
          text: '博文',
          items: [
            { text: '主页', link: '/docs/' },
            { text: 'VueJs 打包', link: '/docs/01' }
          ]
        }
      ],
      '/mine-h5-ui/': [
        {
          text: 'mine-h5-ui',
          items: [{ text: '主页', link: '/mine-h5-ui/' }, ...mineh5ui]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/biaov/wordpress/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2020-${new Date().getFullYear()} <a href="https://github.com/biaov" target="_blank">biaov</a>`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search
  }
})
