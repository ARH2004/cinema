<template>
  <div class="detectives">
    <img
      class="detectives__detectives-img"
      src="@/assets/images/detectives.png"
      alt="detectives"
    />
    <h1 class="detectives__detectives-title">Детективы</h1>
    <p class="detectives__detectives-text">
      {{ selections }} <span class="span">1863</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-detectives",
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.detectives {
  position: relative;

    &__detectives-img{
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
</style>
