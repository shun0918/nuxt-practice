<template>
  <div>
    <h1>{{ cnt }}</h1>
    <button @click="add()">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      cnt: 0
    }
  },
  methods: {
    add() {
      this.cnt++;
    },
  }
}
</script>