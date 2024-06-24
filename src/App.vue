<script setup lang="ts">
import CreateGlobalState from "./components/vueuse/state/createGlobalState/index.vue";
import CreateSharedComposable from "./components/vueuse/state/createSharedComposable/index.vue";
import UseRefHistory from "./components/vueuse/state/useRefHistory/index.vue";
import UseStorage from "./components/vueuse/state/useStorage/index.vue";
import UseActiveElement from "./components/vueuse/elements/useActiveElement/index.vue";
import UseDocumentVisibility from "./components/vueuse/elements/useDocumentVisibility/index.vue";
import UseDraggable from "./components/vueuse/elements/useDraggable/index.vue";
import UseDropZone from "./components/vueuse/elements/useDropZone/index.vue";
import UseElementBounding from "./components/vueuse/elements/useElementBounding/index.vue";
import UseElementVisibility from "./components/vueuse/elements/useElementVisibility/index.vue";
import UseIntersectionObserver from "./components/vueuse/elements/useIntersectionObserver/index.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[800px] mx-auto grid grid-cols-1 gap-3">
      <CreateGlobalState />
      <CreateSharedComposable />
      <UseRefHistory />
      <UseStorage />
      <UseActiveElement />
      <UseDocumentVisibility />
      <UseDraggable />
      <UseDropZone />
      <UseElementBounding />
      <UseElementVisibility />
      <UseIntersectionObserver />
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
