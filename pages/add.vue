<script setup lang="ts">
const subject = ref("");
const contents = ref("");
const image = ref<File | null>(null);
const config = useRuntimeConfig();

function changeImage(evt: Event) {
  image.value = (evt.target as HTMLInputElement).files![0];
}

function onSubmit() {
  try {
    const payload = {
      subject: subject.value,
      slug: "",
      contents_type: 15,
      topics_flg: 1,
      contents: contents.value,
      regular_flg: 0,
      open_flg: 1,
      dispatch_github_workflow: 0,
      ext_1: {
        file_id: 'files/temp/user/car-19.png',
        file_nm: "",
        desc: "",
      },
      ext_2: "",
      validate_only: false,
      approvalflow_id: 0,
    };

    $fetch(`${config.public.apiURL}/rcms-api/3/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div class="flex flex-col gap-8 max-w-7xl mx-auto">
    <h1 class="text-4xl text-center">Add New Blog</h1>

    <input
      type="text"
      class="border border-slate-200 w-full px-6 py-2 text-lg rounded-lg"
      placeholder="Subject"
      v-model="subject"
    />

    <div class="grid grid-cols-2 gap-6">
      <textarea
        class="border border-slate-200 w-full px-6 py-2 text-lg rounded-lg"
        placeholder="Content"
        rows="10"
        v-model="contents"
      />

      <input
        type="file"
        class="border border-dashed border-slate-200 rounded-lg"
        accept="image/*"
        @change="changeImage"
      />
    </div>

    <div class="grid grid-cols-2 gap-6">
      <button
        @click="onSubmit"
        class="w-full bg-sky-800 text-white rounded-lg text-xl py-3"
      >
        Create
      </button>

      <NuxtLink
        to="/"
        class="w-full bg-red-800 text-white text-center rounded-lg text-xl py-3"
      >
        Cancel
      </NuxtLink>
    </div>
  </div>
</template>
