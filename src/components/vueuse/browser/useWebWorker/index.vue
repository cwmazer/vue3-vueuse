<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useWebWorker</h2>
    <p>Simple Web Workers registration and communication.</p>
    <div>
      <button @click="requestDoMath">{{ buttonText }}</button>
      <input v-model="num" type="text" class="ml-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useWebWorker } from "@vueuse/core";
const buttonText = ref("Do Heavy Work");
const num = ref(2);
const { data, post, terminate, worker } = useWebWorker("heavyWork.js");

const requestDoMath = () => {
  buttonText.value = "Calculating..";
  post(num.value);
};

watch(data, (_, __) => {
  num.value = data.value;
  buttonText.value = "Do Heavy Work";
});
</script>

<style scoped></style>
