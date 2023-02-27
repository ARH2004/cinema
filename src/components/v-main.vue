<template>
  <div class="vMain">
    <vNavbar></vNavbar>
    <div class="main">
      <div class="container">
        <div class="main__wrapper">
          <div class="main__flex">
            <vNwСollection></vNwСollection>
            <vPopularCollections></vPopularCollections>
          </div>
          <vCardsCinema></vCardsCinema>
        </div>
      </div>
    </div>
      <vFooter></vFooter>
    </div>
</template>
<script>
import vNavbar from "@/components/v-navbar.vue";
import vFooter from '@/components/v-footer.vue'
import vCardsCinema from "@/components/v-cardsCinema.vue";
import vNwСollection from "@/components/v-nwСollection.vue";
import vPopularCollections from "@/components/v-popularCollections.vue";

export default {
  name: "v-app",
  components: {
    vNavbar,
    vFooter,
    vCardsCinema,
    vNwСollection,
    vPopularCollections
  },
};
</script>
<style lang="scss" scoped>
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
  padding-bottom: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__flex {
    display: flex;
    flex-direction: column;
  }

}
</style>
