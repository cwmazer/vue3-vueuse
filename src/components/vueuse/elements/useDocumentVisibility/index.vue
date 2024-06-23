<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useDocumentVisibility</h2>
    <p>Reactively track <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState" target="_blank">document.visibilityState</a></p>
    <div :class="{ 'text-orange-600': message === 'Welcome back!!' }">
      {{ message }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from "vue";
import { useDocumentVisibility } from "@vueuse/core";
const visibility = useDocumentVisibility();
const message = ref("Minimize the page or switch tab then return");
watch(visibility, (newValue, oldValue) => {
  if (oldValue === "hidden" && newValue === "visible") {
    message.value = "Welcome back!!";
  }
});
</script>

<style scoped></style>
