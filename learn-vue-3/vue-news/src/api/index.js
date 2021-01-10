import axios from 'axios';

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0/',
  // ex 토큰 처리.. 등등
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseURL}news/1.json`);
}

// fetchNewsList()
//   .then()
//   .catch();

export { fetchNewsList };
