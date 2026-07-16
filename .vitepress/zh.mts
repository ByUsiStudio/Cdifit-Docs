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
            text: "站点信息",
            collapsed: true,
            items: [
              { text: "站点信息", link: "/zh/api/site/index.md" }
            ],
            link: "/zh/api/site/"
          },
          {
            text: "会话认证",
            collapsed: true,
            items: [
              { text: "密码登录", link: "/zh/api/session/password_sign_in.md" },
              { text: "完成 2FA 登录", link: "/zh/api/session/finish_sign_in_with_2fa.md" },
              { text: "刷新令牌", link: "/zh/api/session/refresh_token.md" },
              { text: "退出登录", link: "/zh/api/session/sign_out.md" }
            ],
            link: "/zh/api/session/"
          },
          {
            text: "用户",
            collapsed: true,
            items: [
              { text: "用户信息获取", link: "/zh/api/user/userinfo.md" },
              { text: "获取用户存储空间", link: "/zh/api/user/get_storage_capacity.md" },
              { text: "获取用户头像", link: "/zh/api/user/get_profile_picture.md" },
              { text: "用户的分享列表获取", link: "/zh/api/user/get_user_sharing_list.md" }
            ],
            link: "/zh/api/user/"
          },
          {
            text: "文件管理",
            collapsed: true,
            items: [
              { text: "文件管理概述", link: "/zh/api/file/index.md" },
              { text: "列出文件", link: "/zh/api/file/list_files.md" },
              { text: "获取文件信息", link: "/zh/api/file/get_file_info.md" },
              { text: "创建文件", link: "/zh/api/file/create_file.md" },
              { text: "创建文件夹", link: "/zh/api/file/create_folder.md" },
              { text: "重命名文件", link: "/zh/api/file/rename_file.md" },
              { text: "删除文件", link: "/zh/api/file/delete_file.md" },
              { text: "移动或复制文件", link: "/zh/api/file/move_or_copy_files.md" },
              { text: "创建下载链接", link: "/zh/api/file/create_download_url.md" }
            ],
            link: "/zh/api/file/"
          },
          {
            text: "分享管理",
            collapsed: true,
            items: [
              { text: "分享管理概述", link: "/zh/api/share/index.md" },
              { text: "创建分享链接", link: "/zh/api/share/create_share_link.md" },
              { text: "获取分享链接信息", link: "/zh/api/share/get_share_link_info.md" },
              { text: "列出我的分享链接", link: "/zh/api/share/list_my_share_links.md" },
              { text: "编辑分享链接", link: "/zh/api/share/edit_share_link.md" },
              { text: "删除分享链接", link: "/zh/api/share/delete_share_link.md" }
            ],
            link: "/zh/api/share/"
          },
          {
            text: "OAuth",
            collapsed: true,
            items: [],
            link: "/zh/api/oauth/"
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
