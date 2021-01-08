<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성이름="현재 컴포넌트"></TodoList> -->
    <TodoFooter />
  </div>
</template>

<script>
// 컴포넌트 등록
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

// var my_cmp = {
//   template: "<div>my component</div>",
// };

// new Vue({
//   el: "#app",
//   // 지역 컴포넌트 등록 방법
//   components: {
//     // "컴포넌트 이름": "컴포넌트 내용",
//     "my-cmp": my_cmp,
//   },
// });

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
