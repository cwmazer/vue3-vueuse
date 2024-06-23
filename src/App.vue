<script setup lang="ts">
import CreateGlobalState from "./components/vueuse/state/createGlobalState/index.vue";
import CreateSharedComposable from "./components/vueuse/state/createSharedComposable/index.vue";
import UseRefHistory from "./components/vueuse/state/useRefHistory/index.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[800px] mx-auto">
      <CreateGlobalState />
      <CreateSharedComposable />
      <UseRefHistory />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
