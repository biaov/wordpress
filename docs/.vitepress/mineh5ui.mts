import type { DefaultTheme } from 'vitepress'

const config = [
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
        items: ['input', 'radio', 'checkbox', 'switch', 'keyboard', 'password', 'search', 'rate', 'slider', 'datetimePicker', 'addressPicker', 'upload', 'form']
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
        items: ['progressBar', 'accordion', 'countDown', 'divider', 'empty', 'preview', 'noticeBar', 'swiper', 'tag', 'countTo', 'error']
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

const prefixURL = '/mine-h5-ui/'

const appendItems = item => {
  if (item.items) {
    item.items = item.items.map(appendItems)
    return item
  } else {
    return { text: item, link: prefixURL + item }
  }
}
config.forEach(item => {
  if (item.items) {
    item.items = item.items.map(appendItems)
  }
})

export default config as unknown as DefaultTheme.SidebarItem[]
