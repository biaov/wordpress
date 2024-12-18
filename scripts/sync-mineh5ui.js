import { cpSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { format } from './prettier.js'

const { dirname } = import.meta
const mineh5uiProject = resolve(dirname, '../../mine-h5-ui/v2/examples')

/**
 * 标题转路径
 */
const titleToPath = title => {
  const group = title.split(' ')
  const [name] = group

  if (group.includes('API')) return name === 'API' ? 'api' : 'composable'
  return name[0].toLowerCase() + name.slice(1)
}

/**
 * 复制配置文件
 */
const cpConfig = async () => {
  const navConfigName = 'routes.json'
  const tempConfigPath = `../temp/${navConfigName}`
  cpSync(resolve(mineh5uiProject, `config/${navConfigName}`), resolve(dirname, tempConfigPath))
  const { default: config } = await import(tempConfigPath, { with: { type: 'json' } })
  const mineh5ui = Object.entries(config).map(([key, value]) => {
    let items
    if (Array.isArray(value)) {
      items = value.map(titleToPath)
    } else {
      items = Object.entries(value).map(([key, value]) => {
        const newItems = value.map(titleToPath)
        return { text: key, items: newItems }
      })
    }

    return { text: key, items }
  })
  writeFileSync(resolve(dirname, '../docs/.vitepress/sidebar/mineh5ui.json'), JSON.stringify(mineh5ui, null, 2))
}

/**
 * 替换里面的路径
 */
const replacePath = path => {
  const files = readdirSync(path)
  files.forEach(async name => {
    const filePath = join(path, name)
    const content = readFileSync(filePath)
      .toString()
      .replaceAll('(/v2/doc/', '(/mine-h5-ui/')
      .replace(/(?:\:\:\: CopyCode)([\s\S]+?)(?:\:\:\:)/g, '$1')
    const value = await format(content)
    writeFileSync(filePath, value)
  })
}

/**
 * 复制文档
 */
const cpDocs = () => {
  const output = resolve(dirname, '../docs/mine-h5-ui')
  const input = resolve(mineh5uiProject, 'docs')

  cpSync(input, output, { recursive: true })
  replacePath(output)
}

// 执行
cpConfig()
cpDocs()
