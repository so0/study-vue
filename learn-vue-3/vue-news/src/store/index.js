import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);

          // state 변경은 mutation  을 통해야함.
          // this.state.news = response.data; // X

          context.commit('SET_NEWS', response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
