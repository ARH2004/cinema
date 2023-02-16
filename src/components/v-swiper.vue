<template>
  <div class="swiper">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="300"
      :navigation="{
        nextEl: '.nextArrow',
        prevEl: '.prevArrow',
      }"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop="true"
    >
            <div class="nav-indicator nextArrow">
          <img src="@/assets/images/buttonSwiper.png" alt="button" />
        </div>
      <swiper-slide>
        <div class="box">
          <img src="@/assets/images/viking.png" alt="viking" class="box__img" />
          <div class="box__text-in-img">
            <p class="box__text">Лучшие сериалы 2019-2023 годов</p>
            <my-button class="box__btn">Смотреть!</my-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="@/assets/images/viking.png" alt="viking" class="box__img" />
          <div class="box__text-in-img">
            <p class="box__text">Лучшие сериалы 2019-2023 годов</p>
            <my-button class="box__btn">Смотреть!</my-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="@/assets/images/viking.png" alt="viking" class="box__img" />
          <div class="box__text-in-img">
            <p class="box__text">Лучшие сериалы 2019-2023 годов</p>
            <my-button class="box__btn">Смотреть!</my-button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
export default {
  name: "v-swiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper {
  max-width: 300px;
  margin-top: -3px;
}
.box {
  position: relative;
  margin-bottom: 10px;
  &__img {
    width: 320px;
  }
  &__text {
    position: absolute;
    top: 25%;
    left: 8%;
    width: 150px;
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffffff;
  }
  &__btn {
    position: absolute;
    top: 65%;
    left: 6%;
  }
}
.nextArrow {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  top: 45%;
  left: 85%;
}
</style>
