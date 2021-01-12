import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
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
    FETCH_ASK(context) {
      fetchAskList()
        .then((response) => {
          console.log(response.data);

          context.commit('SET_ASK', response.data);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          console.log(response.data);

          context.commit('SET_JOBS', response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
