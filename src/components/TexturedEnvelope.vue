<template>
  <div
    class="envelope-container w-full max-w-[600px] aspect-[3/2] relative mx-auto select-none"
    :style="containerStyle"
  >
    <!-- PERSPECTIVE CONTAINER FOR 3D FLAP -->
    <div class="relative w-full h-full perspective-2000">
      
      <!-- 1. BACK INSIDE OF THE ENVELOPE (Visible when flap is open and card slides up) -->
      <div 
        class="absolute inset-0 rounded-lg overflow-hidden" 
        :style="paperBgStyle"
      >
        <!-- Darker inside shadow to simulate pocket depth -->
        <div class="absolute inset-0 bg-black/[0.06] shadow-inner"></div>
      </div>

      <!-- 2. CARD INSERT (Slides up when envelope is opened) -->
      <div
        class="absolute left-[5%] right-[5%] bottom-[5%] h-[85%] transition-all duration-[1200ms] ease-in-out"
        :class="isOpen ? 'card-opened z-30' : 'card-closed z-10'"
      >
        <slot>
          <!-- Default Card Content if none provided -->
          <div class="w-full h-full bg-white rounded-md shadow-md p-6 flex flex-col justify-center items-center text-center border border-gold/20">
            <h3 class="font-cookie text-4xl text-primary mb-2">Mi Invitación</h3>
            <p class="font-serif text-sm text-slate-muted">Estás invitado a nuestra boda.</p>
          </div>
        </slot>
      </div>

      <!-- 3. POCKET FRONT (Bottom and Side Folds) -->
      <!-- Drawn with SVG to match paper texture and create realistic overlapping paper folds with shadows -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
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
            <image :href="paperTexture" width="300" height="200" preserveAspectRatio="none" />
          </pattern>
          
          <!-- Shadow for the pocket flaps -->
          <filter id="pocket-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="-4" stdDeviation="5" flood-color="#4a3728" flood-opacity="0.08" />
          </filter>
        </defs>

        <!-- Base pocket clipping back to keep edges clean -->
        <g>
          <!-- Left side flap -->
          <path
            d="M 0,140 L 300,240 L 0,390 Z"
            fill="url(#pocket-paper-texture)"
          />
          <!-- Right side flap -->
          <path
            d="M 600,140 L 300,240 L 600,390 Z"
            fill="url(#pocket-paper-texture)"
          />
          
          <!-- Bottom flap (overlaps side flaps, matches real envelope) -->
          <path
            d="M 0,400 L 300,230 L 600,400 Z"
            fill="url(#pocket-paper-texture)"
            filter="url(#pocket-shadow)"
          />

          <!-- Bevel/Crease Lines for Realistic overlapping fold effect -->
          <!-- Left diagonal crease shadow & highlight -->
          <line x1="0" y1="400" x2="300" y2="230" stroke="rgba(74, 55, 40, 0.12)" stroke-width="2.5" />
          <line x1="0" y1="399" x2="300" y2="229" stroke="rgba(255, 255, 255, 0.75)" stroke-width="1.2" />

          <!-- Right diagonal crease shadow & highlight -->
          <line x1="600" y1="400" x2="300" y2="230" stroke="rgba(74, 55, 40, 0.12)" stroke-width="2.5" />
          <line x1="600" y1="399" x2="300" y2="229" stroke="rgba(255, 255, 255, 0.75)" stroke-width="1.2" />

          <!-- Outer boundary borders to give clean edge finish -->
          <path
            d="M 0,140 L 0,400 L 600,400 L 600,140"
            fill="none"
            stroke="rgba(74, 55, 40, 0.05)"
            stroke-width="1"
          />
        </g>
      </svg>

      <!-- 4. TOP SCALLOPED FLAP (Rotates 180deg upwards) -->
      <div
        class="absolute top-0 left-0 w-full h-[70%] transform-origin-top transition-transform duration-[1200ms] ease-in-out pointer-events-none"
        :class="isOpen ? 'flap-opened z-5' : 'flap-closed z-40'"
        :style="flapStyle"
      >
        <!-- Flap SVG containing Scalloped Path & Double Border -->
        <svg
          class="w-full h-full overflow-visible drop-shadow-[0_10px_8px_rgba(74,55,40,0.15)]"
          viewBox="0 0 600 280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Flap paper texture -->
            <pattern
              id="flap-paper-texture"
              patternUnits="userSpaceOnUse"
              width="300"
              height="200"
            >
              <image :href="paperTexture" width="300" height="200" preserveAspectRatio="none" />
            </pattern>
          </defs>

          <!-- Main Scalloped Flap Body -->
          <path
            :d="flapPath"
            fill="url(#flap-paper-texture)"
          />

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

      <!-- 5. INTERACTIVE WAX SEAL / STAMP -->
      <div
        v-if="showSeal"
        class="absolute left-1/2 -translate-x-1/2 top-[57.5%] -translate-y-1/2 z-50 cursor-pointer transition-all duration-[800ms] ease-in-out"
        :class="isOpen ? 'seal-opened pointer-events-none' : 'seal-closed hover:scale-105 active:scale-95'"
        @click="$emit('open')"
      >
        <slot name="seal">
          <div class="relative w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center">
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
import defaultPaperTexture from "../assets/images/papel_boda.jpg";
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

