<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useActiveElement</h2>
    <p></p>
    <div class="grid grid-cols-3 gap-2 max-w-3xl mx-auto mb-2">
      <input v-for="i in 6" :key="i" :data-id="i" :placeholder="i + ''" type="text" class="border border-slate-200 p-1 rounded-md" />
    </div>
    <div>Active element is: {{ activeId }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useActiveElement } from "@vueuse/core";
const activeElement = useActiveElement();
const activeId = computed(() => {
  return activeElement.value?.dataset?.id || "null";
});
</script>

<style scoped></style>
