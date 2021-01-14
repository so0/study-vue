import { fetchList, fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem } from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then(({ data }) => {
  //       // state 변경은 mutation  을 통해야함.
  //       // this.state.news = response.data; // X

  //       commit('SET_NEWS', data);
  //       return data;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // async
  async FETCH_NEWS({ commit }) {
    const response = await fetchNewsList();
    commit('SET_NEWS', response.data);
    // async 함수의 리턴 -> 프로미스가 리턴됨
    return response; // 결과 값 반환 해주어야함
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.ata);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
};
