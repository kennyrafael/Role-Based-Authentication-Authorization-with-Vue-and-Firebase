import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

const firebaseConfig = {
  apiKey: "AIzaSyBxcFjSRGk1jXTQWY8yi6iKeKzZxAvLBn0",
  authDomain: "e-commerce-3db54.firebaseapp.com",
  databaseURL: "https://e-commerce-3db54.firebaseio.com",
  projectId: "e-commerce-3db54",
  storageBucket: "e-commerce-3db54.appspot.com",
  messagingSenderId: "108449871534",
  appId: "1:108449871534:web:d1f3ad72b06300e0791f3f",
  measurementId: "G-VD64DNJXEC"
}

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})
firebase.analytics()

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
