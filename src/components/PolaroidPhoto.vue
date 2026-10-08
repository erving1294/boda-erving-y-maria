<template>
  <article
    :style="`background-image: url(${PolaroidFondo})`"
    :class="[
      'flex flex-col items-center justify-between p-3 w select-none bg-cover bg-center',
      hasShadow ? 'shadow-[0_3px_10px_rgba(0,0,0,0.25)]' : '',
    ]"
  >
    <!-- Image Container with a loading background -->
    <div
      class="w-full flex-1 overflow-hidden relative bg-slate-50 border border-slate-100"
    >
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        class="absolute w-full h-full object-cover object-center"
      />
    </div>
    <!-- Slot for optional caption/content below the photo -->
    <slot></slot>
  </article>
</template>

<script setup>
import PolaroidFondo from "../assets/images/polaroid_fondo.png";

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Foto impresa",
  },
  hasShadow: {
    type: Boolean,
    default: true,
  },
});
</script>
