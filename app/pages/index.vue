<template>
  <div>
    <NuxtLink to="/test">test</NuxtLink>  
    <h1>Hello world!!</h1>
    <Index />
  </div>

</template>

<script>
import Index from "~/components/templates/Index"
export default {
  components: {
    Index
  },
  setup() {
  },
}
</script>