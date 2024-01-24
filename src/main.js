import "./assets/tailwind.css";
import "./assets/base.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import supabase from "@/supabase.js";
import useStore from "@/store.js";
import { getUserData } from "@/supabase/user.js";

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

const { onSignIn, onSignOut, setUserData } = useStore();

supabase.auth.onAuthStateChange(event => {
  if (event === "SIGNED_IN") {
    onSignIn();
    getUserData();
  }

  if (event === "SIGNED_OUT") {
    onSignOut();
    setUserData({});
  }
});

app.mount("#app");
