<template>
  <div class="cardSelections">
    <div class="container">
      <div class="cardSelections__cards">
        <vSliderSelections></vSliderSelections>
      </div>
    </div>
  </div>
</template>
<script>
import vSliderSelections from '@/components/SelectionsCards/v-slider-selections.vue'

export default {
  name: 'v-cardSelections',
  components: {
    vSliderSelections,
  }
}
</script>
<style lang="scss" scoped>
.container{
  max-width: 1100px;
}
</style>