<template>
  <article
    class="bg-white flex flex-col items-center justify-between p-2.5 pb-[30px] shadow-[0_3px_10px_rgba(0,0,0,0.25)] will-change-transform select-none"
  >
    <!-- Image Container with a loading background -->
    <div class="w-full flex-1 overflow-hidden relative bg-slate-50 border border-slate-100">
      <img
        :src="src"
        :alt="alt"
        decoding="auto"
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
    </div>
    <!-- Slot for optional caption/content below the photo -->
    <slot></slot>
  </article>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Foto impresa",
  },
});
</script>
