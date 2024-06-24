<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useDropZone</h2>
    <p>Create a zone where files can be dropped</p>
    <div ref="dropZoneRef" class="w-[400px] min-h-[80px] bg-zinc-200 mx-auto mt-4 p-2 rounded-md">
      <p :class="{ 'font-bold': isOverDropZone }">Drop files here!</p>
      <table class="w-full border-collapse border border-slate-400 mt-1">
        <tbody>
          <tr>
            <th class="border border-slate-400">File name</th>
            <th class="border border-slate-400">File size</th>
          </tr>
          <tr v-for="droppedFile in droppedFiles" :key="droppedFile.name">
            <td class="border border-slate-400">
              {{ droppedFile.name }}
            </td>
            <td class="border border-slate-400">{{ droppedFile.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dropZoneRef = ref<HTMLDivElement>();
import { useDropZone } from "@vueuse/core";
const droppedFiles = ref<File[] | null>();
const onDrop = (files: File[] | null) => {
  console.log("files dropped: ", files);
  droppedFiles.value = files;
};
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<style scoped></style>
