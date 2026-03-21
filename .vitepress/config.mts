import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import shared from "./shared.mts";
import zh from "./zh.mts";

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "简体中文", link: "/zh", ...zh },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  vite: {
    optimizeDeps: {
      include: ['mermaid'],
      force: true
    },
    ssr: {
      noExternal: ['mermaid']
    },
    resolve: {
      alias: {
        'mermaid': 'mermaid/dist/mermaid.js'
      }
    }
  }
});