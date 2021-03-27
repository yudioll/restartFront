module.exports = {
  title: "yudioll",
  description: "一名前端coder，再这里记录自己的所学所得.",
  theme: "reco",
  themeConfig: {
    author: 'yudioll',
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // nav: [{ text: "TimeLine", link: "/timeline/", icon: "reco-date" }],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "文章分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "文章Tag", // 默认文案 “标签”
      }
    },
  },
  dest: 'public',
  head: [["link", { rel: "icon", href: "/logo.png" }]],
};
