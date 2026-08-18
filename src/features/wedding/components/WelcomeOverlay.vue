<template>
  <Transition name="envelope-fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-transparent z-[999] flex justify-center items-center overflow-hidden select-none"
    >
      <!-- THE ENVELOPE PARTS -->

      <!-- 1. Top Flap Wrapper (Handles slide and drops shadow on the pocket) -->
      <div
        class="fixed top-0 left-0 w-full h-[55vh] z-30 transition-transform duration-[1.2s] cubic-bezier(0.77, 0, 0.175, 1)"
        :class="isOpened ? 'translate-y-[-55vh]' : 'translate-y-0'"
        style="filter: drop-shadow(0 14px 12px rgba(0, 0, 0, 0.55))"
      >
        <!-- Clipped Flap Child -->
        <div
          class="w-full h-full envelope-flap"
          style="clip-path: polygon(0 0, 100% 0, 100% 42vh, 50% 55vh, 0 42vh)"
        >
          <!-- Internal shadow line inside flap -->
          <div
            class="absolute inset-0 bg-black/5"
            style="clip-path: polygon(0 0, 100% 0, 100% 42vh, 50% 55vh, 0 42vh)"
          ></div>
        </div>
      </div>

      <!-- 2. Bottom Pocket (Slides DOWN when opened) -->
      <div
        class="fixed bottom-0 left-0 w-full h-[100vh] envelope-pocket z-20 transition-transform duration-[1.2s] cubic-bezier(0.77, 0, 0.175, 1)"
        :class="isOpened ? 'translate-y-[100vh]' : 'translate-y-0'"
        style="
          clip-path: polygon(0 42vh, 50% 55vh, 100% 42vh, 100% 100%, 0 100%);
        "
      >
        <!-- Inner shadow effect for the pocket flap -->
        <div
          class="absolute inset-0 bg-black/10"
          style="
            clip-path: polygon(0 42vh, 50% 55vh, 100% 42vh, 100% 100%, 0 100%);
          "
        ></div>
      </div>

      <!-- INTERACTIVE ELEMENTS (Fades out when opened) -->

      <!-- "Click Aquí" Tag -->
      <div
        v-if="!isOpened"
        class="fixed left-1/2 top-[55vh] -translate-x-1/2 -translate-y-[85px] z-50 flex flex-col items-center animate-bounce-arrow"
      >
        <div
          class="bg-white text-[#4a6360] font-serif text-[10px] sm:text-xs tracking-wider px-4 py-1.5 rounded-full shadow-md font-semibold relative"
        >
          Click Aquí
          <!-- Arrow pointing down -->
          <div
            class="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"
          ></div>
        </div>
      </div>

      <!-- Wax Seal Stamp using Sello.png -->
      <img
        v-if="!isOpened"
        @click="openEnvelope"
        :src="sealUrl"
        alt="Sello de Cera"
        class="fixed top-[50vh] -translate-x-1/2 -translate-y-1/2 z-50 w-24 h-24 sm:w-28 sm:h-28 object-contain cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 animate-heartbeat drop-shadow-md"
      />
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useAudio } from "../../../core/composables/useAudio";
import textureUrl from "../../../assets/images/texture.jpg";
import sealUrl from "../../../assets/images/Sello.png";

const emit = defineEmits(["enter"]);
const show = ref(true);
const isOpened = ref(false);
const { play } = useAudio();

const textureStyle = `url(${textureUrl})`;

const openEnvelope = () => {
  isOpened.value = true;

  // 1. Play music immediately on click
  play();

  // 2. Wait for envelope slide animation to complete, then remove overlay
  setTimeout(() => {
    show.value = false;
    emit("enter");
    // Restore scrolling
    document.body.style.overflow = "";
  }, 1200); // matches transition duration
};

// Block scrolling on load
if (typeof window !== "undefined") {
  document.body.style.overflow = "hidden";
}
</script>

<style scoped>
.envelope-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.envelope-fade-leave-to {
  opacity: 0;
}

.animate-bounce-arrow {
  animation: bounceArrow 2s infinite;
}

@keyframes bounceArrow {
  0%,
  100% {
    transform: translate(-50%, -85px);
  }
  50% {
    transform: translate(-50%, -92px);
  }
}

/* Textured paper styles for the envelope using the real downloaded asset */
.envelope-flap {
  background-color: #4a6360;
  background-image:
    radial-gradient(
      circle at 50% 0%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0.28) 100%
    ),
    v-bind(textureStyle);
  background-size:
    100% 100%,
    cover;
  background-blend-mode: multiply;
}

.envelope-pocket {
  background-color: #3d524f;
  background-image:
    radial-gradient(
      circle at 50% 100%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0.32) 100%
    ),
    v-bind(textureStyle);
  background-size:
    100% 100%,
    cover;
  background-blend-mode: multiply;
}
</style>
