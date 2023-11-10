import { DefaultThemeOptions } from 'vuepress'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import mineh5ui from './mineh5ui'

/**
 * docs 文件夹
 */
const children = readdirSync(resolve(__dirname, '../docs')).filter(item => item !== 'README.md').reverse()

/**
 * 配置文件
 */
const config: DefaultThemeOptions = {
  logo: '/logo.svg',
  lastUpdatedText: '更新时间',
  contributorsText: '贡献者们',
  navbar: [
    {
      text: '首页',
      link: '/'
    },
    {
      text: '博客',
      ariaLabel: '博客菜单',
      children: [
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
      ariaLabel: '案例集锦',
      children: [
        {
          text: 'Github 源码',
          ariaLabel: 'Github 源码',
          children: [
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
        text: '返回首页',
        link: '/'
      },
      {
        text: '博文',
        link: '/docs/',
        children
      }
    ],
    '/mine-h5-ui/': [
      {
        text: '返回首页',
        link: '/'
      },
      {
        text: 'mine-h5-ui',
        link: '/mine-h5-ui/',
        children: mineh5ui
      }
    ]
  }
}

export default config
