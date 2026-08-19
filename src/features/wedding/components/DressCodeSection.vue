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
        <motion.div
          class="w-full max-w-md mx-auto will-change-[transform,opacity]"
          :initial="{ opacity: 0, x: -60, rotate: -3 }"
          :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
          :transition="{ duration: 1.2, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
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
                <motion.div
                  class="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 0.8, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.15 }"
                  title="Blanco"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[#f3d5b5] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.0, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.15 }"
                  title="Crema"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[#e8dec9] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.2, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.15 }"
                  title="Beige"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[#d6ab83] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.4, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.15 }"
                  title="Nude"
                ></motion.div>
              </div>
            </div>
          </PaperCard>
        </motion.div>

        <!-- CARD 2: SIN NIÑOS (RIGHT) -->
        <motion.div
          class="w-full max-w-md mx-auto will-change-[transform,opacity]"
          :initial="{ opacity: 0, x: 60, rotate: 3 }"
          :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
          :transition="{ duration: 1.2, delay: 0.2, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
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
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import PaperCard from "../../../components/PaperCard.vue";
import SuitGif from "../../../assets/images/gifs/suit.gif";
import HauteCoutureGif from "../../../assets/images/gifs/haute-couture.gif";
</script>
