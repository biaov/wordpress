import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { getTitle } from '../../utils.ts'
import mineh5ui from './mineh5ui.json' with { type: 'json' }
import type { ConfigItem } from '../../types.ts'

const config: ConfigItem[] = mineh5ui

/**
 * 前缀
 */
let prefixURL: string

const appendItems = (item: ConfigItem | string) => {
  if (typeof item === 'string') {
    return getTitle(resolve(import.meta.dirname, `../../mine-h5-ui/${item}.md`), prefixURL + item)
  } else if (item.items) {
    item.collapsed = false
    item.items = item.items.map(appendItems) as ConfigItem[]
    return item
  }
}

const keyEmoji = {
  指南: '🧭',
  组件: '🗂️',
  封装: '🔒'
}
export default (item: Required<Pick<ConfigItem, 'text' | 'link'>>) => {
  prefixURL = item.link

  config.forEach(it => {
    if (it.items) {
      it.collapsed = false
      it.items = it.items.map(appendItems) as ConfigItem[]
    }
    Object.entries(keyEmoji).some(([key, value]) => {
      const result = it.text === key
      result && (it.text = `${value} ${it.text}`)
      return result
    })
  })

  config.unshift(item)
  return config as DefaultTheme.SidebarItem[]
}
