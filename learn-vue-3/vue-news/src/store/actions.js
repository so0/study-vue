import { fetchList, fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem } from '../api/index.js';

export default {
  // promise
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        // state 변경은 mutation  을 통해야함.
        // this.state.news = response.data; // X

        commit('SET_NEWS', data);
        return data;
      })
      .catch((error) => console.log(error));
  },
  // async
  async FETCH_NEWS({ commit }) {
    const response = await fetchNewsList();
    commit('SET_NEWS', response.data);
    // async 함수의 리턴 -> 프로미스가 리턴됨
    return response; // 결과 값 반환 해주어야함
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
        return data;
      })
      .catch((error) => console.log(error));
  },
};
