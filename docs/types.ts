/**
 * config
 */
export interface ConfigItem {
  text: string
  link?: string
  items?: string[] | ConfigItem[]
  collapsed?: boolean
}
