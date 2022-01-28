import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
    coinsFullInfo: [],
    coinHistory: [],
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
    SET_COIIN_FULL(state, items) {
      state.coinsFullInfo = items;
    },
    SET_HISTORY(state, items) {
      state.coinHistory = items;
    },
  },
  actions: {
    getCoins({ commit }) {
      axios.get("https://api.coincap.io/v2/assets").then((response) => {
        commit("SET_COIN", response.data.data);
      });
    },
    getCoinFullInfo({ commit }, payload) {
      axios
        .get(`https://api.coincap.io/v2/assets/${payload}`)
        .then((response) => {
          commit("SET_COIIN_FULL", response.data.data);
        });
    },
    getHistory({ commit }, payload) {
      axios
        .get(`https://api.coincap.io/v2/assets/${payload}/history?interval=d1`)
        .then((res) => {
          commit("SET_HISTORY", res.data.data);
        });
    },
  },
});
