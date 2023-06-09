import { defineUserConfig, defaultTheme, UserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './theme'

const config: UserConfig = {
  lang: 'zh-CN',
  base: '/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  host: '0.0.0.0',
  port: 8888,
  theme: defaultTheme(theme),
  plugins: [
    docsearchPlugin({
      appId: 'J4IXB1KJHT',
      apiKey: 'bf1bfbfae3d460e0a5b4f5e7c9515ef2',
      indexName: 'wordpress-biaov',
      placeholder: '搜索文档',
      disableUserPersonalization: false,
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档'
            }
          }
        }
      }
    })
    // searchPlugin({
    //   locales: {
    //     '/': {
    //       placeholder: '搜索文档'
    //     }
    //   }
    // })
  ]
}

export default defineUserConfig(config)
