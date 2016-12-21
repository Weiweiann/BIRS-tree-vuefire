// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyB53Hvjn48RgWg2WnmGGRIB9eeWTlsQQH4',
  authDomain: 'birs-tree.firebaseapp.com',
  databaseURL: 'https://birs-tree.firebaseio.com',
  storageBucket: 'birs-tree.appspot.com',
  messagingSenderId: '366455834184'
}

Firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }

})
