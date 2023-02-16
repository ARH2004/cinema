<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style lang="scss" scoped>
.btn {
  background: #81becb;
  border-radius: 57px;
  width: 120px;
  height: 35px;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
}
</style>
