<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useWindowFocus</h2>
    <p>Reactively track window focus with window.onfocus and window.onblur events</p>
    <div class="w-[600px] mx-auto border mt-3 p-2">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWindowFocus } from "@vueuse/core";
const focused = useWindowFocus();
const text = computed(() => {
  return focused.value ? "Tab is focused, click somewhere outside of the document to unfocus" : "Tab is unfocused";
});
</script>

<style scoped></style>