// The precise symmetric scalloped path for the top flap (ViewBox: 0 0 600 280)
const flapPath = `M 0,0 
                  L 600,0 
                  L 600,60 
                  C 585,85 570,110 550,110 
                  C 530,110 510,95 495,90 
                  C 480,85 460,135 435,175 
                  C 415,205 395,180 380,155 
                  C 360,130 330,210 300,260 
                  C 270,210 240,130 220,155 
                  C 205,180 185,205 165,175 
                  C 140,135 120,85 105,90 
                  C 90,95 70,110 50,110 
                  C 30,110 15,85 0,60 
                  Z`;

const containerStyle = computed(() => ({
  backgroundColor: props.paperColor,
  boxShadow: `
    0 20px 40px -15px rgba(74, 99, 96, 0.18),
    inset 0 0 50px rgba(191, 168, 128, 0.03),
    0 25px 60px -20px rgba(0, 0, 0, 0.15)
  `,
  borderRadius: "12px",
}));

const paperBgStyle = computed(() => ({
  backgroundImage: `linear-gradient(to bottom, rgba(250, 247, 243, 0.2), rgba(250, 247, 243, 0.2)), url(${props.paperTexture})`,
  backgroundSize: "cover",
  backgroundColor: props.paperColor,
}));

// Flap 3D rotation depending on open/closed state
const flapStyle = computed(() => ({
  transformOrigin: "top center",
  transform: props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
}));
</script>

<script>
// For support of standard non-setup script options if needed
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
.flap-closed {
  transform: rotateX(0deg);
  filter: drop-shadow(0 12px 10px rgba(74, 55, 40, 0.22));
}

.flap-opened {
  transform: rotateX(180deg);
  /* When rotated 180deg, we adjust filter to show shadow on top */
  filter: drop-shadow(0 -10px 8px rgba(74, 55, 40, 0.1));
}

/* Card slide animations */
.card-closed {
  transform: translateY(0) scale(0.95);
  opacity: 0;
  pointer-events: none;
}

.card-opened {
  transform: translateY(-50%) scale(1.02);
  opacity: 1;
  pointer-events: auto;
  box-shadow: 
    0 -15px 30px -10px rgba(0, 0, 0, 0.15),
    0 15px 25px -10px rgba(74, 99, 96, 0.1);
}

/* Wax seal animations */
.seal-closed {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.seal-opened {
  opacity: 0;
  transform: translate(-50%, -100%) scale(0.7);
}

/* Animation utilities */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.animate-heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
}
</style>
