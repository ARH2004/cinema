<template>
  <div class="sliderSelections">
    <div class="swiper">
      <div class="sliderSelections__pagination-text">
        <button
          class="sliderSelections__pagination-main"
          @click="$router.push('/')"
        >
          Главная/
        </button>
        <span class="sliderSelections__pagination-submain">Подборки</span>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{ delay: 5000 }"
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
            <img
              :src="require(`@/assets/images/${swipSel.img}`)"
              alt="img"
              class="sliderSelections__img"
            />
            <div class="sliderSelections__text-in-img">
              <p class="sliderSelections__text">{{ swipSel.title }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <h4 class="sliderSelections__title-text">
      Мы собрали для Вас подборку лучших фильмов с рейтингом от {{ ratingMin }} и до {{ ratingMax }}. В неё вошли фильмы следующих жанров: Фантастика, боевик, драмма. Самый новый фильм - {{ newAge }}
      года, самый старый фильм - {{ oldAge }} года.
      Выбирайте фильм и приятного просмотра!
    </h4>
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay } from "swiper";
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
  data() {
    return {
      dataSelectionsSwiper: [
        {
          id: Date.now(),
          img: "sliderSelections-img.png",
          title: "Лучшие фильмы всех времен",
        },
        {
          id: Date.now(),
          img: "sliderSelections-img.png",
          title: "Лучшиее качество",
        },
        {
          id: Date.now(),
          img: "sliderSelections-img.png",
          title: "Новейшие подборки фильмов",
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
      ratingMin: 7,
      ratingMax: 10,
      newAge: new Date().toLocaleString('ru',{ year: 'numeric'}),
      oldAge: 1970
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.sliderSelections {
  &__box {
    position: relative;
    margin-bottom: -25px;
  }
  &__img {
    width: 100%;
  }
  &__title-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 20px;
    margin-top: 30px;
    color: #ffffff;
  }
  &__pagination-text {
    margin: 0px 10px -10px 10px;
    padding: 10px;
    background: rgba(22, 26, 25, 0.35);
    border-radius: 5px 5px 0px 0px;
    font-size: 20px;
    color: white;
    z-index: 11;
  }
  &__pagination-main {
    color: #dbdbdb;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  &__pagination-submain {
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-left: 5px;
  }
  &__text {
    position: absolute;
    top: 15%;
    left: 10%;
    width: 250px;
    font-weight: 700;
    font-size: 50px;
    line-height: 102.5%;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}
:deep(.swiper-pagination-bullet-active) {
  background: white;
}
:deep(.swiper-pagination-bullet) {
  border: 1px solid white;
}
button {
  background: none;
}
</style>
