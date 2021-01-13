import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// High Order Component
// news, ask, jobs 에서 같은 일을 해서 재활용하기위해..
export default function createListview(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name, // NewsView, JobsView..
    created() {
      // 데이터 불러오는 로직 + 스피너 끼고 끄는 로직

      bus.$emit('start:spinner');
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
          bus.$emit('end:spinner');
        });
      // setTimeout(() => {
      //   this.$store
      //     .dispatch('FETCH_LIST', this.$route.name)
      //     .then(() => {
      //       console.log('fetched');
      //       bus.$emit('end:spinner');
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       bus.$emit('end:spinner');
      //     });
      // }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
