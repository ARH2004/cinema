<template>
  <div class="cardSelections">
    <div class="container">
      <div class="cardSelections__cards">
        <vSliderSelections></vSliderSelections>
        <h4 class="cardSelections__title-text">
          Мы собрали для Вас подборку лучших фильмов с рейтингом от
          {{ $store.state.ratingMin }} и до {{ $store.state.ratingMax }}. В неё
          вошли фильмы следующих жанров: Фантастика, боевик, драмма. Самый новый
          фильм - {{ $store.state.newCinemaAge }} года, самый старый фильм -
          {{ $store.state.oldCinemaAge }} года. Выбирайте фильм и приятного
          просмотра!
        </h4>
        <vBestMovieSelections></vBestMovieSelections>
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
