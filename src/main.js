import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyBJYF5QKUukEDIM0BtbrEYFBuqwTCLq5HM",
  authDomain: "vue-awesome-crm.firebaseapp.com",
  databaseURL: "https://vue-awesome-crm.firebaseio.com",
  projectId: "vue-awesome-crm",
  storageBucket: "vue-awesome-crm.appspot.com",
  messagingSenderId: "487712676218",
  appId: "1:487712676218:web:3be23795ad87dbfd40dec3"
};

firebase.initializeApp(firebaseConfig);

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
