import { createApp } from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import store from "./store";

createApp(App)
  .use(store)
  .use(VueI18n)
  .mount("#app");
