<template>
  <div class="w-full p-2 border border-slate-200">
    <h2 class="mb-1 font-semibold">createSharedComposable</h2>
    <p>Make a composable function usable with multiple Vue instances</p>
    <div class="flex gap-5 justify-between">
      <ComponentA />
      <ComponentB />
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
</script>

<style scoped></style>
