import { DefaultThemeOptions } from 'vuepress'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const files = readdirSync(resolve(__dirname, '../blog'))

// 目录配置
const children = Array.from(new Array(files.length - 1), (_, i) => {
  const num = i + 1
  return num < 10 ? '0' + num : String(num)
})
children.reverse()
// 配置文件
const config: DefaultThemeOptions = {
  logo: '/logo.svg',
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
          link: '/blog/'
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
    '/blog/': [
      {
        text: '首页',
        link: '/',
        collapsible: true
      },
      {
        text: '博文',
        link: '/blog/',
        children,
        collapsible: true
      }
    ]
  }
}

export default config
