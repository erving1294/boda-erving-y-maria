<template>
  <section
    id="countdown"
    class="bg-texture-flores py-16 bg-white text-center select-none flex flex-wrap max-lg:flex-col items-center lg:pr-[100px] lg:pl-[100px]"
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
          src="https://framerusercontent.com/images/mYv7ruPie11r2G7Cn5kLgcJ0rL4.jpg?width=4000&amp;height=6000"
          alt="Novios mano a mano 1"
          class="absolute left-0 top-0 w-[216px] h-[283px] rotate-[13deg] z-[1] max-sm:!left-[43px]"
        />

        <!-- Foto 2 (Rotada a la izquierda) -->
        <PolaroidPhoto
          src="https://framerusercontent.com/images/mYv7ruPie11r2G7Cn5kLgcJ0rL4.jpg?width=4000&amp;height=6000"
          alt="Novios mano a mano 2"
          class="absolute bottom-[72px] right-[35px] w-[216px] h-[283px] rotate-[-3deg] z-[1] max-sm:!bottom-[60px] max-sm:!right-[35px]"
        />
      </div>
    </div>

    <!-- Contador -->
    <div class="basis-1/2 max-md:w-full">
      <p
        class="uppercase text-3xl text-sage mb-6 font-new-icon-serif font-bold"
      >
        <span class="block">¡Prepárate!</span>
        {{ isFinished ? "El gran momento ha llegado" : "Nos vemos dentro de" }}
      </p>
      <div class="w-full flex justify-center">
        <div class="w-[420px] max-sm:w-[280px]">
          <PaperCard shape="right" contentClass="max-sm:!p-4">
            <!-- Arch/ring background lines -->
            <div
              class="absolute -top-12 -left-12 w-32 h-32 rounded-full border border-gold/10 pointer-events-none"
            ></div>
            <div
              class="absolute -bottom-12 -right-12 w-32 h-32 rounded-full border border-gold/10 pointer-events-none"
            ></div>

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

            <!-- Beating Heart SVG in center of countdown section -->
            <div class="mt-8 flex justify-center items-center">
              <img :src="WallClockGif" width="80" />
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

const { days, hours, minutes, seconds, isFinished } = useCountdown(
  "November 21, 2026 17:00:00",
);
</script>

<style scoped>
/* Heartbeat class is defined in tailwind.config.js as animate-heartbeat */
</style>
