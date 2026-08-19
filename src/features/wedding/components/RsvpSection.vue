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
        <div
          ref="polaroidRef"
          class="absolute -left-[13px] bottom-[28px] w-[180px] h-[235px] z-0 max-sm:-left-0 max-sm:-bottom-[10px] max-sm:w-[140px] max-sm:h-[185px] transition-all duration-[1000ms] ease-out"
          :class="
            polaroidIntersecting
              ? 'translate-x-0 rotate-[-6deg]'
              : '-translate-x-[50px] rotate-0'
          "
        >
          <PolaroidPhoto
            :src="coverUrl"
            alt="Ervíng & María"
            class="w-full h-full transition-all duration-300 hover:scale-105"
          />
        </div>

        <!-- Main Invitation Card -->
        <div
          ref="cardRef"
          class="transition-all duration-[1200ms] ease-out"
          :class="
            cardIntersecting
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[50px]  opacity-0'
          "
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
        </div>

        <!-- Clay Medallion (Bottom-Right) -->
        <div
          ref="medallionRef"
          class="absolute -right-8 bottom-[148px] w-[95px] h-[130px] z-20 max-sm:-right-4 max-sm:bottom-[100px] max-sm:w-[75px] max-sm:h-[105px] rounded-[50%/40%] bg-[#efede7]/95 border border-[#bfa880]/15 flex justify-center items-center select-none transition-all duration-[1000ms] ease-out"
          :class="
            medallionIntersecting
              ? 'translate-x-0 rotate-[8deg]'
              : 'translate-x-[50px] rotate-0'
          "
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PaperCard from "../../../components/PaperCard.vue";
import PolaroidPhoto from "../../../components/PolaroidPhoto.vue";
import sealUrl from "../../../assets/images/Sello.png";
import coverUrl from "../../../assets/images/portada-3.webp";

const phone = "51999999999"; // Reemplazar con el número real si es necesario
const message = encodeURIComponent(
  "¡Hola! Confirmo mi asistencia a la boda de Ervíng y María.",
);
const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

const polaroidRef = ref(null);
const cardRef = ref(null);
const medallionRef = ref(null);

const polaroidIntersecting = ref(false);
const cardIntersecting = ref(false);
const medallionIntersecting = ref(false);

let polaroidObserver = null;
let cardObserver = null;
let medallionObserver = null;

onMounted(() => {
  if (typeof window !== "undefined") {
    polaroidObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          polaroidIntersecting.value = entry.isIntersecting;
        });
      },
      { threshold: 0.5 },
    );
    if (polaroidRef.value) polaroidObserver.observe(polaroidRef.value);

    cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          cardIntersecting.value = entry.isIntersecting;
        });
      },
      { threshold: 0.5 },
    );
    if (cardRef.value) cardObserver.observe(cardRef.value);

    medallionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          medallionIntersecting.value = entry.isIntersecting;
        });
      },
      { threshold: 0.15 },
    );
    if (medallionRef.value) medallionObserver.observe(medallionRef.value);
  }
});

onUnmounted(() => {
  if (polaroidObserver) polaroidObserver.disconnect();
  if (cardObserver) cardObserver.disconnect();
  if (medallionObserver) medallionObserver.disconnect();
});
</script>
