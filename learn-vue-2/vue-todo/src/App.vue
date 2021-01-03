<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style></style>
