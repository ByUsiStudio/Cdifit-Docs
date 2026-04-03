import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  description: "Cdifit API文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "https://docs.cdifit.com/" },
      { text: "Cdifit", link: "https://www.cdifit.cn" },
    ],

    sidebar: [
      {
        text: "起步",
        collapsed: true,
        items: [
          { text: "欢迎", link: "/zh/" },
          { text: "开发者接口", link: "/zh/api/" }
        ],
      },
      {
        text: "开发者接口",
        collapsed: false,
        items: [
          {
            text: "OAuth",
            collapsed: true,
            items: [
            ],
            link: "/zh/api/oauth/"
          },
          {
            text: "用户",
            collapsed: true,
            items: [
              {
                text: "用户信息获取",
                link: "/zh/api/user/userinfo.md",
              },
              {
                text: "获取用户存储空间",
                link: "/zh/api/user/get_storage_capacity.md",
              },
              {
                text: "获取用户头像",
                link: "/zh/api/user/get_profile_picture.md",
              },
              {
                text: "用户的分享列表获取",
                link: "/zh/api/user/get_user_sharing_list.md"
              }
            ],
            link: "/zh/api/user/"
          },
        ],
        link: "/zh/api/",
      },
    ],

    editLink: {
      pattern: "https://gitee.com/byusistudio/cdifit-docs/blob/master/:path",
      text: "在 Gitee 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});

export const zhSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
