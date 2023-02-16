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
              <ul class="footer__list">
                <li class="footer__item">Подборки</li>
                <li class="footer__item">Подборки</li>
                <li class="footer__item">Подборки</li>
                <li class="footer__item">Подборки</li>
                <li class="footer__item">Подборки</li>
                <li class="footer__item">Подборки</li>
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
          <p class="footer__document">©Все права защищены MovieDB.ru 2021</p>
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
};
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 60px;
  backdrop-filter: blur(10px);
  &__wrapper {
    display: flex;
    flex-direction: column;
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
