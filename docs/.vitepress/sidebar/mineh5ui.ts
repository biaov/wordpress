import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { getTitle } from '../../utils'
import mineh5ui from './mineh5ui.json'
import type { ConfigItem } from '../../types'

const config: ConfigItem[] = mineh5ui

/**
 * 前缀
 */
let prefixURL: string

const appendItems = (item: ConfigItem | string) => {
  if (typeof item === 'string') {
    return getTitle(resolve(import.meta.dirname, `../../mine-h5-ui/${item}.md`), prefixURL + item)
  } else if (item.items) {
    item.items = item.items.map(appendItems) as ConfigItem[]
    return item
  }
}

export default (item: Required<Pick<ConfigItem, 'text' | 'link'>>) => {
  prefixURL = item.link

  config.forEach(it => {
    it.items && (it.items = it.items.map(appendItems) as ConfigItem[])
  })

  config.unshift(item)

  return config as DefaultTheme.SidebarItem[]
}
