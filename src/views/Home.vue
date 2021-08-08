<template>
  <div class="home">
    <productPopular />
    <beforeFooter msg="Welcome to Your Vue.js App"/>
    <Footer />
    
  </div>
</template>

<script>
// @ is an alias to /src
import beforeFooter from '@/components/Home-component/beforeFooter.vue'
import Footer from '@/components/Home-component/Footer.vue'
import productPopular from '@/components/Home-component/productPopular.vue'


export default {
  name: 'Home',
  components: {
    beforeFooter, Footer, productPopular
  }
}
</script>

<style scoped>

</style>
