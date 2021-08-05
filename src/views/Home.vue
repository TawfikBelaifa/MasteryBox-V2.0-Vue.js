<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <beforeFooter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import beforeFooter from '@/components/beforeFooter.vue'

export default {
  name: 'Home',
  components: {
    beforeFooter
  }
}
</script>

<style lang="sass" scoped>

</style>
