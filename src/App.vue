<template>
  <div class="app">
    <vNavbar></vNavbar>
    <v-main></v-main>
    <router-view />
  </div>
</template>
<script>
import vNavbar from '@/components/v-navbar.vue';
import vMain from "@/components/v-main.vue";
export default {
  name: 'app',
  components: {
    vNavbar,
    vMain,
  },
};
</script>
<style lang="scss" src="./assets/style/nullstyle.scss">
</style>
