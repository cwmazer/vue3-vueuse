<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useWindowSize</h2>
    <p>Reactive window size</p>
    <div class="w-[600px] mx-auto border mt-3 p-2 flex gap-3 justify-center">
      {{ `Resize window to see the change: width: ${width}, height: ${height}` }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
</script>

<style scoped></style>
