<template>
  <div class="main">
    <div class="container">
      <div class="main__wrapper">
        <div class="main__flex">
          <vNwСollection></vNwСollection>
          <vPopularCollections></vPopularCollections>
        </div>
        <vCardsCinema></vCardsCinema>
      </div>
              <vFooter></vFooter>
    </div>
  </div>
</template>
<script>
import vCardsCinema from "@/components/v-cardsCinema.vue";
import vNwСollection from '@/components/v-nwСollection.vue';
import vPopularCollections from '@/components/v-popularCollections.vue'
import vFooter from '@/components/v-footer.vue'

export default {
  name: "v-main",
  components: {
    vCardsCinema,
    vNwСollection,
    vPopularCollections,
    vFooter,
  },
};
</script>
<style lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
}
.main {
  &__wrapper{
    display: flex;
    justify-content: space-between;
  }
  &__flex{
    display: flex;
    flex-direction: column;
  }
  background: url("@/assets/images/main-background.png") no-repeat #212121;
  background-size: cover;
  padding-top: 30px;
  overflow: hidden;
  position: relative;
}
</style>
