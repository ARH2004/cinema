<template>
  <div class="cardsCinema">
    <div class="container">
      <!-- Должен быть боевик -->
      <vMilitants :selections="selections"></vMilitants>
      <div class="cardsCinema__cards">
        <div class="cardsCinema__two-column">
            <!-- Должен быть военные -->
            <vMilitary :selections="selections"></vMilitary>
            <!-- Должен быть детективы -->
            <vDetectives :selections="selections"></vDetectives>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/v-militants.vue";
import vMilitary from "@/components/v-military.vue";
import vDetectives from '@/components/v-detectives.vue'

export default {
  name: "v-cardsCinema",
  components: {
    vMilitants,
    vMilitary,
    vDetectives,
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
