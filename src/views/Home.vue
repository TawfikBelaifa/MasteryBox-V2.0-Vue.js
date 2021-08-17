<template>
  <div class="home">
    <div class="conatin_accueil">
      <div class="Khj">
         <Pub_1 />
      <productPopular />
      <beforeFooter />
      <Footer />
      </div>
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import beforeFooter from "@/components/Home-component/beforeFooter.vue";
import Footer from "@/components/Home-component/Footer.vue";
import productPopular from "@/components/Home-component/productPopular.vue";
import Pub_1 from "@/components/Home-component/Pub_1.vue";

export default {
  name: "Home",
  components: {
    beforeFooter,
    Footer,
    productPopular,
    Pub_1,
  },
};
</script>

<style>

</style>
