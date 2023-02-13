<template>
  <div class="main">
    <div class="container">
      <div class="main__wrapper">
        <vCardsCinema></vCardsCinema>
        <vNewСollection></vNewСollection>
      </div>
    </div>
  </div>
</template>
<script>
import vCardsCinema from "@/components/v-cardsCinema.vue";
import vNewСollection from "@/components/v-newСollection.vue";
export default {
  name: "v-main",
  components: {
    vCardsCinema,
    vNewСollection
  },
};
</script>
<style lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
}
.main {
  background: url("@/assets/images/main-background.png") no-repeat #212121;
  background-size: cover;
  padding-top: 30px;
  overflow: hidden;
  position: relative;
}
</style>
