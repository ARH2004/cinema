<template>
  <div class="vSelections">
    <vNavbar></vNavbar>
    <div class="Selections">
      <div class="container">
        <div class="Selections__wrapper">
          <div class="Selections__flex">
            <vNwСollection></vNwСollection>
            <vPopularCollections></vPopularCollections>
          </div>
            <vCardSelections></vCardSelections>
        </div>
      </div>
    </div>
      <vFooter></vFooter>
    </div>
</template>
<script>
import vNavbar from "@/components/v-navbar.vue";
import vFooter from '@/components/v-footer.vue';
import vCardSelections from '@/components/v-cardsSelections.vue'
import vNwСollection from "@/components/v-nwСollection.vue";
import vPopularCollections from "@/components/v-popularCollections.vue";

export default {
  name: "v-app",
  components: {
    vNavbar,
    vFooter,
    vNwСollection,
    vPopularCollections,
    vCardSelections,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1400px;
  margin: 0 auto;
}
.Selections {
  background: url("@/assets/images/selections-background.png") no-repeat #212121;
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
