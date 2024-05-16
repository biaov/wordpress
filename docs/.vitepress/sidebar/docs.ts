import { readdirSync } from 'fs'
import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { getTitle } from '../../utils'
import type { ConfigItem } from '../../types'

export default (item: Required<Pick<ConfigItem, 'text' | 'link'>>) => {
  const config: DefaultTheme.SidebarItem[] = []

  readdirSync(resolve(import.meta.dirname, '../../docs'), { withFileTypes: true }).forEach((dirent, i) => {
    if (dirent.name === 'index.md') return
    const index = i + 1
    const option = getTitle(resolve(dirent.parentPath, dirent.name), `${item.link}${index < 10 ? '0' : ''}${index}`)
    option && config.unshift(option)
  })

  return config
}
