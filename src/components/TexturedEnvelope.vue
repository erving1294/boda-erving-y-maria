<template>
  <div
    class="envelope-container w-full max-w-[600px] aspect-[3/2] relative mx-auto select-none"
    :style="containerStyle"
  >
    <!-- PERSPECTIVE CONTAINER FOR 3D FLAP -->
    <div class="relative w-full h-full perspective-2000">
      <!-- 1. BACK INSIDE OF THE ENVELOPE (Visible when flap is open and card slides up) -->
      <div
        class="absolute inset-0 rounded-lg overflow-hidden bg-[rgb(255,245,233)]"
      >
        <!-- Darker inside shadow to simulate pocket depth -->
        <div class="absolute inset-0 bg-black/[0.06] shadow-inner"></div>
      </div>

      <!-- 2. CARD INSERT (Slides up when envelope is opened) -->
      <div
        class="absolute left-[5%] right-[5%] bottom-[10px] md:bottom-[-20px] h-[90%] max-sm:h-[100%] max-sm:bottom-[-12px]"
        :class="isOpen ? 'card-opened' : 'card-closed'"
      >
        <slot>
          <!-- Default Card Content if none provided -->
          <div
            class="w-full h-full bg-white rounded-md shadow-md p-6 flex flex-col justify-center items-center text-center border border-gold/20"
          >
            <h3 class="font-cookie text-4xl text-primary mb-2">
              Mi Invitación
            </h3>
            <p class="font-serif text-sm text-slate-muted">
              Estás invitado a nuestra boda.
            </p>
          </div>
        </slot>
      </div>

      <!-- 3. POCKET FRONT (Bottom and Side Folds) -->
      <!-- Wrapped in a rounded container to make sure the envelope bottom corners are rounded and clean -->
      <div
        class="absolute inset-0 rounded-lg overflow-hidden pointer-events-none z-20"
      >
        <svg
          class="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Paper texture pattern -->
            <pattern
              id="pocket-paper-texture"
              patternUnits="userSpaceOnUse"
              width="300"
              height="200"
            >
              <image
                :href="paperTexture"
                width="300"
                height="200"
                preserveAspectRatio="none"
              />
            </pattern>

            <!-- Shadow for the pocket flaps -->
            <filter
              id="pocket-shadow"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feDropShadow
                dx="0"
                dy="-4"
                stdDeviation="5"
                flood-color="#4a3728"
                flood-opacity="0.08"
              />
            </filter>
          </defs>

          <!-- Base pocket clipping back to keep edges clean -->
          <g>
            <!-- Left side flap -->
            <path
              d="M 0,0 L 300,240 L 0,400 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />
            <path
              d="M 0,8 L 290,240 L 0,400 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />

            <!-- Right side flap -->
            <path
              d="M 600,0 L 300,240 L 600,400 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />
            <path
              d="M 600,8 L 300,250 L 600,400 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />

            <!-- Bottom flap (overlaps side flaps, matches real envelope) -->
            <path
              d="M 0,400 L 40,300 L 200,200 L 400,200 L 560,300 L 600,400 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />

            <path
              d="M 4,404 L 45,304 L 204,204 L 396,204 L 556,304 L 596,404 Z"
              fill="url(#pocket-paper-texture)"
              filter="url(#pocket-shadow)"
            />

            <!-- Outer boundary borders to give clean edge finish -->
            <path
              d="M 0,0 L 0,400 L 600,400 L 600,0"
              fill="none"
              stroke="rgba(74, 55, 40, 0.05)"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>

      <!-- 4. TOP 3D DOUBLE-SIDED FLAP (Rotates 180deg upwards) -->
      <div
        class="absolute top-0 left-0 w-full h-[70%] transform-origin-top pointer-events-none preserve-3d"
        :class="isOpen ? 'flap-opened z-5' : 'flap-closed z-40'"
        :style="flapStyle"
      >
        <!-- FRONT FACE (EXTERIOR) - Kraft Texture -->
        <div class="absolute inset-0 w-full h-full backface-hidden">
          <svg
            class="w-full h-full overflow-visible"
            viewBox="0 0 600 280"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="flap-paper-texture-front"
                patternUnits="userSpaceOnUse"
                width="300"
                height="200"
              >
                <image
                  :href="paperTexture"
                  width="300"
                  height="200"
                  preserveAspectRatio="none"
                />
              </pattern>
            </defs>

            <!-- Main Triangular Flap Body -->
            <path
              d="M 12,0 L 588,0 Q 600,0 600,10 L 320,280 Q 300,300 280,280 L 0,12 Q 0,0 12,0 Z"
              fill="url(#flap-paper-texture-front)"
              filter="url(#pocket-shadow)"
            />
            <path
              d="M 12,0 L 588,0 Q 600,0 600,10 L 320,280 Q 300,300 280,280 L 0,12 Q 0,0 12,0 Z"
              fill="url(#flap-paper-texture-front)"
              filter="url(#pocket-shadow)"
            />
            <path
              d="M 12,0 L 588,0 Q 600,0 600,10 L 320,280 Q 300,300 280,280 L 0,12 Q 0,0 12,0 Z"
              fill="url(#flap-paper-texture-front)"
              filter="url(#pocket-shadow)"
            />
            <!-- Triángulo interno más pequeño (inset de 8px) -->
            <path
              d="M 20,8 L 580,8 Q 592,8 592,18 L 310,278 Q 300,288 290,278 L 8,20 Q 8,8 20,8 Z"
              fill="url(#flap-paper-texture-front)"
            />
          </svg>
        </div>

        <!-- BACK FACE (INTERIOR) - Floral Pattern -->
        <div
          class="absolute inset-0 w-full h-full backface-hidden rotate-x-180"
        >
          <svg
            class="w-full h-full overflow-visible"
            viewBox="0 0 600 280"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="flap-paper-texture-back"
                patternUnits="userSpaceOnUse"
                width="300"
                height="200"
              >
                <image
                  :href="linerTexture"
                  width="300"
                  height="200"
                  preserveAspectRatio="none"
                />
              </pattern>
            </defs>

            <!-- Main Triangular Flap Body -->
            <path :d="flapPath" fill="url(#flap-paper-texture-back)" />

            <!-- Double Border Contour on the inside edge -->
            <!-- 1. Gold outer line base (thick) -->
            <path
              :d="flapBorderPath"
              fill="none"
              stroke="#dec5b1"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.85"
            />
            <!-- 2. Paper mask line (middle) -->
            <path
              :d="flapBorderPath"
              fill="none"
              stroke="#faf7f3"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- 3. Gold inner line (thin) -->
            <path
              :d="flapBorderPath"
              fill="none"
              stroke="#dec5b1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <!-- 5. INTERACTIVE WAX SEAL / STAMP -->
      <div
        v-if="showSeal"
        class="absolute left-1/2 -translate-x-1/2 top-[65.5%] -translate-y-1/2 z-50 cursor-pointer"
        :class="
          isOpen
            ? 'seal-opened pointer-events-none'
            : 'seal-closed hover:scale-105 active:scale-95'
        "
        @click="$emit('open')"
      >
        <slot name="seal">
          <div
            class="relative w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center"
          >
            <img
              :src="sealUrl"
              alt="Sello de Cera"
              class="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] animate-heartbeat"
            />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import defaultPaperTexture from "../assets/images/textura_carta.png";
