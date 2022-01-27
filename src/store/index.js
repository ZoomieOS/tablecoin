import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
  },
  getters: {
    relatedCoins(state) {
      return state.coins.slice(0, 3);
    },
  },
  mutations: {
    SET_COIN(state, items) {
      state.coins = items;
    },
  },
  actions: {
    getCoins({ commit }) {
      axios.get("https://api.coincap.io/v2/assets").then((response) => {
        commit("SET_COIN", response.data.data);
      });
    },
  },
});
