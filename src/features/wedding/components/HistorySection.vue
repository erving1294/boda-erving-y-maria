<template>
  <section
    ref="sectionRef"
    class="bg-texture-white flex flex-col flex-none justify-center items-center gap-[10px] w-full h-min pt-10 pb-[60px] relative overflow-hidden"
  >
    <!-- Swiper Coverflow Slider -->
    <motion.div
      class="w-full flex flex-col gap-6 justify-center items-center py-4"
      :initial="{ opacity: 0, x: 40 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 1.0, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.35 }"
    >
      <h2 class="title">Nuestros Momentos</h2>

      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :loop="true"
        :loopedSlides="5"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :navigation="true"
        :modules="[EffectCoverflow, Pagination, Navigation, Autoplay]"
        class="w-full md:w-[768px] !pb-12"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] md:w-[400px] md:h-[500px] flex justify-center items-center transition-all duration-300"
        >
          <div
            class="relative w-full h-full rounded-2xl overflow-hidden drop-shadow-xl select-none"
          >
            <img
              class="w-full h-full object-cover object-center pointer-events-none"
              :src="slide.img"
              :alt="slide.alt"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>

    <!-- Description Text -->
    <motion.div
      class="max-sm:px-4 will-change-[transform,opacity]"
      :initial="{ opacity: 0, x: -40 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 1.0, delay: 0.4, ease: 'easeOut' }"
      :viewport="{ once: true, amount: 0.3 }"
    >
      <p
        class="text-center max-w-[400px] m-auto font-inria text-lg leading-relaxed text-slate-muted"
      >
        Todo comenzó en enero del 2017, sin imaginar que ese sería el primer
        capítulo de nuestra historia. Hoy, con el corazón lleno de gratitud,
        estamos listos para escribir nuestro…
      </p>
      <p
        class="font-cookie text-center italic text-[26px] mt-2 max-w-[400px] m-auto min-h-[39px]"
      >
        {{ displayedCursive }}
      </p>
    </motion.div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { motion, useInView } from "motion-v";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import badbunny from "../../../assets/images/badbunny.jpg";
import cusco from "../../../assets/images/cusco.webp";
import pedida from "../../../assets/images/pedida.webp";
import fotosPases from "../../../assets/images/fotos_pases.jpeg";
import portada3 from "../../../assets/images/portada-3.webp";

const slides = [
  { img: badbunny, alt: "Bad Bunny" },
  { img: cusco, alt: "Cusco" },
  { img: pedida, alt: "Pedida" },
  { img: fotosPases, alt: "Fotos Pases" },
  { img: portada3, alt: "Portada 3" },
];

const sectionRef = ref(null);
const displayedCursive = ref("");
const cursiveText = "Para siempre";
const textStarted = ref(false);

// Use useInView hook from motion-v to trigger typing animation cleanly
const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const startTypingAnimation = async () => {
  if (textStarted.value) return;
  textStarted.value = true;

  displayedCursive.value = "";
  for (let i = 0; i < cursiveText.length; i++) {
    await delay(70);
    displayedCursive.value += cursiveText[i];
  }
};

watch(isInView, async (inView) => {
  if (inView) {
    // Wait for the slide-in text animation to finish (delay 0.8s + duration 1.0s = 1.8s)
    await delay(1800);
    startTypingAnimation();
  }
});
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}

@media (min-width: 640px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: flex;
  }
}
</style>
