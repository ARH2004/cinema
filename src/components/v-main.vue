<template>
  <div class="main">
    <div class="container">
      <div class="main__wrapper">
        <div class="main__cards">
            <div class="main__militants">
                <img src="main__militants-img" alt="militants">
                <h1 class="main__militants-title">Боевики</h1>
                <p class="main__militants-text">Подборок: <span class="span"></span></p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-main",
};
</script>
<style lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
}
.main {
  background: url("@/assets/images/main-background.png") no-repeat #555555;
  background-size: cover;
  padding-top: 30px;
  overflow-x: hidden;
  position: relative;
}
</style>
