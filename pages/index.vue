<script setup lang="ts">
const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.apiURL}/rcms-api/3/blogs`);
const blogs = ref<DataResponse>(data as unknown as DataResponse);
</script>

<template>
  <div>
    <h1 class="text-4xl">Blog List</h1>
    <ul class="list-inside list-disc p-8 space-y-4">
      <li v-for="blog in blogs.list" :key="(blog.topics_id as string)">
        <NuxtLink class="text-sky-700" :to="`/${blog.topics_id}`">{{
          blog.subject
        }}</NuxtLink>
      </li>
    </ul>
  </div>

  <add-form />
</template>
