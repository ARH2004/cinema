<template>
  <div class="sliderSelections">
    <div class="swiper">
      <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
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
      <swiper-slide v-for="swipSel in dataSelectionsSwiper" :key="swipSel.id">
        <div class="sliderSelections__box">
          <img :src="require(`@/assets/images/${swipSel.img}`)" alt="img" class="sliderSelections__img">
          <div class="sliderSelections__text-in-img">
            <p class="sliderSelections__text">{{ swipSel.title }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
export default {
  name: "v-sliderSelections",
  components: {
    Swiper,
    SwiperSlide,
  },
    data(){
    return{
      dataSelectionsSwiper: [
        {id: Date.now(), img: 'sliderSelections-img.png', title: 'Лучшие фильмы всех времен'},
        {id: Date.now(), img: 'sliderSelections-img.png', title: 'Лучшиее качество'},
        {id: Date.now(), img: 'sliderSelections-img.png', title: 'Новейшие подборки фильмов'},
      ]
    }
  },
    setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
}
</script>
<style lang="scss" scoped>
.sliderSelections{
  &__box{
    position: relative;
  }
  &__img{
    width: 100%;
  }
  &__text{
    position: absolute;
    top: 15%;
    left: 10%;
    width: 250px;
    font-weight: 700;
    font-size: 50px;
    line-height: 102.5%;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}
</style>