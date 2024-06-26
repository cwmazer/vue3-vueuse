<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useWebWorkerFn</h2>
    <p>Run expensive functions without blocking the UI, using a simple syntax that makes use of Promise.</p>
    <div class="mt-2">
      <button @click="doHeavyWork">{{ `Worker Status: ${workerStatus}` }}</button>
      <button @click="workerTerminate()" class="ml-3">Terminate worker</button>
    </div>
    <div>{{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useWebWorkerFn, useTimestamp, useDateFormat } from "@vueuse/core";
const result = ref();
const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(heavyWork);

async function doHeavyWork() {
  console.log("start", useDateFormat(useTimestamp().value, "YYYY-MM-DD HH:mm:ss SSS").value);
  result.value = await workerFn();
  console.log("end", useDateFormat(useTimestamp().value, "YYYY-MM-DD HH:mm:ss SSS").value);
}

function heavyWork() {
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 100000; j++) {}
  }
  return "done!";
}
</script>

<style scoped></style>
