<template>
  <div class="px-4 py-2 border border-slate-200">
    Component 1
    <div>Count: {{ count }}</div>
    <div class="flex justify-between gap-3 mb-3">
      <button @click="increase">Increase</button>
      <button @click="decrease">Decrease</button>
    </div>
    <div>Count-persistence: {{ countPs }}</div>
    <div class="flex justify-between gap-3">
      <button @click="increasePs">Increase</button>
      <button @click="decreasePs">Decrease</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalCount, useGlobalCountPersistence } from "./store";
const { count, increase, decrease } = useGlobalCount();
const { count: countPs, increase: increasePs, decrease: decreasePs } = useGlobalCountPersistence();
</script>

<style scoped></style>
