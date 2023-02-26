<template>
  <div class="fantasy">
    <img src="@/assets/images/fantasy.png" alt="fantasy" class="fantasy__fantasy-img">
    <h2 class="fantasy__fantasy-title">Фэнтези</h2>
    <p class="fantasy__fantasy-text">{{ selections }} <span>{{ countFantasy }}</span></p>
  </div>
</template>
<script>
export default {
  name: 'v-fantasy',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countFantasy: 0,
    };
  },
  computed: {
    async countSelectFantasy() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=фэнтези&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countFantasy = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectFantasy;
  },
}
</script>
<style lang="scss" scoped>
.fantasy{
  position: relative;
  &__fantasy-img{
    max-width: 365px;
  }
  &__fantasy-title{
    position: absolute;
    top: 35%;
    left: 35%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__fantasy-text{
    position: absolute;
    top: 50%;
    left: 40%;
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
.fantasy__fantasy-img:hover{
  transform: scale(1.04);
  transition: 0.2s;
}
</style>