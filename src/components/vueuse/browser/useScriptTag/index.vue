<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useScriptTag</h2>
    <p>Create a script tag, with support for automatically unloading (deleting) the script tag on unmount.</p>
    <div class="">
      <button @click="doLoad" class="mr-3">Manual Load</button>
      <button @click="doUnload">Unload</button>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScriptTag } from "@vueuse/core";
// import type { UseScriptTagOptions, UseScriptTagReturn } from "@vueuse/core";
const text = ref("");
const { scriptTag, load, unload } = useScriptTag(
  "https://player.twitch.tv/js/embed/v1.js",
  () => {
    console.log("Script loaded!");
    text.value += "Script loaded! \n";
  },
  { manual: true }
);

const doLoad = async () => {
  await load();
};

const doUnload = async () => {
  await unload();
};
</script>

<style scoped></style>
