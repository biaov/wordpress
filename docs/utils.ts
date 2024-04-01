import { readFileSync } from 'fs'

/**
 * 获取标题
 */
export const getTitle = (filePath: string, link: string) => {
  const lines = readFileSync(filePath, { encoding: 'utf-8' }).toString().split(/\r?\n/)
  for (const line of lines) {
    if (line.startsWith('# ')) return { text: line.slice(2), link }
  }
}
