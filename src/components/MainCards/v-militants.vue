<template>
  <div class="militants">
    <img
      class="militants__militants-img"
      src="@/assets/images/militants.png"
      alt="militants"
    />
    <h1 class="militants__militants-title">Боевики</h1>
    <p class="militants__militants-text">
      {{ selections }} <span class="span">{{ countMititants }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-militants",
  data() {
    return {
      countMititants: 0,
    };
  },
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  computed: {
    async countSelectMilitants() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=боевик&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
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
.militants {
  position: relative;
  &__militants-title {
    position: absolute;
    top: 40%;
    left: 35%;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    font-weight: 700;
    font-size: 65px;
    line-height: 73px;
  }

  &__militants-text {
    position: absolute;
    top: 55%;
    left: 38%;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__militants-img {
    max-width: 1100px;
  }
}
.span {
  color: #81becb;
  font-size: 30px;
}
.militants__militants-img:hover{
  transform: scale(1.02);
  transition: 0.2s;
}
</style>
