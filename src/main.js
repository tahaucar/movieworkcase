import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./assets/scss/main.scss";

import store from "./store";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faUserSecret
);

const app = createApp(App);
app.config.productionTip = false;
app.use(VueAxios, axios);
app.use(store);
app.use(BootstrapVue3);
app.use(router);
app.use(VueAxios, axios);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
