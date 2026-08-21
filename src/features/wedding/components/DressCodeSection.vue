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
          :viewport="{ once: false, amount: 0.55 }"
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
                <h4 class="title mb-2">{{ texts.dressCode.dressCodeTitle }}</h4>

                <!-- Subtitle -->
                <h5 class="font-cookie text-secondary text-4xl">{{ texts.dressCode.dressCodeSubtitle }}</h5>
              </div>
              <ul class="text-center mb-4">
                <li>
                  <p class="font-inria">
                    <span class="font-inria text-slate-dark">{{ texts.dressCode.menTitle }}</span>
                    {{ texts.dressCode.menDescription }}
                  </p>
                </li>
                <li>
                  <p class="font-inria">
                    <span class="font-inria text-slate-dark">{{ texts.dressCode.womenTitle }}</span>
                    {{ texts.dressCode.womenDescription }}
                  </p>
                </li>
              </ul>

              <!-- Warning text -->
              <p class="font-inria text-primary italic font-bold mb-6 max-w-xs">
                {{ texts.dressCode.avoidColorsTitle }}
              </p>

              <!-- Color Swatches -->
              <div class="flex justify-center items-center gap-4">
                <motion.div
                   class="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 0.8, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.55 }"
                  :title="texts.dressCode.avoidColors.white"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[rgb(241 241 241)] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.0, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.55 }"
                  :title="texts.dressCode.avoidColors.cream"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[#e8dec9] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.2, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.55 }"
                  :title="texts.dressCode.avoidColors.beige"
                ></motion.div>
                <motion.div
                  class="w-10 h-10 rounded-full bg-[#B86A78] border border-gold/20 shadow-sm will-change-[transform,opacity]"
                  :initial="{ opacity: 0, scale: 0 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :transition="{ duration: 0.5, delay: 1.4, ease: 'easeOut' }"
                  :viewport="{ once: false, amount: 0.55 }"
                  :title="texts.dressCode.avoidColors.nude"
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
          :viewport="{ once: false, amount: 0.55 }"
        >
          <PaperCard shape="right" class="w-full max-w-md mx-auto !h-full">
            <div
              class="w-full text-center flex flex-col items-center justify-center py-4 my-auto"
            >
              <!-- Heart Icon SVG in gold-hover color -->
              <img :src="DancingGif" class="icon" />

              <!-- Title -->
              <h4 class="title py-4">{{ texts.dressCode.adultsOnlyTitle }}</h4>

              <!-- Description text -->
              <p
                class="font-inria text-slate-muted max-w-xs mx-auto leading-relaxed"
              >
                {{ texts.dressCode.adultsOnlyDescription }}
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
import DancingGif from "../../../assets/images/gifs/dancing.gif";
import HauteCoutureGif from "../../../assets/images/gifs/haute-couture.gif";
import texts from "../data/texts.json";
</script>
