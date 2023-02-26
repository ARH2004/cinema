<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <img class="navbar__logo" src="@/assets/images/logoMovie.png" alt="logo" />
        <ul class="navbar__list" v-for="list in dataNavbar" :key="list.id">
          <li class="navbar__item">{{ list.text }}</li>
        </ul>
        <my-input :placeholder="'Поиск по сайту'"></my-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-navbar",
  data(){
    return{
        arr:[],
        dataNavbar: [
          {id: Date.now(), text: 'Главная'},
          {id: Date.now(), text: 'Подборки'},
          {id: Date.now(), text: 'По жанру'},
          {id: Date.now(), text: 'Фильмы'},
          {id: Date.now(), text: 'Сериалы'},
          {id: Date.now(), text: 'Мультфильмы'},
          {id: Date.now(), text: 'Аниме'},
        ]
    }
  },
  methods: {
    async shit() {
          const f = await fetch('https://api.kinopoisk.dev/movie?field=genres.name&search=аниме&field=year&search=2023-2023&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M')
          const data = await f.json()
          this.arr = data.docs
          console.log(data)
    }
  }
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
.navbar__item:hover{
  color: #81BECB;
  transition: 0.3s all;
}
</style>
