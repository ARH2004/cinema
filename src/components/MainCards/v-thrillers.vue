<template>
  <div class="thrillers">
    <img src="@/assets/images/thrillers.png" alt="thrillers" class="thrillers__thrillers-img">
    <h2 class="thrillers__thrillers-title">Триллеры</h2>
    <p class="thrillers__thrillers-text">{{ selections }} <span>{{ countThrillers }}</span></p>
  </div>
</template>
<script>
export default {
  name: 'v-thrillers',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countThrillers: 0,
    };
  },
  computed: {
    async countSelectThrillers() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=триллер&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countThrillers = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectThrillers;
  },
}
</script>
<style lang="scss" scoped>
.thrillers{
  position: relative;
  &__thrillers-img{
    max-width: 365px;
  }
  &__thrillers-title{
    position: absolute;
    top: 35%;
    left: 27%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__thrillers-text{
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
.thrillers__thrillers-img:hover{
  transform: scale(1.04);
  transition: 0.2s;
}
</style>