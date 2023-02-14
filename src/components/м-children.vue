<template>
  <div class="children">
    <img
      class="children__children-img"
      src="@/assets/images/children.png"
      alt="children"
    />
    <h2 class="children__children-title">Детские</h2>
    <p class="children__children-text">
      {{ selections }} <span>{{ countChildren }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-children",
  data() {
    return {
      countChildren: 0,
    };
  },
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
  computed: {
    async countSelectChildren() {
      const response = await fetch(
        "https://api.kinopoisk.dev/movie?field=genres.name&search=детский&field=rating.kp&search=8-10&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
      );
      const data = await response.json();
      this.countChildren = data.pages * 9;
    },
  },
  mounted() {
    this.countSelectChildren;
  },
};
</script>
<style lang="scss" scoped>
.children {
  position: relative;
  &__children-img {
    max-width: 365px;
  }
  &__children-title {
    position: absolute;
    top: 35%;
    left: 8%;
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &__children-text {
    position: absolute;
    top: 50%;
    left: 9%;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}
span{
  color: #81BECB;
  font-size: 20px;
}
</style>
