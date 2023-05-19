import { defineUserConfig, defaultTheme, UserConfig } from 'vuepress'
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
  theme: defaultTheme(theme)
}

export default defineUserConfig(config)
