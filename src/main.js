import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import { initFirebaseAuth } from "./firebaseAuthInit"; // Tambah ini

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
initFirebaseAuth(); // Tambahkan setelah mount
