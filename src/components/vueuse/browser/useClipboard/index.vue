<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useClipboard</h2>
    <p>Reactive clipboard API.</p>
    <div>Permission: {{ `Clipboard-read: ${permissionRead}, Clipboard-write: ${permissionWrite}` }}</div>
    <p>Current copied: {{ text || "none" }}</p>
    <input v-model="needCopy" type="text" class="p-1 border border-slate-500 rounded-md mr-2" />
    <button @click="copy(needCopy)">Copy</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClipboard, usePermission } from "@vueuse/core";
const needCopy = ref("");
const { isSupported, text, copy, copied } = useClipboard();
const permissionRead = usePermission("clipboard-read");
const permissionWrite = usePermission("clipboard-write");
</script>

<style scoped></style>
