<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">createSharedComposable</h2>
    <p>Make a composable function usable with multiple Vue instances</p>
    <div class="flex gap-5 justify-around">
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
