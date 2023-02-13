<template>
  <div class="app">
    <vApp></vApp>
    <router-view />
  </div>
</template>
<script>
import vApp from '@/components/v-app.vue'
export default {
  name: 'app',
  components: {
    vApp,
  },
};
</script>
<style lang="scss" src="./assets/style/nullstyle.scss">
</style>
