<template>
  <div class="popularCollections">
    <div class="container">
      <div class="popularCollections__wrapper">
        <div class="popularCollections__box-title">
          <h2 class="popularCollections__title">Популярные коллекции</h2>
        </div>
        <div class="popularCollections__box-content">
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
      <swiper-slide v-for="swip in dataSwiper" :key="swip.id">
        <div class="box">
          <img :src="require(`../assets/images/${swip.img}`)" alt="viking" class="box__img" />
          <div class="box__text-in-img">
            <p class="box__text">{{ swip.title }}</p>
            <my-button class="box__btn">{{ swip.btn }}</my-button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
        </div>
      </div>
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
  name: "v-popularCollections",
  components: {
		    Swiper,
    SwiperSlide,
  },
	  data(){
    return{
      dataSwiper: [
        {id: Date.now(), img: 'viking.png', title: 'Лучшие сериалы 2021-2023 годов', btn: 'Смотреть!'},
        {id: Date.now(), img: 'viking.png', title: 'Лучшие сериалы 2018-2020 годов', btn: 'Смотреть!'},
        {id: Date.now(), img: 'viking.png', title: 'Лучшие сериалы 2015-20217 годов', btn: 'Смотреть!'},
        {id: Date.now(), img: 'viking.png', title: 'Лучшие сериалы 2010-2014 годов', btn: 'Смотреть!'},
      ]
    }
  },
	  setup() {
    return {
      modules: [Navigation, Pagination],
    };
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
:deep(.swiper-pagination-bullet-active) {
    background: white;
}
:deep(.swiper-pagination-bullet){
    border: 1px solid white;
}
</style>
