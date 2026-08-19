<template>
  <Transition name="overlay-fade">
    <div
      v-if="show"
      class="fixed inset-0 z-[999] overflow-hidden select-none bg-transparent"
    >
      <!-- 1. TOP SCALLOPED FLAP (Slides UP when opened) -->
      <div
        class="fixed top-0 left-0 w-full h-[55vh] z-30 transition-transform duration-[1400ms] ease-in-out overflow-hidden"
        :class="isOpened ? '-translate-y-[55vh]' : 'translate-y-0'"
        style="filter: drop-shadow(0 14px 12px rgba(74, 55, 40, 0.22))"
      >
        <!-- Large centered SVG to prevent horizontal stretching of scallops -->
        <svg
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2400px] h-[55vh] overflow-visible"
          viewBox="0 0 2400 550"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Paper texture pattern -->
            <pattern
              id="flap-paper-texture"
              patternUnits="userSpaceOnUse"
              width="400"
              height="300"
            >
              <image
                :href="paperTexture"
                width="400"
                height="300"
                preserveAspectRatio="none"
              />
            </pattern>
          </defs>

          <!-- Main Scalloped Flap Body -->
          <path :d="flapPath" fill="url(#flap-paper-texture)" />

          <!-- Double Border Contour using stroke layering -->

          <!-- 1. Gold outer line base (thick) -->
          <path
            :d="flapPath"
            fill="none"
            stroke="#dec5b1"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.85"
          />

          <!-- 2. Paper mask line (middle) -->
          <path
            :d="flapPath"
            fill="none"
            stroke="#faf7f3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <!-- 3. Gold inner line (thin) -->
          <path
            :d="flapPath"
            fill="none"
            stroke="#dec5b1"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.9"
          />
        </svg>
      </div>

      <!-- 2. BOTTOM POCKET (Slides DOWN when opened) -->
      <div
        class="fixed bottom-0 left-0 w-full h-[100vh] z-20 transition-transform duration-[1400ms] ease-in-out overflow-hidden"
        :class="isOpened ? 'translate-y-[100vh]' : 'translate-y-0'"
      >
        <!-- Large centered SVG for pocket paper body -->
        <svg
          class="absolute top-0 left-1/2 -translate-x-1/2 w-[2400px] h-[100vh] overflow-visible"
          viewBox="0 0 2400 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Pocket paper texture pattern -->
            <pattern
              id="pocket-paper-texture"
              patternUnits="userSpaceOnUse"
              width="400"
              height="300"
            >
              <image
                :href="paperTexture"
                width="400"
                height="300"
                preserveAspectRatio="none"
              />
            </pattern>
          </defs>

          <!-- Main Pocket Body -->
          <path :d="pocketPath" fill="url(#pocket-paper-texture)" />
        </svg>
      </div>

      <!-- 3. INTERACTIVE ELEMENTS (Fade out when opened) -->

      <!-- Wax Seal Button -->
      <div
        class="fixed left-1/2 top-[55vh] -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer transition-all duration-[1000ms] ease-in-out"
        :class="
          isOpened
            ? 'seal-opened pointer-events-none'
            : 'seal-closed hover:scale-105 active:scale-95'
        "
        @click="openEnvelope"
      >
        <div
          class="relative w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center"
        >
          <img
            :src="sealUrl"
            alt="Sello de Cera"
            class="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-heartbeat"
          />
        </div>
      </div>

      <!-- Text Instructions and Bounce Indicator -->
      <!-- <Transition name="fade">
        <div
          v-if="!isOpened"
          class="fixed left-1/2 top-[55vh] -translate-x-1/2 translate-y-[60px] z-40 flex flex-col items-center animate-bounce-arrow"
        >
          <div
            class="bg-white text-primary font-sans text-[10px] sm:text-xs tracking-[0.2em] px-5 py-2 rounded-full shadow-md font-semibold border border-gold/15 uppercase text-center min-w-[120px] relative"
          >
            Abrir

            <div
              class="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-t border-l border-gold/15"
            ></div>
          </div>
        </div>
      </Transition> -->
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useAudio } from "../../../core/composables/useAudio";

import paperTexture from "../../../assets/images/textura_carta.png";
import sealUrl from "../../../assets/images/Sello.png";

const emit = defineEmits(["enter"]);

const show = ref(true);
const isOpened = ref(false);

const { play } = useAudio();

/* ==========================================================
   SOLAPA SUPERIOR
   ==========================================================

   Se mantienen solamente 3 curvas principales.

   La forma conserva:
   - los extremos laterales
   - una caída suave hacia el centro
   - el punto más bajo en el centro
   - la misma proporción general de tu sobre
*/

const flapPath = `
  M 0,0
  L 2400,0
  L 2400,350

  C 2150,350
    1900,430
    1600,430

  C 1400,430
    1300,550
    1200,550

  C 1100,550
    1000,430
    800,430

  L 0,350

  Z
`;

/* ==========================================================
   PARTE INFERIOR DEL SOBRE
   ==========================================================

   Utilizamos las mismas 3 curvas pero en sentido inverso,
   para que el borde de la parte inferior coincida
   exactamente con el borde de la solapa.
*/

const pocketPath = `
  M 0,350

  L 800,430

  C 1000,430
    1100,550
    1200,550

  C 1300,550
    1400,430
    1600,430

  C 1900,430
    2150,350
    2400,350

  L 2400,1000
  L 0,1000

  Z
`;

/* ==========================================================
   ABRIR SOBRE
   ========================================================== */

const openEnvelope = () => {
  if (isOpened.value) return;

  isOpened.value = true;

  // 1. Play background music
  try {
    play();
  } catch (e) {
    console.warn("Audio play blocked or failed:", e);
  }

  // 2. Wait for slide animation, then remove welcome overlay
  setTimeout(() => {
    show.value = false;

    emit("enter");

    // Restore scrolling on the landing page
    document.body.style.overflow = "";
  }, 1400);
};

/* ==========================================================
   BLOQUEAR SCROLL
   ========================================================== */

if (typeof window !== "undefined") {
  document.body.style.overflow = "hidden";
}
</script>

<style scoped>
/* ==========================================================
   OVERLAY
   ========================================================== */

.overlay-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.overlay-fade-leave-to {
  opacity: 0;
}

/* ==========================================================
   FADE
   ========================================================== */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ==========================================================
   FADE IN
   ========================================================== */

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==========================================================
   BOUNCE INDICATOR
   ========================================================== */

.animate-bounce-arrow {
  animation: bounceArrow 2s infinite;
}

@keyframes bounceArrow {
  0%,
  100% {
    transform: translate(-50%, 60px);
  }

  50% {
    transform: translate(-50%, 52px);
  }
}

/* ==========================================================
   WAX SEAL STATES
   ========================================================== */

.seal-closed {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.seal-opened {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.6);
  filter: blur(4px);
}

/* ==========================================================
   PULSE ANIMATION FOR WAX SEAL
   ========================================================== */

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}

.animate-heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
}
</style>
