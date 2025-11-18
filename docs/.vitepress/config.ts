import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import { search } from './search'
import sidebar from './sidebar'

export default defineConfig({
  title: 'WordPress',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  markdown: {
    languageAlias: {
      conf: 'bash'
    },
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/biaov/wordpress' }],
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
    sidebar,
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
      label: '目录'
    },
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search,
    notFound: {
      title: '404 页面不存在',
      quote: '很抱歉，我们没有找到您要查找的页面。',
      linkText: '返回首页'
    }
  },
  outDir: resolve(import.meta.dirname, '../../dist'),
  sitemap: {
    hostname: 'https://wordpress.biaov.cn/'
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          git: localIconLoader(import.meta.url, '../assets/git.svg')
        }
      })
    ]
  }
})
