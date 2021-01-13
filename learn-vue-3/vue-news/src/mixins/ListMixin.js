import bus from '../utils/bus.js';

// mixin
export default {
  // 재사용할 컴포넌트 옵션
  // created() {
  //   bus.$emit('start:spinner');
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
  // },
  mounted() {
    // 인스턴스가 화면에 나타났을 때
    bus.$emit('end:spinner');
  },
};

// // hoc
// export default function create() {
//   // 재사용할 컴포넌트 옵션
// }
