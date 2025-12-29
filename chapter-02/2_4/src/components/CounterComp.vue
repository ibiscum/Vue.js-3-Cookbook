<template>
  <button @click="increase">
    {{ count }}
  </button>
  <button @click="decrease">
    {{ count }}
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(0)

  function formattedNumber() {
    console.log(count.value) // 0
  }

  function increase() {
    count.value++;
    console.log(count.value)
  }

  function decrease() {
    count.value--;
    console.log(count.value)
  }

formattedNumber();

</script>
