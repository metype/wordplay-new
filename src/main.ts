import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import vuetify from "./plugins/vuetify";

createApp(App)
  .use(vuetify, {
    options: {
      customProperties: true,
    },
  })
  .mount("#app");
