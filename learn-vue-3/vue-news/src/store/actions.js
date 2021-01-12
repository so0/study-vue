import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        console.log(data);

        // state 변경은 mutation  을 통해야함.
        // this.state.news = response.data; // X

        commit('SET_NEWS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);

        commit('SET_JOBS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);

        commit('SET_ASK', data);
      })
      .catch((error) => console.log(error));
  },
};
