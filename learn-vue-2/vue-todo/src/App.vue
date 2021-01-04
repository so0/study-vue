<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성이름="현재 컴포넌트"></TodoList> -->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
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
  data: function() {
    return {
      todoItems: [],
    };
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        //console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(item);
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
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
