<template>
    <!-- <vSliderSelections :ratingMax="ratingMax" :ratingMin="ratingMin"/> -->
  <div class="bestMovieSelections">
    <div class="container">
      <h2 class="bestMovieSelections__title">{{ title }}</h2>
      <img 
        src="@/assets/images/lineBestMovies.png"
        class="bestMovieSelections__line-img"
        alt="line"
      />
    </div>
    <div class="swiper">
      <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="0"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
      >
        <swiper-slide v-for="itemBest in swiperBestMovie">
          <div class="bestMovieSelections__box">
            <img v-if="itemBest.poster"
              :src="`${itemBest.poster?.previewUrl}`"
              alt="img"
              class="bestMovieSelections__img"
            />
            <img class="bestMovieSelections__notImg" v-else src="@/assets/images/notImg.png" alt="notImages">
            <div class="bestMovieSelections__text-in-img">
              <p class="bestMovieSelections__text">{{ itemBest.name }}</p>
              <div class="bestMovieSelections__info">
                <span class="bestMovieSelections__yearsFilm">{{
                  itemBest.year
                }}</span>
              </div>
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
import vSliderSelections from "@/components/SelectionsCards/v-slider-selections.vue";
export default {
  name: "v-bestMovieSelections",
  components: {
    Swiper,
    SwiperSlide,
    vSliderSelections,
  },
	props: {
		title: {
			type: String
		},
		oldCinemaAge: {
			type: Number
		},
		newCinemaAge: {
			type: Number
		},
		ratingMin: {
			type: Number
		},
		ratingMax: {
			type: Number
		}
	},
  data() {
    return {
      swiperBestMovie: [],
    };
  },
  computed: {
    async countSelectCrime() {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1/movie?year=${this.oldCinemaAge}-${this.newCinemaAge}&field=genres.name&search=драма&field=rating.kp&search=${this.ratingMin}-${this.ratingMax}&token=${this.$store.state.tokenApi}`
      );
      const data = await response.json();
      this.swiperBestMovie = data.docs;
			console.log(data.docs)
    },
  },
  mounted() {
    this.countSelectCrime;
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0px 20px;
}
.bestMovieSelections {
  margin-top: 80px;
  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    color: #ffffff;
  }
  &__line-img {
    margin-top: 30px;
    max-width: 1075px;
  }
  &__box {
    margin-top: 40px;
    margin-left: 25px;
  }
  &__img {
    width: 200px;
    height: 280px;
  }
  &__notImg{
    width: 200px;
    height: 280px;
  }
  &__text {
    text-align: start;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  &__yearsFilm {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
  }
}
</style>
