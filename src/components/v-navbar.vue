<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <img class="navbar__logo" src="@/assets/images/logoMovie.png" alt="logo" />
        <ul class="navbar__list">
          <li class="navbar__item">Главная</li>
          <li class="navbar__item">Подборки</li>
          <li class="navbar__item">По жанру</li>
          <li class="navbar__item">Фильмы</li>
          <li class="navbar__item">Сериалы</li>
          <li class="navbar__item">Мультфильмы</li>
          <li class="navbar__item">Аниме</li>
        </ul>
        <my-input :placeholder="'Поиск по сайту'"></my-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-navbar",
};
</script>
<style lang="scss" scoped>
.container {
  width: 1400px;
  padding-top: 40px;
  padding-bottom: 20px;
  margin: 0 auto;
}
.navbar {
  background: radial-gradient(
    696.2% 730.65% at 47.6% 26.27%,
    #181a19 0%,
    #24282b 68.62%
  );
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list {
    display: flex;
  }
  &__item {
    margin-left: 20px;
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  &__logo{
    max-width: 150px;
  }
}
</style>
