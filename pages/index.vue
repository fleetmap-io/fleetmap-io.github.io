<template>
  <h1></h1>
</template>
<script>
import {Auth} from "@aws-amplify/auth";

export default {
  async mounted() {
    try {
      await Auth.currentSession()
      window.location.href='https://nogartel.fleetmap.io'
    } catch(e) {
      console.error(e)
    }
    window.location.href='https://nogartel.inofleet.com'
  }
}
</script>