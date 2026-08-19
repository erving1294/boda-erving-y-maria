<template>
  <div
    @click="toggle"
    class="fixed bottom-3 right-3 z-[99] w-8 h-8 bg-white rounded-full shadow-sage-md flex justify-center items-center cursor-pointer border-2 border-gold transition duration-300 hover:scale-110 active:scale-95"
    title="Activar/Desactivar Música"
  >
    <!-- Play Icon SVG -->
    <svg
      v-if="!isPlaying"
      class="w-4 h-4 text-sage fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>

    <!-- Pause Icon SVG -->
    <svg
      v-else
      class="w-4 h-4 text-sage fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  </div>
</template>

<script setup>
import { useAudio } from "../../../core/composables/useAudio";

const { isPlaying, toggle } = useAudio();
</script>

<style scoped>
</style>
