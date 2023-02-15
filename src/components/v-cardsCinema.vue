<template>
  <div class="cardsCinema">
    <div class="container">
      <div class="cardsCinema__cards">
        <!-- Фильм с боевиками -->
        <vMilitants :selections="selections"></vMilitants>
        <div class="cardsCinema__two-column">
          <!-- Фильм с военными -->
          <vMilitary :selections="selections"></vMilitary>
          <!-- Фильм с детективами -->
          <vDetectives :selections="selections"></vDetectives>
        </div>
        <div class="cardsCinema__three-column">
          <!-- Детские фильмы -->
          <vChildren :selections="selections"></vChildren>
          <!-- Фильмы с драмой -->
          <vDrama :selections="selections"></vDrama>
          <!-- Фильмы с комедией -->
          <vComedy :selections="selections"></vComedy>
          <!-- Фильмы с криминалом -->
          <vCrime :selections="selections"></vCrime>
          <!-- Фильмы с мелодрамой -->
          <vMelodramas :selections="selections"></vMelodramas>
          <!-- Фильмы с триллером -->
          <vThrillers :selections="selections"></vThrillers>
          <!-- Фильмы с ужасами -->
          <vHorror :selections="selections"></vHorror>
          <!-- Фильмы с фантастикой -->
          <vFantastic :selections="selections"></vFantastic>
          <!-- Фильмы с фэнтези -->
          <vFantasy :selections="selections"></vFantasy>
        </div>
        <div class="cardsCinema__promo">
          <h3 class="cardsCinema__promo-title txt">
            MovieDB.ru - онлайн фильмы в хорошем HD качестве бесплатно и без
            регистрации.
          </h3>
          <p class="cardsCinema__promo-text-one txt">
            На нашем кинопортале вы можете смотреть онлайн лучшие фильмы в HD
            качестве, причем абсолютно бесплатно и без регистрации!
            Располагайтесь поудобнее, сейчас мы проведем экскурсию по нашему
            онлайн кинотеатру. Прежде всего, давайте выясним: чего вы желаете,
            заглянув к нам? Естественно, просмотреть нужный фильм. На нашем
            сайте представлена огромная коллекция самых лучших фильмов
            зарубежного и отечественного кинематографа, c которыми можно
            ознакомиться в любое удобное для вас время, причем абсолютно
            бесплатно. Еще несколько лет тому назад было немыслимо представить
            себе, что наступят времена, когда любой фильм можно будет смотреть
            онлайн. Но прогресс не стоит на месте! И сейчас вам можно не
            посещать кинотеатры, не тратиться на покупку дорогостоящих
            DVD-дисков, а просто зайти на наш сайт, выбрать заинтересовавший вас
            фильм и смотреть его прямо на сайте. Даже без регистрации!
            Наслаждаться просмотром можно на уютном диване дома или же в удобном
            кресле на работе.
          </p>
          <p class="cardsCinema__promo-text-two txt">
            На сайте baskino.club вы можете просматривать фильмы в лучшем HD
            качестве самых различных жанров. При этом наша коллекция постоянно
            пополняется как новинками, так и уже всем полюбившимися фильмами.
            Даже самый требовательный посетитель не сможет уйти от нас, не
            выбрав для себя что-то интересненькое. Кроме этого, если вам
            захочется просмотреть фильм с участием вашего любимого актера, вы
            можете воспользоваться меню «Все актеры». В нем в алфавитном порядке
            расположены отечественные и зарубежные актеры с указанием фильмов, в
            которых они принимали участие.
          </p>
          <p class="cardsCinema__promo-text-three txt">
            Мы несем ответственность за то, чтобы у вас не возникало технических
            проблем при просмотре онлайн фильма. Но если все же что-то
            произошло, обратитесь в раздел «Помощь». В нем содержатся ответы на
            все возможные проблемы и пути их решения. Вы можете оставлять
            комментарии и рецензии к фильмам, а так же делиться любимым кино в
            социальных сетях. Большой сюрприз ожидает владельцев гаджетов на iOS
            (iPhone, iPod и iPad) и Android. Специально для них любой фильм
            можно смотреть онлайн при помощи «умного» проигрывателя, который сам
            определяет оптимальный видео режим для вашего устройства. Он
            подстраивается под вашу платформу и без проблем отображает видео для
            iOS при помощи HTML5 плеера и видео потока H.264/MPEG-4. Для
            пользователей обычных компьютеров, «умный» проигрыватель
            превращается в широко распространенный flash-плеер. Надеемся, что
            сумели вас заинтересовать и дать ответы на все возможные вопросы.
            Так что выбирайте хороший фильм, устраивайтесь поудобнее и
            наслаждайтесь просмотром онлайн в хорошем HD качестве бесплатно и
            без регистрации!
          </p>
        </div>
        <div class="EffectCards-swiper">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay="{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
          >
            <swiper-slide>
              <img src="@/assets/images/comedy.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/comedy.png" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="@/assets/images/comedy.png" alt=""
            /></swiper-slide>
                        <swiper-slide
              ><img src="@/assets/images/comedy.png" alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vMilitants from "@/components/MainCards/v-militants.vue";
import vMilitary from "@/components/MainCards/v-military.vue";
import vDetectives from "@/components/MainCards/v-detectives.vue";
import vChildren from "@/components/MainCards/v-children.vue";
import vDrama from "@/components/MainCards/v-drama.vue";
import vComedy from "@/components/MainCards/v-comedy.vue";
import vCrime from "@/components/MainCards/v-crime.vue";
import vMelodramas from "@/components/MainCards/v-melodramas.vue";
import vThrillers from "@/components/v-thrillers.vue";
import vHorror from "@/components/MainCards/v-horror.vue";
import vFantastic from "@/components/MainCards/v-fantastic.vue";
import vFantasy from "@/components/MainCards/v-fantasy.vue";
import { Autoplay, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

export default {
  name: "v-cardsCinema",
  components: {
    vMilitants,
    vMilitary,
    vDetectives,
    vChildren,
    vDrama,
    vComedy,
    vCrime,
    vMelodramas,
    vThrillers,
    vHorror,
    vFantastic,
    vFantasy,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selections: "Подборок:",
    };
  },
  setup(){
    return {
        modules: [Pagination, Autoplay],
      };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1100px;
  margin: 0 auto;
}
.cardsCinema {
  &__two-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__three-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__promo {
    margin-top: 50px;
    text-align: start;
    padding-left: 10px;
  }
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  padding-bottom: 20px;
}
</style>
