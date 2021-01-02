<template>
  <form v-on:submit="submitForm">
    <div>
      <label for="username">id:</label>
      <!-- v-model: 2way databinding -->
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function(event) {
      event.preventDefault();
      console.log("submitForm");
    },
  },
};
</script>

<style></style>
