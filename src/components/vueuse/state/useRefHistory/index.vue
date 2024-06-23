<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useRefHistory</h2>
    <p>Track the change history of a ref, also provides undo and redo functionality</p>
    <div class="flex flex-col items-center text-left">
      <div>Count: {{ counter }}</div>
      <div class="flex gap-2 items-center">
        <button @click="() => (counter = counter + 1)">Increment</button>
        <button @click="() => (counter = counter - 1)">Decrement</button>
        /
        <button :disabled="!canUndo" @click="undo">Undo</button>
        <button :disabled="!canRedo" @click="redo">Redo</button>
      </div>
      <div class="mt-2 grid grid-cols-2 gap-2">
        <div>
          <p class="font-semibold">History:</p>
          <div>
            {{ JSON.stringify(history) }}
          </div>
        </div>
        <div>
          <p class="font-semibold">Undo Stack:</p>
          {{ JSON.stringify(undoStack) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRefHistory } from "@vueuse/core";
const counter = ref(0);
const { history, undoStack, redoStack, undo, redo, canRedo, canUndo } = useRefHistory(counter);
</script>

<style scoped></style>
