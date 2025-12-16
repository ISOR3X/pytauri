export default defineNuxtConfig({
  extends: ["docus"],
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  site: {
    name: "PyTauri",
  },
  mcp: {
    enabled: false,
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["python", "json", "toml"],
        },
      },
    },
  },
});
