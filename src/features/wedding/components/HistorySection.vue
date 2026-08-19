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
        <div
          ref="frameRef"
          class="absolute top-0 bottom-0 right-0 flex-none w-[425px] overflow-clip opacity-0 scale-95 will-change-[transform,opacity] max-sm:!bottom-[unset] max-sm:!h-[383px] max-sm:!left-[calc(50%-173px)] max-sm:!top-[calc(50%-178.5px)] max-sm:!right-[unset] max-sm:!w-[346px]"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="marcoBoda"
              alt="Marco de boda"
            />
          </div>
        </div>
      </div>

      <!-- Couple Photo Container (Cusco) -->
      <div class="block">
        <div
          ref="photoRef"
          class="absolute top-[calc(50.4836%-178.5px)] left-[calc(50.5%-173.5px)] z-0 flex-none w-[347px] h-[357px] overflow-clip opacity-0 scale-90 will-change-[transform,opacity] max-sm:!h-[263px] max-sm:!w-[257px] max-sm:!top-[calc(50.2513%-116px)] max-sm:!left-[calc(50.5618%-127px)]"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="cuscoImg"
              alt="Nuestra foto en Cusco"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Description Text -->
    <div
      ref="textRef"
      class="max-sm:px-4 opacity-0 will-change-[transform,opacity]"
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import anime from "../../../core/libs/anime.js";
import marcoBoda from "../../../assets/images/marco_boda.jpg";
import cuscoImg from "../../../assets/images/cusco.webp";

const sectionRef = ref(null);
const frameRef = ref(null);
const photoRef = ref(null);
const textRef = ref(null);

const displayedCursive = ref("");
const cursiveText = "Para siempre";
const textStarted = ref(false);
let observer = null;

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

onMounted(() => {
  if (typeof window !== "undefined") {
    // 1. Create Anime.js Timeline for the sequence
    const tl = anime.timeline({
      autoplay: false,
      easing: "easeOutCubic",
    });

    // Step 1: Animate the wedding frame
    tl.add({
      targets: frameRef.value,
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 1000,
    })
    // Step 2: Animate the Cusco couple photo (overlaps frame)
    .add({
      targets: photoRef.value,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 1000,
    }, "-=700")
    // Step 3: Animate the text description sliding from left (overlaps photo)
    .add({
      targets: textRef.value,
      opacity: [0, 1],
      translateX: ["-40px", "0px"],
      duration: 1000,
      complete: () => {
        // Trigger cursive typing when slide completes
        startTypingAnimation();
      }
    }, "-=500");

    // 2. Setup IntersectionObserver
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
            // Disconnect once animated to prevent re-runs and improve scroll performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }, // triggers when 30% of the section is visible
    );

    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
