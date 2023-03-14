import { createStore } from 'vuex'

export default createStore({
  state: {
    newCinemaAge: new Date().toLocaleString("ru", { year: "numeric" }),
    tokenApi: "9TPR93X-XZGM9DS-PFJEGYP-GAR9W9M",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
