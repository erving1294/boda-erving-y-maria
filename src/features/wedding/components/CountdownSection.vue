<template>
  <section
    id="countdown"
    class="bg-texture-white py-16 bg-white text-center select-none flex flex-wrap max-lg:flex-col items-center lg:pr-[100px] lg:pl-[100px]"
    data-aos="fade-up"
    style="
      border-radius: inherit;
      corner-shape: inherit;
      inset: 0px;
      border: 0px;
    "
  >
    <!-- Imagenes -->
    <div class="basis-1/2 max-md:w-full">
      <div class="h-[550px] w-[360px] relative m-auto">
        <!-- Foto 1 (Rotada a la derecha) -->
        <PolaroidPhoto
          :src="PolaroidTwo"
          alt="Novios mano a mano 1"
          class="absolute left-0 top-0 w-[216px] h-[283px] rotate-[13deg] z-[1] max-sm:!left-[43px]"
        />

        <!-- Foto 2 (Rotada a la izquierda) -->
        <PolaroidPhoto
          :src="PolaroidOne"
          alt="Novios mano a mano 2"
          class="absolute bottom-[72px] right-[35px] w-[216px] h-[283px] rotate-[-3deg] z-[1] max-sm:!bottom-[60px] max-sm:!right-[35px]"
        />
      </div>
    </div>

    <!-- Contador -->
    <div class="basis-1/2 max-md:w-full">
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
          <PaperCard shape="right" contentClass="max-sm:!p-4">
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
          </PaperCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCountdown } from "../../../core/composables/useCountdown";
import PaperCard from "../../../components/PaperCard.vue";
import PolaroidPhoto from "../../../components/PolaroidPhoto.vue";
import WallClockGif from "../../../assets/images/gifs/wall-clock.gif";
import PolaroidOne from "../../../assets/images/badbunny.jpg";
import PolaroidTwo from "../../../assets/images/pedida.webp";

const { days, hours, minutes, seconds, isFinished } = useCountdown(
  "November 21, 2026 17:00:00",
);
</script>

<style scoped>
/* Heartbeat class is defined in tailwind.config.js as animate-heartbeat */
</style>
