<template>
  <div class="cardSelections">
    <div class="container">
      <div class="cardSelections__cards">
        <vBestMovieSelections></vBestMovieSelections>
      </div>
    </div>
  </div>
</template>
<script>
import vBestMovieSelections from '@/components/SelectionsCards/v-bestMovieSelections.vue';

export default {
  name: 'v-cardSelections',
  components: {
    vBestMovieSelections,
  }
}
</script>
<style lang="scss" scoped>
.container{
  max-width: 1100px;
}
</style>