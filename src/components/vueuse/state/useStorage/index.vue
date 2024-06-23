<template>
  <div class="w-full p-2 border border-slate-200">
    <h2 class="mb-1 font-semibold">useStorage</h2>
    <p>Local storage/Session storage:</p>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <div class="font-semibold">Local Storage:</div>
        <button @click="() => (counterLocalStorage += 1)">Increment</button>
        Counter - Local storage:
        {{ counterLocalStorage }}
      </div>
      <div>
        <div class="font-semibold">Session Storage:</div>
        <button @click="() => (counterSessionStorage += 1)">Increment</button>
        Counter - Session Storage:
        {{ counterSessionStorage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const counterLocalStorage = useStorage("counter", 0, localStorage);
const counterSessionStorage = useStorage("counter", 0, sessionStorage);
</script>

<style scoped></style>
