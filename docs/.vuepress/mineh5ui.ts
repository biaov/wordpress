export default [
  {
    text: '指南',
    children: ['introduce', 'install', 'start', 'theme', 'logs']
  },
  {
    text: '组件',
    children: [
      {
        text: '基础组件',
        children: ['button', 'icon', 'img', 'popup', 'cell', 'space']
      },
      {
        text: '表单组件',
        children: [
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
        children: ['actionSheet', 'toast', 'loading', 'mask', 'messageBox', 'dialog', 'shareSheet', 'swiperCell']
      },
      {
        text: '导航组件',
        children: ['grid', 'indexBar', 'navBar', 'tab', 'tabBar', 'pullRefresh']
      },
      {
        text: '展示组件',
        children: [
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
        children: ['virtualList', 'screenshot', 'step', 'drag', 'coupon', 'mspaint', 'jigsawValidate']
      }
    ]
  },
  {
    text: '封装',
    children: [
      {
        text: '样式封装',
        children: ['style']
      },
      {
        text: '方法封装',
        children: ['api', 'regexp', 'composable']
      }
    ]
  }
]
