<template>
  <section
    id="rsvp"
    class="bg-texture-marmol py-20 bg-ivory-dark/30 select-none overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6">
      <!-- Relative container for overlapping elements -->
      <div
        class="max-w-[400px] mx-auto relative px-4 h-[680px] max-sm:h-[600px]"
      >
        <!-- Polaroid Photo (Bottom-Left) -->
        <motion.div
          class="absolute -left-[13px] bottom-[28px] w-[180px] h-[235px] z-0 max-sm:-left-0 max-sm:-bottom-[10px] max-sm:w-[140px] max-sm:h-[185px] will-change-[transform,opacity]"
          :initial="{ x: -50, rotate: 0 }"
          :while-in-view="{ x: 0, rotate: -6 }"
          :transition="{ duration: 1.0, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
        >
          <PolaroidPhoto
            :src="coverUrl"
            alt="Ervíng & María"
            class="w-full h-full transition-all duration-300 hover:scale-105"
          />
        </motion.div>

        <!-- Main Invitation Card -->
        <motion.div
          class="will-change-[transform,opacity]"
          :initial="{ y: 50, opacity: 0 }"
          :while-in-view="{ y: 0, opacity: 1 }"
          :transition="{ duration: 1.2, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
        >
          <PaperCard
            shape="standard"
            show-seal
            is-white
            containerClass="min-h-[455px]"
          >
            <div
              class="w-full text-center flex flex-col items-center justify-center"
            >
              <h3 class="title !mb-6 block">Confirmación<br />de asistencia</h3>

              <p
                class="font-inria text-slate-muted leading-relaxed mb-6 max-w-[240px]"
              >
                Estamos muy emocionados de poder celebrar con ustedes uno de los
                días más importantes de nuestras vidas.
              </p>

              <p
                class="font-inria text-slate-muted leading-relaxed mb-8 max-w-[240px]"
              >
                Por favor confirmar asistencia antes del
                <strong>01 de agosto de 2026</strong>.
              </p>

              <a :href="whatsappUrl" target="_blank" class="button">
                Confirmar Aquí
              </a>
            </div>
          </PaperCard>
        </motion.div>

        <!-- Clay Medallion (Bottom-Right) -->
        <motion.div
          class="absolute -right-8 bottom-[148px] w-[95px] h-[130px] z-20 max-sm:-right-4 max-sm:bottom-[100px] max-sm:w-[75px] max-sm:h-[105px] rounded-[50%/40%] bg-[#efede7]/95 border border-[#bfa880]/15 flex justify-center items-center select-none will-change-[transform,opacity]"
          :initial="{ x: 50, rotate: 0 }"
          :while-in-view="{ x: 0, rotate: 8 }"
          :transition="{ duration: 1.0, ease: 'easeOut' }"
          :viewport="{ once: false, amount: 0.15 }"
          style="
            box-shadow:
              0 4px 10px rgba(0, 0, 0, 0.15),
              inset 0 2px 4px rgba(255, 255, 255, 0.4),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          "
        >
          <span
            class="font-new-icon text-4xl max-sm:text-3xl text-slate-muted/20 tracking-wider font-light"
            style="
              text-shadow:
                1px 1px 1px rgba(255, 255, 255, 0.6),
                -1px -1px 1px rgba(0, 0, 0, 0.15);
            "
          >
            E&M
          </span>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import PaperCard from "../../../components/PaperCard.vue";
import PolaroidPhoto from "../../../components/PolaroidPhoto.vue";
import coverUrl from "../../../assets/images/portada-3.webp";

const phone = "51999999999"; // Reemplazar con el número real si es necesario
const message = encodeURIComponent(
  "¡Hola! Confirmo mi asistencia a la boda de Ervíng y María.",
);
const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
</script>
