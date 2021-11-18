<template>
  <h1></h1>
</template>
<script>
import {Auth} from "@aws-amplify/auth";

export default {
  async mounted() {
    try {
      await Auth.currentAuthenticatedUser()
      window.location.href='https://nogartel.fleetmap.io'
    } catch(e) {
      console.error(e)
    }

    switch (window.location.hostname) {
      case 'fleetmap-io.github.io':
        window.location.href='https://fleetmap.freshdesk.com'
        break
      case 'nogartel.fleetmap.io':
        window.location.href='https://nogartel.inofleet.com'
        break
      default:
        break
    }
  }
}
</script>