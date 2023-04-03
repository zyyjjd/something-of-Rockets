/*
 * @Date: 2023-04-03 10:26:14
 * @LastEditTime: 2023-04-03 10:46:49
 * @FilePath: /Rockets/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
