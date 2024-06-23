<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">createGlobalState</h2>
    <p>Keep states in the global scope to be reusable across Vue instances</p>
    <div class="flex gap-5 justify-around">
      <Component1 />
      <Component2 />
    </div>
  </div>
</template>

<script setup lang="ts">
import Component1 from "./Component1.vue";
import Component2 from "./Component2.vue";
</script>

<style scoped></style>
