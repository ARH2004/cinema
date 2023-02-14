<template>
  <div class="military">
    <img
      class="military__military-img"
      src="@/assets/images/military.png"
      alt="military"
    />
    <h1 class="military__military-title">Военные</h1>
    <p class="military__military-text">
      {{ selections }} <span class="span">1107</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "v-military",
  props: {
    selections: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.military {
  position: relative;

  &__military-title {
    position: absolute;
    top: 40%;
    left: 38%;
    font-weight: 700;
    font-size: 50px;
    line-height: 56px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__military-text {
    position: absolute;
    top: 53%;
    left: 41.5%;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__military-img{
    max-width: 550px;
  }
}
.span {
  color: #81becb;
  font-size: 30px;
}
</style>
