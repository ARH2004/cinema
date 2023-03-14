<template>
  <div class="cardSelections">
    <div class="container">
      <div class="cardSelections__cards">
        <vSliderSelections></vSliderSelections>
        <h4 class="cardSelections__title-text">
          Мы собрали для Вас подборку лучших фильмов с рейтингом от
          {{ ratingMin }} и до {{ ratingMax }}. В неё
          вошли фильмы следующих жанров: Фантастика, боевик, драмма. Самый новый
          фильм - {{ newCinemaBestAge }} года, самый старый фильм -
          {{ oldCinemaBestAge }} года. Выбирайте фильм и приятного просмотра!
        </h4>
        <vBestMovieSelections
          :title="titleBestCinema"
          :oldCinemaAge="oldCinemaBestAge"
          :newCinemaAge="newCinemaBestAge"
					:ratingMin="ratingMin"
					:ratingMax="ratingMax"
        ></vBestMovieSelections>
        <vBestMovieSelections
          :title="titleNewestCinema"
          :oldCinemaAge="oldCinemaNewestAge"
          :newCinemaAge="newCinemaBestAge"
					:ratingMin="ratingMin"
					:ratingMax="ratingMax"
        ></vBestMovieSelections>
      </div>
    </div>
  </div>
</template>
<script>
import vBestMovieSelections from "@/components/SelectionsCards/v-bestMovieSelections.vue";
import vSliderSelections from "@/components/SelectionsCards/v-slider-selections.vue";

export default {
  name: "v-cardSelections",
  components: {
    vBestMovieSelections,
    vSliderSelections,
  },
  data() {
    return {
      titleBestCinema: "Лучшие фильмы подборки",
      titleNewestCinema: "Новые фильмы подборки",
      oldCinemaBestAge: 1970,
      oldCinemaNewestAge: new Date().toLocaleString("ru", { year: "numeric" }) - 3,
      newCinemaBestAge: new Date().toLocaleString("ru", { year: "numeric" }),
			ratingMin: 8,
			ratingMax: 10,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1100px;
}
.cardSelections {
  &__title-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 20px;
    margin-top: 30px;
    color: #ffffff;
  }
}
</style>
