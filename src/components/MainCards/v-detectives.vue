<template>
  <div class="detectives">
    <img
      class="detectives__detectives-img"
      src="@/assets/images/detectives.png"
      alt="detectives"
    />
    <h1 class="detectives__detectives-title">Детективы</h1>
    <p class="detectives__detectives-text">
      {{ selections }} <span class="span">{{ countDetectives }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-detectives",
  data() {
    return {
      countDetectives: 0,
    };
  },
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  computed: {
    async countSelectDetectives() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=детектив&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countDetectives = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectDetectives;
  },
};
</script>
<style lang="scss" scoped>
.detectives {
  position: relative;

  &__detectives-img {
    max-width: 550px;
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
.span {
  color: #81becb;
  font-size: 30px;
}
.detectives__detectives-img:hover{
  transform: scale(1.04);
  transition: 0.2s;
}
</style>
