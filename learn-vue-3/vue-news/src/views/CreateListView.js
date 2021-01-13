import ListView from './ListView.vue';

// High Order Component
export default function createListview(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name, // NewsView, JobsView..
    render(createElement) {
      return createElement(ListView);
    },
  };
}
