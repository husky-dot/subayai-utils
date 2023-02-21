module.exports = {
  lang: 'zh-CN',
  title: 'subayai-utils',
  // base: '.',
  description: '一个短小而精悍的现代JavaScript使用工具库',
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/husky-dot/subayai-utils' }],
    editLink: {
      pattern: 'https://github.com/tobe-fe-dalao/fastool/tree/doc/docs/:path',
      text: '在GitHub编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present BlindMonk',
    },
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
    },
  },
};

function nav() {
  return [
    { text: '介绍', link: '/guide/' },
    { text: '加入我们', link: 'https://github.com/husky-dot/subayai-utils' },
  ];
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/start' },
      ],
    },
    // {
    //   text: 'Browser浏览器',
    //   items: [
    //     { text: 'Browser', link: '/guide/Browser' },
    //     { text: 'Device设备', link: '/guide/Device' },
    //   ],
    // },
    {
      text: '工具方法',
      collapsed: true,
      collapsible: false,
      items: [
        {
          text: '本地储存',
          link: '/guide/Storage',
        },
        {
          text: '随机生成',
          link: '/guide/Random',
        },
        {
          text: '数字操作',
          link: '/guide/Number',
        },
        {
          text: '字符串操作',
          collapsible: false,
          link: '/guide/String',
        },
        {
          text: '数组操作',
          collapsible: false,
          link: '/guide/Array',
        },
        {
          text: '日期时间',
          collapsible: false,
          link: '/guide/Date',
        },
        {
          text: '文件操作',
          link: '/guide/File',
        },
        {
          text: '浏览器操作',
          link: '/guide/Bom',
        },
        {
          text: '辅助方法',
          link: '/guide/Helper',
        },
      ],
    },
    {
      text: '正则校验',
      collapsible: false,
      items: [
        { text: '常用正则', link: '/guide/regex/Common' },
        { text: '数字正则', link: '/guide/regex/Number' },
        { text: '字符串正则', link: '/guide/regex/String' },
      ],
    },
  ];
}
