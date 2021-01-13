import axios from 'axios';

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0/',
  // ex 토큰 처리.. 등등
};

// 2. API 함수들을 정리
// 공통 함수
function fetchList(name) {
  return axios.get(`${config.baseURL}${name}/1.json`);
}

function fetchNewsList() {
  return axios.get(`${config.baseURL}news/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseURL}jobs/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseURL}ask/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseURL}user/${username}.json`);
}
function fetchCommentItem(id) {
  return axios.get(`${config.baseURL}item/${id}.json`);
}

export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList };
