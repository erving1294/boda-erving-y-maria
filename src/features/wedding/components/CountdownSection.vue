<template>
  <section
    id="countdown"
    class="bg-texture-white py-16 max-sm:py-[84px] bg-white text-center select-none flex flex-wrap max-lg:flex-col items-center lg:pr-[100px] lg:pl-[100px] overflow-hidden rounded-[inherit] [corner-shape:inherit] inset-0 border-0"
  >
    <!-- Imagenes -->
    <motion.div
      class="basis-1/2 max-md:w-full flex justify-center mb-[64px] md:mb-8"
      :initial="{ opacity: 0, x: -60, rotate: -3 }"
      :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
      :transition="{ duration: 1.2, ease: 'easeOut' }"
      :viewport="{ once: false, amount: 0.55 }"
    >
      <div
        class="w-[500px] h-[500px] bg-cover relative max-sm:w-[340px] max-sm:h-[340px]"
        :style="`background-image: url(${MarcoFoto})`"
      >
        <span
          class="absolute top-[51px] left-[64px] font-cookie italic font-bold text-3xl tracking-widest max-sm:top-9 max-sm:left-12"
        >
          21.11.2026
        </span>
        <div class="absolute left-[125px] top-[102px] max-sm:left-[90px]">
          <div class="relative">
            <div
              class="w-[75px] h-5 bg-[#F2EBE1] absolute -top-5 -right-6 z-10 rotate-[15deg]"
            >
              <img
                :src="Sombra"
                class="absolute -bottom-[1px] h-[1px] w-[62px] opacity-[0.3]"
              />
            </div>

            <motion.div
              class="z-[1] max-sm:!left-[43px] will-change-[transform,opacity]"
              :initial="{ opacity: 0, rotate: 0 }"
              :while-in-view="{ opacity: 1, rotate: -5 }"
              :transition="{ duration: 1.0, ease: 'easeOut' }"
              :viewport="{ once: false, amount: 0.55 }"
            >
              <PolaroidPhoto
                :src="PolaroidTwo"
                :hasShadow="false"
                alt="Novios mano a mano 1"
                class="w-[257px] h-[257px] max-sm:w-[157px] max-sm:h-[157px]"
              />
            </motion.div>

            <div
              class="w-[75px] h-5 bg-[#F0E8DE] absolute -bottom-[22px] -left-6 z-10 rotate-[15deg]"
            >
              <img
                :src="Sombra"
                class="absolute left-[22px] top-[1px] h-[1px] w-[55px] opacity-[0.3]"
              />
            </div>
          </div>
        </div>

        <motion.img
          class="absolute -left-[66px] -bottom-[51px] w-[200px] max-sm:w-[120px] max-sm:-left-9"
          :src="FlorBoda"
          :initial="{ scale: 0 }"
          :while-in-view="{ scale: 1 }"
          :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.5 }"
          :viewport="{ once: false, amount: 0.55 }"
        />
        <motion.div
          class="absolute -right-[57px] -bottom-[66px] w-[200px] h-[200px] translate-x-0 rotate-[8deg] max-sm:w-[120px] max-sm:h-[120px] max-sm:-right-4 max-sm:-bottom-10"
          :initial="{ scale: 0 }"
          :while-in-view="{ scale: 1 }"
          :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.5 }"
          :viewport="{ once: false, amount: 0.55 }"
        >
          <div
            class="flex justify-center items-center w-full h-full bg-cover bg-center"
            :style="`background-image: url(${Corazon})`"
          >
            <span class="font-cookie italic text-3xl">{{ texts.countdown.heartText }}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <!-- Contador -->
    <div class="basis-1/2 max-md:w-full">
      <motion.div
        class="will-change-[transform,opacity]"
        :initial="{ opacity: 0, x: 60, rotate: -3 }"
        :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
        :transition="{ duration: 1.2, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.55 }"
      >
        <p
          class="w-[380px] max-sm:w-full max-sm:px-4 m-auto text-3xl mb-4 font-new-icon-serif"
        >
          <span class="title block !mb-4">{{ texts.countdown.title }}</span>
          <span class="block text-base font-inria"
            >{{ texts.countdown.description }}</span
          >
          <span
            class="block max-sm:text-md mt-4 text-secondary font-inria text-2xl"
            >{{
              isFinished ? texts.countdown.finishedLabel : texts.countdown.waitingLabel
            }}</span
          >
        </p>
        <div class="w-full flex justify-center">
          <div class="w-[420px] max-sm:w-[280px]">
            <!-- Clock grid -->
            <div class="grid grid-cols-4 w-full relative z-10">
              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.8, delay: 0.4, ease: 'easeOut' }"
                :viewport="{ once: false, amount: 0.55 }"
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ days }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >{{ texts.countdown.days }}</span
                >
              </motion.div>

              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.8, delay: 0.8, ease: 'easeOut' }"
                :viewport="{ once: false, amount: 0.55 }"
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ hours }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >{{ texts.countdown.hours }}</span
                >
              </motion.div>

              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.8, delay: 1.2, ease: 'easeOut' }"
                :viewport="{ once: false, amount: 0.55 }"
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ minutes }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >{{ texts.countdown.minutes }}</span
                >
              </motion.div>

              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.8, delay: 1.6, ease: 'easeOut' }"
                :viewport="{ once: false, amount: 0.55 }"
                class="flex flex-col justify-center items-center border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ seconds }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >{{ texts.countdown.seconds }}</span
                >
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import { useCountdown } from "../../../core/composables/useCountdown";
import PolaroidPhoto from "../../../components/PolaroidPhoto.vue";
import PolaroidTwo from "../../../assets/images/pedida.webp";
import MarcoFoto from "../../../assets/images/marco_foto.png";
import FlorBoda from "../../../assets/images/flor_boda.jpg";
import Corazon from "../../../assets/images/corazon_blanco.png";
import Sombra from "../../../assets/images/sombra.png";
import texts from "../data/texts.json";

const { days, hours, minutes, seconds, isFinished } = useCountdown(
  "November 21, 2026 17:00:00",
);
</script>

<style scoped>
/* Heartbeat class is defined in tailwind.config.js as animate-heartbeat */
</style>
