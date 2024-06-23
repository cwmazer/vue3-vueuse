<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useDraggable</h2>
    <p>Make elements draggable (position fixed)</p>
    <div>{{ JSON.stringify(style) }}</div>
    <div ref="draggableEl" :style="style" class="fixed w-[120px] h-[50px] bg-green-400 grid items-center select-none hover:cursor-pointer">Drag me!! (fixed)</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
const wrapper = ref();
const draggableEl = ref();

const { position, x, y, style } = useDraggable(draggableEl);
</script>

<style scoped></style>
