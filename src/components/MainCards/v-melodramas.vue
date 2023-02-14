<template>
  <div class="melodramas">
    <img src="@/assets/images/melodramas.png" alt="melodramas" class="melodramas__melodramas-img">
    <h2 class="melodramas__melodramas-title">Мелодрамы</h2>
    <p class="melodramas__melodramas-text">{{ selections }} <span>{{ countMelodramas }}</span></p>
  </div>
</template>
<script>
export default {
  name: 'v-melodramas',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countMelodramas: 0,
    };
  },
  computed: {
    async countSelectMelodramas() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=мелодрама&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countMelodramas = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectMelodramas;
  },
}
</script>
<style lang="scss" scoped>
.melodramas{
  position: relative;
  &__melodramas-img{
    max-width: 365px;
  }
  &__melodramas-title{
    position: absolute;
    top: 35%;
    left: 25%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__melodramas-text{
        position: absolute;
    top: 50%;
    left: 38%;
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