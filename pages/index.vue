<template>
  <div>
    <form id="login" class="login-block" action="" target="temp" onsubmit="login();return false;" method="post">
      <div class="login-logo" style="background: url('https://partners-homepage.s3.amazonaws.com/24/logo.png'); background-size: 250px ;background-repeat: no-repeat; background-position: center;height: 100px;width:340px;"></div>
      <input type="text" v-model="user" placeholder="Usuário" id="username" name="username"/>
      <input type="password" v-model="pass" placeholder="Palavra chave" id="password" name="password"/>
      <input type="button" class="login-button" id="loginbtn2" value="Login" @click="login"/>
      <div class="inputcontainer" v-if="loading">
        <i class="loader"></i>
      </div>
    </form>
  </div>
</template>

<script>
import {Auth} from "@aws-amplify/auth";

export default {
  data() {
    return {
      user:'',
      pass:'',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true
      const r = await this.$axios.$post(
          'https://h10sd4316i.execute-api.us-east-1.amazonaws.com/Prod/',
          {username: this.user, password: this.pass})
      const s = r[0].AuthenticateResult
      if (s.length) {
        window.location.href ='https://nogartel.inofleet.com/?sessionid='+s
      } else {
        this.loading = false
      }
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

<style>

.inputcontainer {
  position: relative;
}

input {
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
}

.loader {
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  animation: around 5.4s infinite;
}

@keyframes around {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loader::after, .loader::before {
  content: "";
  background: white;
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-color: #333 #333 transparent transparent;
  border-style: solid;
  border-radius: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  animation: around 0.7s ease-in-out infinite;
}

.loader::after {
  animation: around 0.7s ease-in-out 0.1s infinite;
  background: transparent;
}
</style>