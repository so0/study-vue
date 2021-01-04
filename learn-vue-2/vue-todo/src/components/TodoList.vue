<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem">
        {{ todoItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    };
  },
  created: function() {
    //  vue 라이프 사이클 - 인스턴스가 생성 되자마자 호출됨.
    console.log("created");
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        //console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
};
</script>

<style></style>
