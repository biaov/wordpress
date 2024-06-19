import { cpSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const { dirname } = import.meta

const mineh5uiProject = resolve(dirname, '../../mine-h5-ui/v2/examples')

/**
 * 复制配置文件
 */
const cpConfig = async () => {
  const navConfigName = 'nav.config'
  const tempConfigPath = `../temp/${navConfigName}.js`
  cpSync(resolve(mineh5uiProject, `config/${navConfigName}.ts`), tempConfigPath)
  const { default: config } = await import(tempConfigPath)

  const mineh5ui = Object.entries(config).map(([key, value]) => {
    const items = value.map(item =>
      item.items?.length ? { text: item.meta.title, items: item.items.map(item => item.name) } : item.name
    )
    return { text: key, items }
  })

  writeFileSync(resolve(dirname, '../docs/.vitepress/sidebar/mineh5ui.json'), JSON.stringify(mineh5ui, null, 2))
}

/**
 * 复制文档
 */
const cpDocs = () => {
  const output = resolve(dirname, '../docs/mine-h5-ui')
  const input = resolve(mineh5uiProject, 'docs')

  cpSync(input, output, { recursive: true })
}

// 执行
cpConfig()
cpDocs()
