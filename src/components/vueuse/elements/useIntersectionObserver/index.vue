<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useIntersectionObserver</h2>
    <p>Detects that a targe element's visibility</p>
    <div class="flex justify-center items-center gap-5 p-2">
      <div :class="{ 'text-red-600': targetIsVisible }">{{ `Target element is: ${targetIsVisible ? "visible" : "invisible"}` }}</div>
      <button @click="stop">Stop</button>
    </div>
    <div class="mx-auto w-[400px] h-[130px] overflow-y-scroll bg-slate-200">
      <div class="w-full h-[200px] pt-5">Scroll me down!!</div>
      <div ref="target" class="w-full h-[80px]">Hello world!!</div>
      <div class="w-full h-[200px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
const target = ref();
const targetIsVisible = ref(false);
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting;
});
</script>

<style scoped></style>
