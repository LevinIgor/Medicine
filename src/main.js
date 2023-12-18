import "./assets/tailwind.css";
import "./assets/base.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBsfCn__mC2n9P1fGoioX9J7TPtr4WrMAY",
    v: 3.55,
  },
});

app.mount("#app");
