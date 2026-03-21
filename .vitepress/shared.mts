import { defineConfig } from "vitepress";
import { zhSearch } from "./zh.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CdifitAPI文档",

  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/cdifit.png",
      dark: "/cdifit_dark.png",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/byusi-studio/cdifit-docs" },
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "S7JRLMCZAV",
        apiKey: "f14604c870f58b8ea265e5b4a36d05bb",
        indexName: "cloudreve",
        insights: true,
        locales: {
          ...zhSearch,
        },
      },
    },
  },
});
