import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { getTitle } from '../utils'
import type { ConfigItem } from '../types'

const config: ConfigItem[] = [
  {
    text: '指南',
    items: ['introduce', 'install', 'start', 'theme', 'logs']
  },
  {
    text: '组件',
    items: [
      {
        text: '基础组件',
        items: ['button', 'icon', 'img', 'popup', 'cell', 'space']
      },
      {
        text: '表单组件',
        items: [
          'input',
          'radio',
          'checkbox',
          'switch',
          'keyboard',
          'password',
          'search',
          'rate',
          'slider',
          'datetimePicker',
          'addressPicker',
          'upload',
          'form'
        ]
      },
      {
        text: '反馈组件',
        items: ['actionSheet', 'toast', 'loading', 'mask', 'messageBox', 'dialog', 'shareSheet', 'swiperCell']
      },
      {
        text: '导航组件',
        items: ['grid', 'indexBar', 'navBar', 'tab', 'tabBar', 'pullRefresh']
      },
      {
        text: '展示组件',
        items: [
          'progressBar',
          'accordion',
          'countDown',
          'divider',
          'empty',
          'preview',
          'noticeBar',
          'swiper',
          'tag',
          'countTo',
          'error'
        ]
      },
      {
        text: '业务组件',
        items: ['virtualList', 'screenshot', 'step', 'drag', 'coupon', 'mspaint', 'jigsawValidate']
      }
    ]
  },
  {
    text: '封装',
    items: [
      {
        text: '样式封装',
        items: ['style']
      },
      {
        text: '方法封装',
        items: ['api', 'regexp', 'composable']
      }
    ]
  }
]

/**
 * 前缀
 */
let prefixURL: string

const appendItems = (item: ConfigItem | string) => {
  if (typeof item === 'string') {
    const aa = getTitle(resolve(import.meta.dirname, `../mine-h5-ui/${item}.md`), prefixURL + item)
    if (item === 'drag') {
      console.log(resolve(import.meta.dirname, `../mine-h5-ui/${item}.md`), aa, '---')
    }
    return aa
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
