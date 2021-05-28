<template>
  <div>
    <NuxtLink to="/test">test</NuxtLink>  
    <h1>Hello world!!</h1>
    <!-- <Index /> -->
  </div>

</template>

<script lang="ts">
//import Index from "~/components/templates/Index"
import {defineComponent, useMeta } from '@nuxtjs/composition-api';
export default defineComponent({
  components: {
    // Index
  },
  head: {},
  setup() {
    const { title } = useMeta();
    title.value = 'Nuxt TS Composition API !!!!!!!';
  },
})
</script>