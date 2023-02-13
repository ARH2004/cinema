<template>
  <div class="cardsCinema">
    <div class="cardsCinema__cards">
      <div class="cardsCinema__militants">
        <img
          class="cardsCinema__militants-img"
          src="@/assets/images/militants.png"
          alt="militants"
        />
        <h1 class="cardsCinema__militants-title">Боевики</h1>
        <p class="cardsCinema__militants-text">
          {{ selections }} <span class="span">453</span>
        </p>
      </div>
      <div class="cardsCinema__two-column">
        <div class="cardsCinema__military">
          <img
            class="cardsCinema__military-img"
            src="@/assets/images/military.png"
            alt="military"
          />
          <h1 class="cardsCinema__military-title">Военные</h1>
          <p class="cardsCinema__military-text">
            {{ selections }} <span class="span">100</span>
          </p>
        </div>
        <div class="cardsCinema__detectives">
          <img
            class="cardsCinema__detectives-img"
            src="@/assets/images/detectives.png"
            alt="detectives"
          />
          <h1 class="cardsCinema__detectives-title">Детективы</h1>
          <p class="cardsCinema__detectives-text">
            {{ selections }} <span class="span">90</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-cardsCinema",
    data() {
        return {
            selections: "Подборок:",
        };
    },
};
</script>
<style lang="scss" scoped>
.cardsCinema {
  &__militants {
    position: relative;
  }

  &__militants-title {
    position: absolute;
    top: 40%;
    left: 40%;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    font-weight: 700;
    font-size: 65px;
    line-height: 73px;
  }

  &__militants-text {
    position: absolute;
    top: 55%;
    left: 43%;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__military {
    position: relative;
  }

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

  &__detectives {
    position: relative;
  }

  &__two-column {
    display: flex;
  }

  &__detectives-title {
    position: absolute;
    top: 40%;
    left: 30%;
    font-weight: 700;
    font-size: 50px;
    line-height: 56px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__detectives-text {
    position: absolute;
    top: 53%;
    left: 35%;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
}

.span {
  color: #81becb;
  font-size: 30px;
}
</style>
