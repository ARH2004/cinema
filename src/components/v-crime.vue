<template>
  <div class="crime">
    <img src="@/assets/images/crime.png" alt="crime" class="crime__crime-img">
    <h2 class="crime__crime-title">Криминал</h2>
    <p class="crime__crime-text">{{ selections }} <span>{{ countCrime }}</span></p>
</div>
</template>
<script>
export default {
  name: 'v-crime',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countCrime: 0,
    };
  },
  computed: {
    async countSelectCrime() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=криминал&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countCrime = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectCrime;
  },
}
</script>
<style lang="scss" scoped>
.crime{
  position: relative;
  &__crime-img{
    max-width: 365px;
  }
  &__crime-title{
    position: absolute;
    top: 35%;
    left: 27%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__crime-text{
    position: absolute;
    top: 50%;
    left: 33%;
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