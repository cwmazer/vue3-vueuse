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
import UseMouseInElement from "./components/vueuse/elements/useMouseInElement/index.vue";
import UseResizeObserver from "./components/vueuse/elements/useResizeObserver/index.vue";
import UseWindowFocus from "./components/vueuse/elements/useWindowFocus/index.vue";
import UseWindowScroll from "./components/vueuse/elements/useWindowScroll/index.vue";
import UseWindowSize from "./components/vueuse/elements/useWindowSize/index.vue";
import UseBroadcastChannel from "./components/vueuse/browser/useBroadcashChannel/index.vue";
import UseClipboard from "./components/vueuse/browser/useClipboard/index.vue";
import UseScriptTag from "./components/vueuse/browser/useScriptTag/index.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[800px] mx-auto grid grid-cols-1 gap-3 mb-5">
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
      <UseMouseInElement />
      <UseResizeObserver />
      <UseWindowFocus />
      <UseWindowScroll />
      <UseWindowSize />
      <UseBroadcastChannel />
      <UseClipboard />
      <UseScriptTag />
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
