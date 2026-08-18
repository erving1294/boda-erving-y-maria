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

    <!-- Equalizer / Sound waves -->
    <div v-else class="flex items-end gap-[2.5px] h-4">
      <span class="w-[2.5px] bg-sage rounded-full animate-bar-1"></span>
      <span class="w-[2.5px] bg-sage rounded-full animate-bar-2"></span>
      <span class="w-[2.5px] bg-sage rounded-full animate-bar-3"></span>
    </div>
  </div>
</template>

<script setup>
import { useAudio } from "../../../core/composables/useAudio";

const { isPlaying, toggle } = useAudio();
</script>

<style scoped>
.animate-bar-1 {
  height: 4px;
  animation: bounce 0.8s ease-in-out infinite alternate;
}
.animate-bar-2 {
  height: 4px;
  animation: bounce 0.8s ease-in-out infinite alternate;
  animation-delay: 0.2s;
}
.animate-bar-3 {
  height: 4px;
  animation: bounce 0.8s ease-in-out infinite alternate;
  animation-delay: 0.4s;
}

@keyframes bounce {
  from {
    height: 4px;
  }
  to {
    height: 16px;
  }
}
</style>
