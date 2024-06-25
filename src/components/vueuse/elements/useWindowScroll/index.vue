<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useWindowScroll</h2>
    <p>Reactive window scroll</p>
    <div class="w-[600px] mx-auto border mt-3 p-2 flex gap-3 justify-center">
      <button @click="y = 0">Scroll to top!</button>
      <button @click="x += 30">Scroll to right</button>
      <button @click="x -= 30">Scroll to left</button>
    </div>
    <div>
      {{ `x: ${x}, y: ${y}` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { x, y } = useWindowScroll({ behavior: "smooth" });
</script>

<style scoped></style>
