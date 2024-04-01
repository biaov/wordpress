import { readdirSync, readFileSync } from 'fs'
import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { getTitle } from '../utils'
import type { ConfigItem } from '../types'

/**
 * 前缀
 */
let prefixURL: string

export default (item: Required<Pick<ConfigItem, 'text' | 'link'>>) => {
  prefixURL = item.link

  const allDirs = readdirSync(resolve(import.meta.dirname, '../docs'), { withFileTypes: true })
  const config = allDirs
    .reverse()
    .filter(dirent => dirent.name !== 'index.md')
    .map((dirent, i) => {
      const index = i + 1
      return getTitle(resolve(dirent.path, dirent.name), `${prefixURL}${index < 10 ? '0' : ''}${index}`)
    })

  config.unshift(item)

  return config as DefaultTheme.SidebarItem[]
}
