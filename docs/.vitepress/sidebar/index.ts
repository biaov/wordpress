import mineh5ui from './mineh5ui'
import docs from './docs'

export default {
  '/docs/': [
    {
      text: '博文',
      items: docs({ text: '主页', link: '/docs/' })
    }
  ],
  '/mine-h5-ui/': [
    {
      text: 'mine-h5-ui',
      items: mineh5ui({ text: '主页', link: '/mine-h5-ui/' })
    }
  ]
}