import defaultLinerTexture from "../assets/images/sobre_dentro.png";
import defaultSealUrl from "../assets/images/Sello.png";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  showSeal: {
    type: Boolean,
    default: true,
  },
  paperTexture: {
    type: String,
    default: defaultPaperTexture,
  },
  linerTexture: {
    type: String,
    default: defaultLinerTexture,
  },
  sealUrl: {
    type: String,
    default: defaultSealUrl,
  },
  paperColor: {
    type: String,
    default: "#faf7f3",
  },
});

defineEmits(["open"]);

// The clean triangular path with rounded top-left and top-right corners (ViewBox: 0 0 600 280)
const flapPath = "M 12,0 L 588,0 Q 600,0 600,10 L 300,240 L 0,12 Q 0,0 12,0 Z";

// The border path that outlines the rounded top corners and diagonal edges (excluding the top fold crease line)
const flapBorderPath = "M 50,0 Q 0,0 0,12 L 300,240 L 600,12 Q 600,0 588,0";

const containerStyle = computed(() => ({
  backgroundColor: props.paperColor,
  boxShadow: `
    0 20px 40px -15px rgba(74, 99, 96, 0.18),
    inset 0 0 50px rgba(191, 168, 128, 0.03),
    0 25px 60px -20px rgba(0, 0, 0, 0.15)
  `,
  borderRadius: "12px",
}));

// const paperBgStyle = computed(() => ({
//   backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${props.linerTexture})`,
//   backgroundSize: "cover",
//   backgroundColor: props.paperColor,
// }));

// Flap 3D rotation depending on open/closed state
const flapStyle = computed(() => ({
  transformOrigin: "top center",
  transform: props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
}));
</script>

<script>
export default {
  name: "TexturedEnvelope",
};
</script>

<style scoped>
.perspective-2000 {
  perspective: 2000px;
}

.transform-origin-top {
  transform-origin: top center;
}

/* 3D Flap styles */
.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.rotate-x-180 {
  transform: rotateX(180deg);
}

.flap-closed {
  transform: rotateX(0deg);
  filter: drop-shadow(0 12px 10px rgba(74, 55, 40, 0.22));
  /* When closing, delay the flap closure until the card has slid down */
  transition:
    transform 800ms ease-in-out 400ms,
    filter 800ms ease-in-out 400ms;
}

.flap-opened {
  transform: rotateX(180deg);
  /* Adjust filter shadow direction when flap is flipped upwards */
  filter: drop-shadow(0 -10px 8px rgba(74, 55, 40, 0.1));
  /* When opening, start rotation after seal begins fading */
  transition:
    transform 800ms ease-in-out 200ms,
    filter 800ms ease-in-out 200ms;
}

/* Card slide animations */
.card-closed {
  z-index: 10;
  transform: translateY(0) scale(0.95);
  opacity: 0;
  pointer-events: none;
  /* Slide down immediately on close */
  transition:
    transform 800ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 600ms ease;
}

.card-opened {
  z-index: 15; /* Behind the pocket (z-index: 20) so it emerges from within, but in front of the inside back (z-index: 10) */
  transform: translateY(-50%) scale(1.02);
  opacity: 1;
  pointer-events: auto;
  /* Removed box-shadow to prevent rectangular grey shadow outlines */
  /* Delay card slide up until the flap is mostly open */
  transition:
    transform 1000ms cubic-bezier(0.34, 1.56, 0.64, 1) 600ms,
    opacity 800ms ease 600ms;
}

/* Wax seal animations */
.seal-closed {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  /* Delay seal reappearance when closing */
  transition:
    transform 400ms ease-out 1000ms,
    opacity 400ms ease-out 1000ms;
}

.seal-opened {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.6);
  filter: blur(4px);
  /* Fade and shrink immediately on click */
  transition:
    transform 400ms ease-in,
    opacity 400ms ease-in,
    filter 400ms ease-in;
}

/* Animation utilities */
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
