<template>
  <div class="cardsCinema">
    <div class="container">
      <div class="cardsCinema__cards">
        <!-- Фильм с боевиками -->
        <vMilitants :selections="selections"></vMilitants>
        <div class="cardsCinema__two-column">
          <!-- Фильм с военными -->
          <vMilitary :selections="selections"></vMilitary>
          <!-- Фильм с детективами -->
          <vDetectives :selections="selections"></vDetectives>
        </div>
        <div class="cardsCinema__grid-column">
          <!-- Детские фильмы -->
          <vChildren :selections="selections"></vChildren>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/v-militants.vue";
import vMilitary from "@/components/v-military.vue";
import vDetectives from "@/components/v-detectives.vue";
import vChildren from "@/components/м-children.vue";

export default {
  name: "v-cardsCinema",
  components: {
    vMilitants,
    vMilitary,
    vDetectives,
    vChildren,
  },
  data() {
    return {
      selections: "Подборок:",
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1400px;
  margin: 0 auto;
}
.cardsCinema {
  &__two-column {
    display: flex;
  }
}
</style>
