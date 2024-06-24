<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useElementVisibility</h2>
    <p>Tracks the visibility of an element within the viewport</p>
    <div class="w-[400px] h-[150px] mx-auto bg-slate-200 flex flex-col justify-between mt-1">
      <div :class="{ 'text-red-800': targetIsVisible }">
        {{ `Element is: ${targetIsVisible ? "visible" : "invisible"}` }}
      </div>
      <div ref="target" class="p-2 bg-lime-400">Scroll to hide me!!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";
const target = ref<HTMLElement>();
const targetIsVisible = useElementVisibility(target);
</script>

<style scoped></style>
