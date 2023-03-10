import { createStore } from 'vuex'

export default createStore({
  state: {
    ratingMax: 10,
    ratingMin: 8,
    newCinemaAge: new Date().toLocaleString("ru", { year: "numeric" }),
    oldCinemaAge: 1970,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
