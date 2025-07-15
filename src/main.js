import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#ff595eff",
          secondary: "#ffca3aff",
          tertiary: "#8ac926ff",
          accent: "#5D9AC1ff",
          info: "#8a64beff",
          pichau: "#ff595eff",

          "cor-mais-barato": "#8ac926ff",
          "cor-mais-caro": "#ff595eff",
          "cor-nossa-loja": "#5D9AC1ff",

          background: "#fafafaff",
          text: "#121212ff",
          grey: "#bebebeff",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#ff7a7fff",
          secondary: "#ffd666ff",
          tertiary: "#a3d642ff",
          accent: "#7bb5d6ff",
          info: "#8a64beff",

          pichau: "#ff7a7fff",

          "cor-mais-barato": "#a3d642ff",
          "cor-mais-caro": "#ff7a7fff",
          "cor-nossa-loja": "#7bb5d6ff",

          background: "#121212ff",
          text: "#fafafaff",
          grey: "#bebebeff",
        },
      },
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
