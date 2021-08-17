<template>
  <div class="home">
    <Pub_2 />
    <Information />
    <Pub_1 />
    <productPopular />
    <beforeFooter />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import beforeFooter from "@/components/Home-component/beforeFooter.vue";
import Footer from "@/components/Home-component/Footer.vue";
import productPopular from "@/components/Home-component/productPopular.vue";
import Pub_1 from "@/components/Home-component/Pub_1.vue";
import Information from "@/components/Home-component/Information.vue";
import Pub_2 from "@/components/Home-component/Pub_2.vue";


export default {
  name: "Home",
  components: {
    beforeFooter,
    Footer,
    productPopular,
    Pub_1,
    Information,
    Pub_2
  },
};
</script>

<style>
</style>
