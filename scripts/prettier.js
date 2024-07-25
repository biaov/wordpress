import { readFileSync, writeFileSync } from 'fs'
import prettier from 'prettier'
import stripJsonComments from 'strip-json-comments'

// prettier 配置文件
const settingPath = 'C:/Users/Administrator/AppData/Roaming/Code/User/settings.json'
const settingJSON = JSON.parse(stripJsonComments(readFileSync(settingPath).toString()))
const newSetting = Object.entries(settingJSON).reduce((prev, [key, value]) => {
  const [first, end] = key.split('.')
  first === 'prettier' && (prev[end] = value)
  return prev
}, {})

/**
 * 格式化
 */
export const format = (value, option = {}) => prettier.format(value, { ...newSetting, parser: 'markdown', ...option })
