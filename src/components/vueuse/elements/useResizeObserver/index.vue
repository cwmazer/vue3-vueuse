<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useMouseInElement</h2>
    <p>Reactive mouse position related to an element</p>
    <div class="h-[150px] max-w-[400px] mx-auto mt-3">
      <div>
        <div ref="target" class="grid items-center resize w-[200px] h-[120px] bg-stone-300 mx-auto overflow-auto">Resize me!!</div>
        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
const text = ref("");
const target = ref();
useResizeObserver(target, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  text.value = `widtt: ${width}, height: ${height}`;
});
</script>

<style scoped></style>
