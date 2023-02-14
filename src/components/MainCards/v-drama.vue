<template>
  <div class="drama">
    <img src="@/assets/images/drama.png" alt="drama" class="drama__drama-img" />
    <h2 class="drama__drama-title">Драма</h2>
    <p class="drama__drama-text">
      {{ selections }} <span>{{ countDrama }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-drama",
  data() {
    return {
      countDrama: 0,
    };
  },
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  computed: {
    async countSelectDrama() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=драма&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countDrama = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectDrama;
  },
};
</script>
<style lang="scss" scoped>
.drama {
  position: relative;
  &__drama-img {
    max-width: 365px;
  }
  &__drama-title {
    position: absolute;
    top: 35%;
    left: 35%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__drama-text {
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
