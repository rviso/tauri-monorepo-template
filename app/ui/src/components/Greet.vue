<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">
      Greet
    </button>
  </form>

  <p>{{ greetMsg }}</p>
</template>


<script setup lang="ts">
import type { Ref } from 'vue';
import { ref} from 'vue'
import { invoke } from '@tauri-apps/api/tauri'

const greetMsg:Ref<string> = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

