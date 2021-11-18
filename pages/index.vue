<template>
  <div>
    <form id="login" class="login-block" action="" target="temp" onsubmit="login();return false;" method="post">
      <div class="login-logo" style="background: url('https://partners-homepage.s3.amazonaws.com/24/logo.png'); background-size: 250px ;background-repeat: no-repeat; background-position: center;height: 100px;width:340px;"></div>
      <input type="text" v-model="user" placeholder="Usuário" id="username" name="username"/>
      <input type="password" v-model="pass" placeholder="Palavra chave" id="password" name="password"/>
      <input class="login-button" id="loginbtn2" type="submit" value="Login" @click="login"/>
    </form>

    <form id="loginformv6index" class="form_login" action="//index.jsp" method="post" name="loginformv6index" style="display:none">
      <p><input id="sessionid" class="input" name="sessionid" size="20" type="text" value=""></p>
      <p class="submit"><input id="wp-submit" class="button button-primary button-large" type="submit" value="Submeter Pedido"></p>
    </form>
  </div>
</template>

<script>
import {Auth} from "@aws-amplify/auth";

export default {
  data() {
    return {
      user:'',
      pass:''
    }
  },
  methods: {
    async login() {
      const formData = new FormData();
      formData.append('username', this.user)
      formData.append('password', this.password)
      await this.$axios.$post('https://nogartel.inofleet.com/inofleetws/core/authenticate',formData, {
        headers:{
          'Content-Type':'multipart/form-data'
      }})
    }
  },
  async mounted() {
    try {
      await Auth.currentSession()
      window.location.href='https://nogartel.fleetmap.io'
    } catch(e) {
      console.error(e)
    }
    // window.location.href='https://nogartel.inofleet.com'
  }
}
</script>