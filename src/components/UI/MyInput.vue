<template>
  <div class="wrapper">
    <img class="wrapper__loupe" src="@/assets/images/loupe.png" alt="loupe" />
    <input :placeholder="placeholder" class="wrapper__input" />
  </div>
</template>
<script>
export default {
  name: "my-input",
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  &__input {
    position: relative;
    background: #1b1e1e;
    border: 2px solid #252a2c;
    border-radius: 93px;
    width: 486px;
    height: 44px;
    padding: 3px 0px 0px 20px;
    color: #8e9a9c;
  }
  &__loupe {
    position: absolute;
    z-index: 1;
    // top: 7.7%;
    // left: 89.5%;
    margin-left: 435px;
    margin-top: 8px;
    width: 25px;
}
}
</style>
