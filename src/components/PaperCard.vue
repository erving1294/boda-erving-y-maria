<template>
  <div
    :class="[
      'physical-card transition-all duration-500 hover:-translate-y-2 flex flex-col p-2 relative z-20',
      containerClass,
    ]"
    :style="cardStyle"
  >
    <!-- Sello -->
    <div v-if="showSeal" class="w-[70px] absolute top-[-30px] right-[41%] z-10">
      <img
        decoding="auto"
        loading="lazy"
        width="100"
        height="100"
        alt=""
        :src="sealUrl"
        style="
          display: block;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          corner-shape: inherit;
          object-position: center center;
          object-fit: cover;
        "
      />
    </div>
    <!-- Elegant Inset Border Frame -->
    <div
      :class="[
        'border border-gold/15 flex flex-col justify-between items-center text-center h-full relative w-full p-8 md:p-12',
        contentClass,
      ]"
    >
      <!-- Foliage Shadow Overlay -->
      <div
        v-if="hasFoliage"
        class="absolute top-0 w-36 h-36 pointer-events-none opacity-[0.07] select-none text-primary overflow-hidden"
        :class="foliageClasses"
      >
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          class="w-full h-full transform"
          :class="foliageSvgClasses"
        >
          <path
            d="M0 0C15 20 25 45 30 65"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
          />
          <path d="M6 12C14 12 20 20 18 28C11 26 6 18 6 12Z" />
          <path d="M16 25C24 23 28 30 24 38C17 35 13 28 16 25Z" />
          <path d="M26 42C32 38 38 45 34 53C28 50 24 45 26 42Z" />
          <path d="M3 20C8 25 7 35 2 38C-1 33 0 25 3 20Z" />
        </svg>
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import papelBodaUrl from "../assets/images/papel_boda.jpg";
import papelBodaBlancoUrl from "../assets/images/papel_boda_blanco.jpg";
import sealUrl from "../assets/images/Sello.png";

const props = defineProps({
  shape: {
    type: String,
    default: "standard", // "standard", "left", "right"
  },
  containerClass: {
    type: String,
    default: "", // "standard", "left", "right"
  },
  contentClass: {
    type: String,
    default: "", // "standard", "left", "right"
  },
  hasFoliage: {
    type: Boolean,
    default: true,
  },
  isWhite: {
    type: Boolean,
    default: false,
  },
  showSeal: {
    type: Boolean,
    default: false,
  },
});

const cardStyle = computed(() => {
  const bgImg = props.isWhite ? papelBodaBlancoUrl : papelBodaUrl;
  const opacity = props.isWhite ? 0.3 : 0.93;
  return {
    backgroundImage: `linear-gradient(to bottom, rgba(250, 247, 243, ${opacity}), rgba(250, 247, 243, ${opacity})), url(${bgImg})`,
    backgroundSize: props.isWhite ? "100% 100%" : "auto",
    backgroundRepeat: props.isWhite ? "no-repeat" : "repeat",
    backgroundPosition: props.isWhite ? "center" : "left top",
  };
});

const foliageClasses = computed(() => {
  if (props.shape === "right") {
    return "right-0";
  }
  return "left-0";
});

const foliageSvgClasses = computed(() => {
  if (props.shape === "right") {
    return "translate-x-4 -translate-y-4 scale-x-[-1] rotate-12";
  }
  return "-translate-x-4 -translate-y-4 rotate-12";
});
</script>

<style scoped>
.physical-card {
  position: relative;
  background-color: #faf7f3;
  box-shadow:
    0 15px 35px -10px rgba(74, 99, 96, 0.12),
    inset 0 0 45px rgba(191, 168, 128, 0.04),
    0 25px 50px -12px rgba(0, 0, 0, 0.08);
}
</style>
