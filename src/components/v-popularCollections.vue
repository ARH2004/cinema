<template>
  <div class="popularCollections">
    <div class="container">
      <div class="popularCollections__wrapper">
        <div class="popularCollections__box-title">
          <h2 class="popularCollections__title">Популярные коллекции</h2>
        </div>
        <div class="popularCollections__box-content">
          <vSwiper></vSwiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vSwiper from "@/components/v-swiper.vue";

export default {
  name: "v-popularCollections",
  components: {
    vSwiper,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 300px;
}
.popularCollections {
  margin-top: 30px;
  &__box-title {
    background: #212121;
    border: 1px solid #2b2b2b;
    border-radius: 5px 5px 0px 0px;
    background: rgba(6, 6, 7, 0.5);
  }
  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 18px 10px 15px 10px;
    text-align: center;
  }
  &__box-conenten {
    text-align: center;
    margin-left: -20px;
  }
}
</style>
