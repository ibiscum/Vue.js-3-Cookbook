<template>
  <div id="app">
    <MaterialCardBox>
      <template #header>
        <strong>Card Title</strong><br>
        <span>Card Sub-Title</span>
      </template>
      <template #media>
        <img src="https://via.placeholder.com/350x150">
      </template>
      <p>Main Section</p>
      <template #action>
        <button>Action Button</button>
        <button>Action Button</button>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script>
import MaterialCardBox from "./components/MaterialCardBox.vue";

export default {
  name: "App",
  components: {
    MaterialCardBox,
  },
};
</script>
<style>
body {
  font-size: 14px;
}
</style>
