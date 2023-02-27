<template>
  <div class="newCollection">
    <div class="container">
      <div class="newCollection__wrapper">
        <div class="newCollection__box-title">
          <h2 class="newCollection__title">Новые коллекции</h2>
        </div>
        <div
          class="newCollection__cards"
          v-for="collection in cardArrays"
          :key="collection.id"
        >
          <div class="newCollection__card">
            <div class="newCollection__box-img">
              <img
                :src="collection?.poster?.url"
                alt="img"
                class="newCollection__img"
              />
            </div>
            <div class="newCollection__box-text">
              <h4 class="newCollection__time">{{ collection.year }}</h4>
              <p class="newCollection__text">{{ collection.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-newCollection",
  data() {
    return {
      cardArrays: [],
    };
  },
  methods: {
    async newCinema() {
      try {
        const response = await fetch(
          "https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&limit=7&page=18ssssssssssssss&field=year&search=2022-2023&token=9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M"
        );
        const data = await response.json();
        this.cardArrays = data.docs;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  mounted() {
    this.newCinema();
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 300px;
}
.newCollection {
  &__card {
    display: flex;
    padding: 25px 15px 20px 10px;
    background: rgba(6, 6, 7, 0.5);
    border: 1px solid #2B2B2B;
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
  }
  &__box-title {
    background: #212121;
    border: 1px solid #2b2b2b;
    border-radius: 5px 5px 0px 0px;
  }
  &__box-text {
    padding-left: 20px;
  }
  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 18px 0 15px 20px;
  }
  &__img {
    width: 100px;
    height: 110px;
  }
  &__time {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a4a4a4;
  }
  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #ffffff;
  }
}
</style>
