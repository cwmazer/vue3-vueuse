<template>
  <div class="w-full p-2 border border-slate-200 rounded-md">
    <h2 class="mb-1 font-bold underline">useBroadcastChannel</h2>
    <p>Closes a broadcast channel automatically component unmounted.</p>
    <div class="text-left">
      <div>
        <p>
          Supported:
          <b>{{ isSupported }}</b>
        </p>
        <b>Please open this page in at least two tabs</b>
      </div>
      <div class="">
        <form @submit.prevent="post(message)">
          <input type="text" v-model="message" class="p-1 outline-none border border-x-zinc-800 rounded-md" />
          <button type="submit" class="ml-3">Send Message</button>
        </form>
      </div>
      <div>Received: {{ data }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useBroadcastChannel } from "@vueuse/core";
const { isSupported, channel, data, post, close, error, isClosed } = useBroadcastChannel({ name: "vueuse-demo-channel" });
const message = ref("");
</script>

<style scoped></style>
