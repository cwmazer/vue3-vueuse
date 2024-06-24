<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useMouseInElement</h2>
    <p>Reactive mouse position related to an element</p>
    <div class="flex gap-2 max-w-[400px] mx-auto mt-3">
      <div ref="target" class="w-[100px] h-[100px] shrink-0 bg-slate-300 grid items-center">Hover me!</div>
      <div class="w-full h-full break-words">
        <div :class="{ 'bg-red-100': !mouseInElement.isOutside, 'p-1': true }">
          {{ JSON.stringify(mouseInElement) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
import { reactive, ref } from "vue";
const target = ref();
const mouseInElement = reactive(useMouseInElement(target));
</script>

<style scoped></style>
