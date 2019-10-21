module.exports = {
  title: '中道部落格',
  description: '使用 VuePress 打造的部落格',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '指引', link: '/guide/' },
      { text: '文章', link: '/posts/' },
      { text: '模版', link: 'https://github.com/AlanJui/vuepress-blog/' },
    ],
    sidebar: [
      '/',
      '/guide/',
      '/posts/',
    ]
  }
}
