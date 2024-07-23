import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import { routers } from './routers/routes.js'
import store from './store'

window.addEventListener("storage", (event) => {
  if (event.key === "token") {
    const token = localStorage.getItem("token");
    store.commit("setLoginState", !!token);
  }
});

const token = localStorage.getItem('token');
if(token){
    store.commit('setLoginState', true)
}

createApp(App).use(store).use(routers).mount('#app')
