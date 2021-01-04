<template>
  <div class="inputBox shadow">
    <!-- 2 way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span v-on:click="addTodo" class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function() {
      // console.log(this.newTodoItem);
      if (this.newTodoItem !== "") {
        var obj = { completed: false, item: this.newTodoItem };
        // 저장하는 로직
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      // 초기화
      this.newTodoItem = "";
    },
  },
};
</script>

<style>
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
