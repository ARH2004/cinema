<template>
  <div class="horror">
    <img src="@/assets/images/horror.png" alt="horror" class="horror__horror-img">
    <h2 class="horror__horror-title">Ужасы</h2>
    <p class="horror__horror-text">{{ selections }} <span>{{ countHorror }}</span></p>
  </div>
</template>
<script>
export default {
  name: 'v-horror',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countHorror: 0,
    };
  },
  computed: {
    async countSelectHorror() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=ужасы&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countHorror = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectHorror;
  },
}
</script>
<style lang="scss" scoped>
.horror{
  position: relative;
  &__horror-img{
    max-width: 365px;
  }
  &__horror-title{
    position: absolute;
    top: 35%;
    left: 35%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__horror-text{
    position: absolute;
    top: 50%;
    left: 39%;
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
.horror__horror-img:hover{
  transform: scale(1.04);
  transition: 0.2s;
}
</style>