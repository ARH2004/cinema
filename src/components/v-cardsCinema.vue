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
          <!-- Фильмы с мелодрамой -->
          <vMelodramas :selections="selections"></vMelodramas>
          <!-- Фильмы с триллером -->
          <vThrillers :selections="selections"></vThrillers>
          <!-- Фильмы с ужасами -->
          <vHorror :selections="selections"></vHorror>
          <!-- Фильмы с фантастикой -->
          <vFantastic :selections="selections"></vFantastic>
          <!-- Фильмы с фэнтези -->
          <vFantasy :selections="selections"></vFantasy>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/MainCards/v-militants.vue";
import vMilitary from "@/components/MainCards/v-military.vue";
import vDetectives from "@/components/MainCards/v-detectives.vue";
import vChildren from "@/components/MainCards/v-children.vue";
import vDrama from "@/components/MainCards/v-drama.vue";
import vComedy from "@/components/MainCards/v-comedy.vue";
import vCrime from "@/components/MainCards/v-crime.vue";
import vMelodramas from '@/components/MainCards/v-melodramas.vue'
import vThrillers from '@/components/v-thrillers.vue'
import vHorror from '@/components/MainCards/v-horror.vue'
import vFantastic from '@/components/MainCards/v-fantastic.vue'
import vFantasy from '@/components/MainCards/v-fantasy.vue'

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
    vMelodramas,
    vThrillers,
    vHorror,
    vFantastic,
    vFantasy,
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
