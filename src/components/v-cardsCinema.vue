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
        <div class="cardsCinema__three-column">
          <!-- Детские фильмы -->
          <vChildren :selections="selections"></vChildren>
          <!-- Фильмы с драмой -->
          <vDrama :selections="selections"></vDrama>
          <!-- Фильмы с комедией -->
          <vComedy :selections="selections"></vComedy>
          <!-- Фильмы с криминалом -->
          <vCrime :selections="selections"></vCrime>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/v-militants.vue";
import vMilitary from "@/components/v-military.vue";
import vDetectives from "@/components/v-detectives.vue";
import vChildren from "@/components/v-children.vue";
import vDrama from "@/components/v-drama.vue";
import vComedy from "@/components/v-comedy.vue";
import vCrime from "@/components/v-crime.vue";

export default {
  name: "v-cardsCinema",
  components: {
    vMilitants,
    vMilitary,
    vDetectives,
    vChildren,
    vDrama,
    vComedy,
    vCrime,
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
  width: 1100px;
  margin: 0 auto;
}
.cardsCinema {
  &__two-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__three-column{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
