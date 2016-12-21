<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebaseui from 'firebaseui'
import firebase from 'firebase'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  mounted () {
    const uiConfig = {
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style lang="sass">
@import '../node_modules/firebaseui/dist/firebaseui.css'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

</style>
