import { createApp } from "vue";
import App from "./App.vue";
import modalPlugin from "./plugins/modal/index.ts";
import i18nPlugin from "./plugins/i18n.ts";
const app = createApp(App);

// 注册插件
app.use(modalPlugin);
app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});

app.mount("#app");
