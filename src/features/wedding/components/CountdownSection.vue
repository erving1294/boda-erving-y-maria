<template>
  <section
    id="countdown"
    class="bg-texture-white py-16 bg-white text-center select-none flex flex-wrap max-lg:flex-col items-center lg:pr-[100px] lg:pl-[100px] overflow-hidden"
    style="
      border-radius: inherit;
      corner-shape: inherit;
      inset: 0px;
      border: 0px;
    "
  >
    <!-- Imagenes -->
    <motion.div
      class="basis-1/2 max-md:w-full flex justify-center mb-[64px] md:mb-8"
      :initial="{ scale: 0 }"
      :while-in-view="{ scale: 1 }"
      :transition="{ duration: 1.0, ease: 'easeOut' }"
      :viewport="{ once: false, amount: 0.35 }"
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
              :viewport="{ once: false, amount: 0.35 }"
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
          :viewport="{ once: false, amount: 0.35 }"
        />
        <motion.div
          class="absolute -right-[57px] -bottom-[66px] w-[200px] h-[200px] translate-x-0 rotate-[8deg] max-sm:w-[120px] max-sm:h-[120px] max-sm:-right-4 max-sm:-bottom-10"
          :initial="{ scale: 0 }"
          :while-in-view="{ scale: 1 }"
          :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.5 }"
          :viewport="{ once: false, amount: 0.35 }"
        >
          <div
            class="flex justify-center items-center w-full h-full"
            :style="`background-image: url(${Corazon}); background-size: cover; background-position: center;`"
          >
            <span class="font-cookie italic text-3xl">E & M</span>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <!-- Contador -->
    <div class="basis-1/2 max-md:w-full">
      <motion.div
        class="will-change-[transform,opacity]"
        :initial="{ opacity: 0, y: 90 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1.2, delay: 0.3, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.35 }"
      >
        <p
          class="w-[380px] max-sm:w-full max-sm:px-4 m-auto text-3xl mb-4 font-new-icon-serif"
        >
          <span class="title block !mb-4">Save The Date</span>
          <span class="block text-base font-inria max-sm:text-sm"
            >Porque tú has sido parte de nuestra historia, queremos que estés en
            nuestro mejor capitulo</span
          >
          <span
            class="block max-sm:text-md mt-4 text-secondary font-inria text-2xl"
            >{{
              isFinished ? "El gran momento ha llegado" : "Solo faltan:"
            }}</span
          >
        </p>
        <div class="w-full flex justify-center">
          <div class="w-[420px] max-sm:w-[280px]">
            <!-- Clock grid -->
            <div class="grid grid-cols-4 gap-4 w-full relative z-10">
              <div
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ days }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >Días</span
                >
              </div>

              <div
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ hours }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >Horas</span
                >
              </div>

              <div
                class="flex flex-col justify-center items-center border-r-[1px] border-solid border-slate-muted"
              >
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ minutes }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >Mins</span
                >
              </div>

              <div class="flex flex-col justify-center items-center">
                <span
                  class="font-inria text-3xl md:text-4xl text-sage font-bold leading-none"
                  >{{ seconds }}</span
                >
                <span
                  class="text-[10px] md:text-xs uppercase tracking-wide text-slate-muted mt-2"
                  >Segs</span
                >
              </div>
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

const { days, hours, minutes, seconds, isFinished } = useCountdown(
  "November 21, 2026 17:00:00",
);
</script>

<style scoped>
/* Heartbeat class is defined in tailwind.config.js as animate-heartbeat */
</style>
