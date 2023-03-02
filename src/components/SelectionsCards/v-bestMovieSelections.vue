<template>
  <div class="bestMovieSelections">
    <div class="container">
      <h2 class="bestMovieSelections__title">Лучшие фильмы подборки</h2>
      <img src="@/assets/images/lineBestMovies.png" class="bestMovieSelections__line-img" alt="line">
    </div>
    <div class="swiper">
      <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="0"
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
        <swiper-slide v-for="itemBest in swiperBestMovie">
          <div class="bestMovieSelections__box">
            <img
              :src='`${itemBest.poster?.previewUrl}`'
              alt="img"
              class="bestMovieSelections__img"
            />
            <div class="bestMovieSelections__text-in-img">
              <p class="bestMovieSelections__text">{{ itemBest.name }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default {
  name: 'v-bestMovieSelections',
    components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      swiperBestMovie: []
    }
  },
  computed: {
        async countSelectCrime() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=криминал&field=rating.kp&search=7-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.swiperBestMovie = data.docs
    },
  },
  mounted() {
    this.countSelectCrime
  },
    setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1100px;
  margin: 0px 20px;
}
.bestMovieSelections{
  margin-top: 80px;
  &__title{
    font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #FFFFFF;
  }
  &__line-img{
    margin-top: 30px;
    max-width: 1075px;
  }
  &__box{
    margin-top: 40px;
    margin-left: 25px;
  }
  &__img{
  max-width: 200px;
  max-height: 280px;
}
}
</style>