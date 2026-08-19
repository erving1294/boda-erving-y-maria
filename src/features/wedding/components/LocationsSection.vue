<template>
  <section
    id="details"
    class="bg-texture-marmol py-20 select-none overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- CEREMONIA CARD (LEFT) -->
        <motion.div
          class="w-full max-w-md mx-auto will-change-[transform,opacity]"
          :initial="{ opacity: 0, x: -60, rotate: -3 }"
          :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
          :transition="{ duration: 1.2, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
        >
          <PaperCard
            shape="left"
            class="w-full"
            containerClass="max-md:w-[95%]"
          >
            <div>
              <!-- Title -->
              <h4 class="title">Ceremonia</h4>
              <h5 class="subtitle">Religiosa</h5>

              <img :src="ChurchGif" class="icon" />

              <!-- Building Name -->
              <p class="location-name">Parroquia Nuestra Señora de Luján</p>

              <!-- Address -->
              <p class="location-address">Av. Pergamino 203, Lima</p>

              <!-- Date Block (Classic Invitation Style) -->
              <div class="location-time-block">
                <span class="location-time-text">17:00 hs</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="location-actions">
              <a
                href="https://maps.google.com/?q=Av.+Pergamino+203,+Lima"
                target="_blank"
                class="button"
              >
                Ver Ubicación
              </a>
            </div>
          </PaperCard>
        </motion.div>

        <!-- CELEBRACION CARD (RIGHT) -->
        <motion.div
          class="w-full max-w-md mx-auto will-change-[transform,opacity]"
          :initial="{ opacity: 0, x: 60, rotate: 3 }"
          :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
          :transition="{ duration: 1.2, delay: 0.2, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
        >
          <PaperCard
            shape="right"
            class="w-full"
            containerClass="max-md:w-[95%]"
          >
            <div>
              <!-- Title -->
              <h4 class="title">Recepción</h4>
              <h5 class="subtitle">& Fiesta</h5>

              <img :src="WineGif" class="icon" />

              <!-- Building Name -->
              <p class="location-name">Salón de Fiestas Avril</p>

              <!-- Address -->
              <p class="location-address">Av. Los Reartes 12, Lima</p>

              <!-- Date Block (Classic Invitation Style) -->
              <div class="location-time-block">
                <span class="location-time-text">19:30 hs</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="location-actions">
              <a
                href="https://maps.google.com/?q=Av.+Los+Reartes+12,+Lima"
                target="_blank"
                class="button"
              >
                Ver Ubicación
              </a>
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
import WineGif from "../../../assets/images/gifs/wine.gif";
import ChurchGif from "../../../assets/images/gifs/church.gif";
</script>

<style scoped>
.location-icon {
  @apply w-28 h-28 mx-auto mb-6;
}

.location-name {
  @apply font-inria font-bold mb-1 px-4 leading-snug;
}

.location-address {
  @apply font-serif italic text-base text-slate-muted mb-6;
}

.location-time-block {
  @apply w-full max-w-[260px] mx-auto border-y border-secondary py-3 mb-8 flex justify-center items-center gap-3 text-xs font-serif;
}

.location-time-text {
  @apply font-bold text-secondary text-lg;
}

.location-actions {
  @apply flex flex-col items-center gap-3 w-full mt-auto;
}

.location-btn {
  @apply w-full max-w-[200px] text-center py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full font-sans font-bold text-xs uppercase transition-all duration-300 shadow-sm;
}
</style>
