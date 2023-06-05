import { DefaultThemeOptions } from 'vuepress'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const files = readdirSync(resolve(__dirname, '../docs'))

// 目录配置
const children = Array.from({ length: files.length - 1 }, (_, i) => `${i < 9 ? 0 : ''}${i + 1}`).reverse()

// 配置文件
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
    }
  ],
  sidebar: {
    '/docs/': [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '博文',
        link: '/docs/',
        children
      }
    ]
  }
}

export default config
