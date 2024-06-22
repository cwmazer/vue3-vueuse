<template>
  <div class="px-4 py-2 border border-slate-200">
    ComponentA
    <p>Mouse: {{ `x: ${x}, y: ${y}` }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSharedMouse } from "./shareMouse";
const { x, y } = useSharedMouse();
</script>

<style scoped></style>
