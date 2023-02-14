<template>
  <div class="cardsCinema">
    <div class="container">
      <!-- Должен быть боевик -->
      <vMilitants :selections="selections"></vMilitants>
      <div class="cardsCinema__cards">
        <div class="cardsCinema__two-column">
          <div class="cardsCinema__military">
            <img
              class="cardsCinema__military-img img"
              src="@/assets/images/military.png"
              alt="military"
            />
            <h1 class="cardsCinema__military-title">Военные</h1>
            <p class="cardsCinema__military-text">
              {{ selections }} <span class="span">1107</span>
            </p>
          </div>
          <div class="cardsCinema__detectives">
            <img
              class="cardsCinema__detectives-img img"
              src="@/assets/images/detectives.png"
              alt="detectives"
            />
            <h1 class="cardsCinema__detectives-title">Детективы</h1>
            <p class="cardsCinema__detectives-text">
              {{ selections }} <span class="span">1863</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/v-militants.vue";
export default {
  name: "v-cardsCinema",
  components: {
    vMilitants,
  },
  data() {
    return {
      selections: "Подборок:",
      countMititants: "",
    };
  },
  computed: {
    async countSelectMilitants() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=боевик&field=rating.kp&search=7-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countMititants = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectMilitants;
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1400px;
  margin: 0 auto;
}
.cardsCinema {
  &__military {
    position: relative;
  }
  &__military-title {
    position: absolute;
    top: 40%;
    left: 38%;
    font-weight: 700;
    font-size: 50px;
    line-height: 56px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__military-text {
    position: absolute;
    top: 53%;
    left: 41.5%;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__detectives {
    position: relative;
  }

  &__two-column {
    display: flex;
  }

  &__detectives-title {
    position: absolute;
    top: 40%;
    left: 30%;
    font-weight: 700;
    font-size: 50px;
    line-height: 56px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__detectives-text {
    position: absolute;
    top: 54%;
    left: 35%;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}
.img {
  max-width: 550px;
}
.span {
  color: #81becb;
  font-size: 30px;
}
</style>
