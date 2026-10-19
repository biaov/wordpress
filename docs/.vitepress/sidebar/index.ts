import mineh5ui from './mineh5ui.ts'
import docs from './docs.ts'

export default {
  '/docs/': docs({ text: '🚪 主页', link: '/docs/' }),
  '/mine-h5-ui/': mineh5ui({ text: '🚪 主页', link: '/mine-h5-ui/' })
}
