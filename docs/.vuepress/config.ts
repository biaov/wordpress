import { defineUserConfig, defaultTheme, UserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
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
      apiKey: 'dc49aef8f8c73afe86481f061d7ff175',
      indexName: 'wordpress-biaov',
      placeholder: '搜索文档',
      disableUserPersonalization: false,
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '重置',
                resetButtonAriaLabel: '重置',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '历史',
                noRecentSearchesText: '暂无内容',
                saveRecentSearchButtonTitle: '保存',
                removeRecentSearchButtonTitle: '移除历史记录',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '移除收藏'
              },
              errorScreen: {
                titleText: '错误',
                helpText: '您可能需要检查您的网络连接！'
              },
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: '回车',
                navigateText: '导航',
                navigateUpKeyAriaLabel: '上箭头',
                navigateDownKeyAriaLabel: '下箭头',
                closeText: '关闭',
                closeKeyAriaLabel: '退出',
                searchByText: '搜索方式'
              },
              noResultsScreen: {
                noResultsText: '暂无内容',
                suggestedQueryText: '尝试搜索',
                reportMissingResultsText: '相信这个查询应该返回结果吗？',
                reportMissingResultsLinkText: '让我们知道'
              }
            }
          }
        }
      }
    }),
    shikiPlugin({ theme: 'dark-plus' })
  ]
}

export default defineUserConfig(config)
