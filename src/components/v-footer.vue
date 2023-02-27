<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__logo-list">
            <div class="img">
              <img
                src="@/assets/images/logo-footer.png"
                alt="logo"
                class="footer__logo"
              />
            </div>
            <div class="list">
              <h3 class="footer__title">Меню</h3>
              <ul class="footer__list" v-for="list in dataList" :key="list.id">
                <li class="footer__item">{{ list.text }}</li>
              </ul>
            </div>
            <img
              src="@/assets/images/lineONe.png"
              alt="line"
              class="footer__line-one"
            />
          </div>
          <div class="footer__about">
            <h3 class="footer__title">О нас</h3>
            <p class="footer__text-one">
              Зная всё о кино, хочется поделиться этим с другими. Делитесь
              фильмами, трейлерами, персонами и новостями в социальных сетях,
              присваивайте рейтинги фильмам и обсуждайте их с друзьями и
              подписчиками!
            </p>
            <p class="footer__text-two">
              Интересные фильмы, ближайшие кинотеатры и любимых актеров можно
              добавлять в «Избранное». Система покажет все связанные с ними
              новости и новые трейлеры, подскажет, когда можно купить билет в
              кино на интересующую премьеру. Присоединяйтесь!
            </p>
          </div>
        </div>
        <img
          src="@/assets/images/line-two.png"
          alt="line"
          class="footer__line-two"
        />
        <div class="footer__icons">
          <p class="footer__document">© Все права защищены MovieDB.ru 2021</p>
          <div class="footer__icon">
            <img
              src="@/assets/images/facebook.png"
              alt="facebook"
              class="footer__facebook"
            />
            <img
              src="@/assets/images/inst.png"
              alt="inst"
              class="footer__ins"
            />
          </div>
          <p class="footer__polit">Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-footer",
  data(){
    return {
      dataList: [
        {id: Date.now(), text: 'Подборки'},
        {id: Date.now(), text: 'По жанру'},
        {id: Date.now(), text: 'Фильмы'},
        {id: Date.now(), text: 'Сериалы'},
        {id: Date.now(), text: 'Мультфильмы'},
        {id: Date.now(), text: 'Аниме'},
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
.container{
  width: 1400px;
  margin: 0 auto;
}
.footer {
  backdrop-filter: blur(10px);
  background: radial-gradient(
    696.2% 730.65% at 47.6% 26.27%,
    #181a19 0%,
    #24282b 68.62%
  );
  &__wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    width: 200px;
  }
  &__logo-list {
    display: flex;
    justify-content: space-between;
  }
  &__about {
    width: 700px;
  }
  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 147.69%;
    color: #ffffff;
    margin-bottom: 10px;
  }
  &__text-one {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 135.69%;
    color: #a8a8a8;
  }
  &__text-two {
    font-weight: 400;
    font-size: 16px;
    line-height: 135.69%;
    color: #a8a8a8;
  }
  &__line-one {
    margin-left: 160px;
    margin-top: 30px;
    height: 60px;
  }
  &__item{
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    color: #A8A8A8;
  }
  &__line-two {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__document {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #a8a8a8;
  }
  &__icons {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__facebook {
    margin-right: 10px;
  }
  &__inst {
    margin-left: 10px;
  }
  &__polit {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-decoration-line: underline;
    color: #a8a8a8;
  }
}
.list {
  margin-left: 180px;
}
</style>
