<template>
  <div class="fantastic">
    <img src="@/assets/images/fantastic.png" alt="fantastic" class="fantastic__fantastic-img">
    <h2 class="fantastic__fantastic-title">Фантастика</h2>
    <p class="fantastic__fantastic-text">{{ selections }} <span>{{ countFantastic }}</span></p>
  </div>
</template>
<script>
export default {
  name: 'v-fantastic',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countFantastic: 0,
    };
  },
  computed: {
    async countSelectFantastic() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=фантастика&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countFantastic = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectFantastic;
  },
}
</script>
<style lang="scss" scoped>
.fantastic{
  position: relative;
  &__fantastic-img{
    max-width: 365px;
  }
  &__fantastic-title{
    position: absolute;
    top: 35%;
    left: 20%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__fantastic-text{
    position: absolute;
    top: 50%;
    left: 30%;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}
span {
  color: #81becb;
  font-size: 20px;
}
</style>