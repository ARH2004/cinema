<template>
  <div class="comedy">
    <img src="@/assets/images/comedy.png" alt="comedy" class="comedy__comedy-img">
    <h2 class="comedy__comedy-title">Комедии</h2>
        <p class="comedy__comedy-text">
      {{ selections }} <span>{{ countComedy }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'v-comedy',
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countComedy: 0,
    };
  },
  computed: {
    async countSelectComedy() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=комедия&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countComedy = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectComedy;
  },
}
</script>
<style lang="scss" scoped>
.comedy{
  position: relative;
  &__comedy-img{
    max-width: 365px;
  }
  &__comedy-title{
    position: absolute;
    top: 35%;
    left: 35%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__comedy-text{
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
.comedy__comedy-img:hover{
  transform: scale(1.04);
  transition: 0.2s;
}
</style>