<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useElementBounding</h2>
    <p>Reactive bounding box of an HTML element</p>
    <div class="w-[600px] h-[120px] mx-auto border">
      <div class="grid grid-cols-2 h-full max-h-full max-w-full">
        <div class="border-zinc-500 bg-slate-100">
          <textarea ref="el" placeholder="Resize me!!" class="border border-zinc-300 resize max-w-full max-h-full"></textarea>
        </div>
        <div class="p-1 break-words">
          {{ JSON.stringify(data) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const el = ref<HTMLDivElement>();
import { useElementBounding } from "@vueuse/core";
const bounding = useElementBounding(el);
const data = reactive(bounding);
</script>
<style scoped></style>
