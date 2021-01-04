<template>
  <div>
    <div class="inputBox shadow">
      <!-- 2 way binding -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
      <span v-on:click="addTodo" class="addContainer">
        <i class="fas fa-plus addBtn"></i>
      </span>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">custom header</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  props: ["propsdata"],
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function() {
      // console.log(this.newTodoItem);
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...)
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
      }
    },
    clearInput: function() {
      // 초기화
      this.newTodoItem = "";
    },
  },
  components: {
    Modal: Modal,
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
