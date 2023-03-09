<template>
  <div class="cardSelections">
    <div class="container">
      <div class="cardSelections__cards">
				<vSliderSelections></vSliderSelections>
        <vBestMovieSelections></vBestMovieSelections>
      </div>
    </div>
  </div>
</template>
<script>
import vBestMovieSelections from '@/components/SelectionsCards/v-bestMovieSelections.vue';
import vSliderSelections from '@/components/SelectionsCards/v-slider-selections.vue';

export default {
  name: 'v-cardSelections',
  components: {
    vBestMovieSelections,
		vSliderSelections,
  }
}
</script>
<style lang="scss" scoped>
.container{
  max-width: 1100px;
}
</style>