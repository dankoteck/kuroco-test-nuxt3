<script setup lang="ts">
const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.apiURL}/rcms-api/3/blogs`);
console.log(data.value);
</script>

<template>
  <div>Hello World 2</div>
</template>
