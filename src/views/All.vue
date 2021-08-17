<template>
  <div class="">
    <produc />
    <slid />
  </div>
</template>

<script>
import produc from "@/components/Tous/produc.vue";


export default {
  name: "All",
  components: {
    produc,
  },
};
</script>

<style scoped>
.contain_Polk {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 120px;
}
</style>
