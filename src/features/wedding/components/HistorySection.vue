<template>
  <section
    class="bg-texture-white flex flex-col flex-none justify-center items-center gap-[10px] w-full h-min pb-[60px] relative overflow-hidden"
  >
    <!-- Main Frame Wrapper -->
    <div
      ref="imagesRef"
      class="relative flex-none w-[425px] h-[517px] overflow-clip max-sm:!w-[356px] max-sm:!h-[398px]"
    >
      <!-- Wedding Frame Image Container -->
      <div class="block">
        <div
          class="absolute top-0 bottom-0 right-0 flex-none w-[425px] overflow-clip will-change-[transform,opacity] max-sm:!bottom-[unset] max-sm:!h-[383px] max-sm:!left-[calc(50%-173px)] max-sm:!top-[calc(50%-178.5px)] max-sm:!right-[unset] max-sm:!w-[346px] transition-all duration-[1000ms] ease-out"
          :class="frameVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
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
          class="absolute top-[calc(50.4836%-178.5px)] left-[calc(50.5%-173.5px)] z-0 flex-none w-[347px] h-[357px] overflow-clip will-change-[transform,opacity] max-sm:!h-[263px] max-sm:!w-[257px] max-sm:!top-[calc(50.2513%-116px)] max-sm:!left-[calc(50.5618%-127px)] transition-all duration-[1000ms] ease-out"
          :class="photoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
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
      class="max-sm:px-4 transition-all duration-[1000ms] ease-out will-change-[transform,opacity]"
      :class="textIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[40px]'"
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
import marcoBoda from "../../../assets/images/marco_boda.jpg";
import cuscoImg from "../../../assets/images/cusco.webp";

const imagesRef = ref(null);
const textRef = ref(null);

const frameVisible = ref(false);
const photoVisible = ref(false);
const textIntersecting = ref(false);
const displayedCursive = ref("");

const cursiveText = "Para siempre";

let imagesStarted = false;
let textStarted = false;
let imagesObserver = null;
let textObserver = null;
let cursiveInterval = null;

const typeText = (text, refVar, speed) => {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      if (!textIntersecting.value) {
        clearInterval(interval);
        resolve();
        return;
      }
      refVar.value += text[index];
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);

    cursiveInterval = interval;
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const startImagesAnimation = async () => {
  if (imagesStarted) return;
  imagesStarted = true;

  frameVisible.value = true;
  await delay(500);
  if (!imagesStarted) return;

  photoVisible.value = true;
};

const resetImagesAnimation = () => {
  imagesStarted = false;
  frameVisible.value = false;
  photoVisible.value = false;
};

const startTextAnimation = async () => {
  if (textStarted) return;
  textStarted = true;
  textIntersecting.value = true;

  await delay(800);
  if (!textIntersecting.value) return;

  await typeText(cursiveText, displayedCursive, 60);
};

const resetTextAnimation = () => {
  textIntersecting.value = false;
  textStarted = false;
  if (cursiveInterval) {
    clearInterval(cursiveInterval);
    cursiveInterval = null;
  }
  displayedCursive.value = "";
};

onMounted(() => {
  if (typeof window !== "undefined") {
    // Observer for images
    imagesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startImagesAnimation();
          } else {
            resetImagesAnimation();
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
    if (imagesRef.value) {
      imagesObserver.observe(imagesRef.value);
    }

    // Observer for text
    textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTextAnimation();
          } else {
            resetTextAnimation();
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
    if (textRef.value) {
      textObserver.observe(textRef.value);
    }
  }
});

onUnmounted(() => {
  if (imagesObserver) {
    imagesObserver.disconnect();
  }
  if (textObserver) {
    textObserver.disconnect();
  }
});
</script>
