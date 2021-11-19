<template>
  <div class="google-btn" @click="click">
    <div>
      <img alt="" class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
    </div>
    <div class="btn-text">
      <a @click="click">
        <b>
         Login com a Google
        </b>
      </a>
    </div>
  </div>
</template>
<script>
import { Auth } from '@aws-amplify/auth'

export default {
  name: 'GoogleButton',
  props: {
    withLink: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    async click() {
      console.log(await Auth.federatedSignIn({ provider: 'Google' }))
    }
  }
}
</script>
<style scoped>
  .google-icon {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 11px;
    padding-bottom: 11px;
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
  }
  .btn-text {
    padding-left: 16px;
    padding-right: 8px;
    color: #808080;
    font-size: 14px;
    font-family: "Roboto",serif;
  }
  .google-btn {
    width: 220px;
    cursor:pointer;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
    display:flex;
    flex-direction: row;
    height: 40px;
    border-radius: 2px;
    align-items: center;
    border: 1px solid;
    border-color: rgba(0,0,0,.05);;
  }
</style>
