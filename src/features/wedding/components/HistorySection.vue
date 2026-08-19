<template>
  <section
    ref="sectionRef"
    class="bg-texture-white flex flex-col flex-none justify-center items-center gap-[10px] w-full h-min pb-[60px] relative overflow-hidden"
  >
    <!-- Main Frame Wrapper -->
    <div
      class="relative flex-none w-[425px] h-[517px] overflow-clip max-sm:!w-[356px] max-sm:!h-[398px]"
    >
      <!-- Wedding Frame Image Container -->
      <div class="block">
        <motion.div
          class="absolute top-0 bottom-0 right-0 flex-none w-[425px] overflow-clip will-change-[transform,opacity] max-sm:!bottom-[unset] max-sm:!h-[383px] max-sm:!left-[calc(50%-173px)] max-sm:!top-[calc(50%-178.5px)] max-sm:!right-[unset] max-sm:!w-[346px]"
          :initial="{ opacity: 0, scale: 0.95 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 1.0, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.3 }"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="marcoBoda"
              alt="Marco de boda"
            />
          </div>
        </motion.div>
      </div>

      <!-- Couple Photo Container (Cusco) -->
      <div class="block">
        <motion.div
          class="absolute top-[calc(50.4836%-178.5px)] left-[calc(50.5%-173.5px)] z-0 flex-none w-[347px] h-[357px] overflow-clip will-change-[transform,opacity] max-sm:!h-[263px] max-sm:!w-[257px] max-sm:!top-[calc(50.2513%-116px)] max-sm:!left-[calc(50.5618%-127px)]"
          :initial="{ opacity: 0, scale: 0.9 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 1.0, delay: 0.5, ease: 'easeOut' }"
          :viewport="{ once: true, amount: 0.3 }"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="cuscoImg"
              alt="Nuestra foto en Cusco"
            />
          </div>
        </motion.div>
      </div>
    </div>

    <!-- Description Text -->
    <motion.div
      class="max-sm:px-4 will-change-[transform,opacity]"
      :initial="{ opacity: 0, x: -40 }"
      :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 1.0, delay: 0.8, ease: 'easeOut' }"
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
import marcoBoda from "../../../assets/images/marco_boda.jpg";
import cuscoImg from "../../../assets/images/cusco.webp";

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
