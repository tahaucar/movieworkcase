import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import store from "./store";
import router from "@/router";


const app = createApp(App);
app.use(VueAxios, axios);
app.use(store);
app.use(BootstrapVue3);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
