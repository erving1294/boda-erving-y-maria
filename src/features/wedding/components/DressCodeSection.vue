<template>
  <section
    id="dresscode"
    class="bg-texture-marmol py-20 bg-ivory-dark/30 select-none overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6">
      <!-- Responsive Grid for side-by-side cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full max-w-5xl mx-auto items-stretch"
      >
        <!-- CARD 1: DRESS CODE (LEFT) -->
        <div
          ref="dressRef"
          class="w-full max-w-md mx-auto transition-all duration-[1200ms] ease-out will-change-[transform,opacity]"
          :class="
            dressIntersecting
              ? 'opacity-100 translate-x-0 rotate-0'
              : 'opacity-0 -translate-x-[60px] -rotate-3'
          "
        >
          <PaperCard shape="left" class="w-full max-w-md mx-auto">
            <div
              class="w-full text-center flex flex-col items-center justify-center py-4 my-auto"
            >
              <!-- GIF Icon -->
              <div class="flex">
                <img :src="SuitGif" class="icon" />
                <img :src="HauteCoutureGif" class="icon" />
              </div>
              <div class="py-4">
                <!-- Title -->
                <h4 class="title mb-2">Código de Vestimenta</h4>

                <!-- Subtitle -->
                <h5 class="font-cookie text-secondary text-4xl">Elegante</h5>
              </div>

              <!-- Warning text -->
              <p
                class="font-inria text-slate-muted mb-6 max-w-xs leading-relaxed"
              >
                Evitar colores: blanco, crema, beige, nude
              </p>

              <!-- Color Swatches -->
              <div class="flex justify-center items-center gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm transition-all duration-[500ms] cubic-bezier(0.34, 1.56, 0.64, 1) will-change-[transform,opacity] delay-[800ms]"
                  :class="
                    dressIntersecting
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  "
                  title="Blanco"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-[#f3d5b5] border border-gold/20 shadow-sm transition-all duration-[500ms] cubic-bezier(0.34, 1.56, 0.64, 1) will-change-[transform,opacity] delay-[1000ms]"
                  :class="
                    dressIntersecting
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  "
                  title="Crema"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-[#e8dec9] border border-gold/20 shadow-sm transition-all duration-[500ms] cubic-bezier(0.34, 1.56, 0.64, 1) will-change-[transform,opacity] delay-[1200ms]"
                  :class="
                    dressIntersecting
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  "
                  title="Beige"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-[#d6ab83] border border-gold/20 shadow-sm transition-all duration-[500ms] cubic-bezier(0.34, 1.56, 0.64, 1) will-change-[transform,opacity] delay-[1400ms]"
                  :class="
                    dressIntersecting
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  "
                  title="Nude"
                ></div>
              </div>
            </div>
          </PaperCard>
        </div>

        <!-- CARD 2: SIN NIÑOS (RIGHT) -->
        <div
          ref="kidsRef"
          class="w-full max-w-md mx-auto transition-all duration-[1200ms] delay-[200ms] ease-out will-change-[transform,opacity]"
          :class="
            kidsIntersecting
              ? 'opacity-100 translate-x-0 rotate-0'
              : 'opacity-0 translate-x-[60px] rotate-3'
          "
        >
          <PaperCard shape="right" class="w-full max-w-md mx-auto !h-full">
            <div
              class="w-full text-center flex flex-col items-center justify-center py-4 my-auto"
            >
              <!-- Heart Icon SVG in gold-hover color -->
              <div class="mb-6 text-gold-hover shrink-0">
                <svg class="w-12 h-12 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>

              <!-- Title -->
              <h4 class="title py-4">Sin Niños</h4>

              <!-- Description text -->
              <p
                class="font-inria text-slate-muted max-w-xs mx-auto leading-relaxed"
              >
                Aunque amamos a los más pequeños este evento será solo para
                adultos.
              </p>
            </div>
          </PaperCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PaperCard from "../../../components/PaperCard.vue";
import ChampagneGif from "../../../assets/images/gifs/champagne.gif";
import SuitGif from "../../../assets/images/gifs/suit.gif";
import HauteCoutureGif from "../../../assets/images/gifs/haute-couture.gif";

const dressRef = ref(null);
const kidsRef = ref(null);
const dressIntersecting = ref(false);
const kidsIntersecting = ref(false);
let observer = null;

onMounted(() => {
  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === dressRef.value) {
            dressIntersecting.value = entry.isIntersecting;
          } else if (entry.target === kidsRef.value) {
            kidsIntersecting.value = entry.isIntersecting;
          }
        });
      },
      { threshold: 0.15 },
    );
    if (dressRef.value) observer.observe(dressRef.value);
    if (kidsRef.value) observer.observe(kidsRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
