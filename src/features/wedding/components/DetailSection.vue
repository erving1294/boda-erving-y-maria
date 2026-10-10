<script setup>
import { motion } from "motion-v";
import { images } from "../data/images";
</script>

<template>
  <section id="detailSection" class="w-full h-[728px] relative overflow-hidden">
    <!-- Marble Texture Background Layer -->
    <div
      class="bg-fondo-blanco absolute inset-0 rounded-[inherit] border-0"
    ></div>

    <!-- Outer Card Wrapper -->
    <div
      class="absolute top-[79px] left-[calc(50%-223px)] w-[446px] h-[494px] overflow-visible max-sm:!top-[75px] max-sm:!w-[340px]"
    >
      <!-- Envelope Image -->
      <img
        :src="images.detail.invitationCard"
        alt="Invitation Card"
        class="w-[340px] h-full object-cover max-sm:!h-[480px] transition-all duration-[1500ms] ease-out shadow-2xl rotate-[180deg]"
      />

      <!-- Inner Invitation Paper Card (Overlapping) -->
      <motion.article
        class="absolute bottom-[-110px] right-[-24px] flex-none w-[460px] h-[550px] overflow-visible filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.25)] max-sm:!w-[340px] max-sm:!h-[520px] max-sm:!bottom-[-100px] max-sm:!right-[-52px]"
        :initial="{ opacity: 0, x: 120 }"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 1.5, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.55 }"
      >
        <!-- Paper Texture Background -->
        <div class="absolute inset-0 rounded-[inherit]">
          <img
            :src="images.detail.paperWedding"
            alt="Paper Wedding"
            class="block w-full h-full rounded-[inherit] object-center object-contain"
          />
        </div>

        <!-- Wax Seal (Centered Top) -->
        <div
          class="absolute top-[-20px] left-[calc(50%-35px)] w-[70px] h-[74px] overflow-visible"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              decoding="auto"
              loading="lazy"
              width="100"
              height="100"
              alt="Sello de cera"
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="images.detail.seal"
            />
          </div>
        </div>
      </motion.article>
    </div>
  </section>
</template>
