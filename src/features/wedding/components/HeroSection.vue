<template>
  <header
    id="hero"
    class="relative h-screen flex justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat select-none overflow-hidden z-20"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${coverUrl});`"
  >
    <!-- Top-left foliage (watercolor style vector branch) -->
    <svg
      class="absolute top-0 left-0 w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 pointer-events-none z-10"
      viewBox="0 0 200 200"
      fill="none"
    >
      <!-- Main Stem -->
      <path
        d="M0 0C25 35 45 75 55 105"
        stroke="#3E4C3A"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <!-- Leaf 1 (Forest Green) -->
      <path
        d="M12 22C24 22 32 35 28 48C18 44 10 32 12 22Z"
        fill="#4E5E4B"
        opacity="0.9"
      />
      <path d="M12 22C17 28 22 36 28 48" stroke="#3E4C3A" stroke-width="0.5" />

      <!-- Leaf 2 (Sage Green #6A8067) -->
      <path
        d="M26 40C38 37 45 48 38 60C28 56 21 45 26 40Z"
        fill="#6A8067"
        opacity="0.95"
      />

      <!-- Leaf 3 (Gold Accent) -->
      <path
        d="M42 68C52 62 62 72 55 85C45 80 38 72 42 68Z"
        fill="#C5A880"
        opacity="0.85"
      />

      <!-- Leaf 4 (Light Olive) -->
      <path
        d="M4 35C12 43 10 60 2 64C-2 56 0 43 4 35Z"
        fill="#8B9E83"
        opacity="0.9"
      />

      <!-- Leaf 5 (Pale Sage) -->
      <path
        d="M50 90C58 83 70 92 65 102C55 100 48 93 50 90Z"
        fill="#A3C39D"
        opacity="0.85"
      />

      <!-- Side Branch 2 -->
      <path
        d="M0 0C35 18 70 35 95 50"
        stroke="#3E4C3A"
        stroke-width="1.4"
        stroke-linecap="round"
      />

      <!-- Leaf 6 (Sage) -->
      <path
        d="M30 12C42 15 48 25 42 35C33 32 26 23 30 12Z"
        fill="#6A8067"
        opacity="0.9"
      />

      <!-- Leaf 7 (Gold) -->
      <path
        d="M58 26C68 24 76 34 70 44C61 41 54 32 58 26Z"
        fill="#C5A880"
        opacity="0.8"
      />

      <!-- Leaf 8 (Light Sage) -->
      <path
        d="M82 42C92 39 98 49 92 59C83 55 78 46 82 42Z"
        fill="#8B9E83"
        opacity="0.9"
      />
    </svg>

    <!-- Bottom-right foliage (rotated watercolor style vector branch) -->
    <svg
      class="absolute bottom-0 right-0 w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 pointer-events-none z-10 rotate-180"
      viewBox="0 0 200 200"
      fill="none"
    >
      <!-- Main Stem -->
      <path
        d="M0 0C25 35 45 75 55 105"
        stroke="#3E4C3A"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <!-- Leaf 1 -->
      <path
        d="M12 22C24 22 32 35 28 48C18 44 10 32 12 22Z"
        fill="#4E5E4B"
        opacity="0.9"
      />
      <path
        d="M26 40C38 37 45 48 38 60C28 56 21 45 26 40Z"
        fill="#6A8067"
        opacity="0.95"
      />
      <path
        d="M42 68C52 62 62 72 55 85C45 80 38 72 42 68Z"
        fill="#C5A880"
        opacity="0.85"
      />
      <path
        d="M4 35C12 43 10 60 2 64C-2 56 0 43 4 35Z"
        fill="#8B9E83"
        opacity="0.9"
      />
      <path
        d="M50 90C58 83 70 92 65 102C55 100 48 93 50 90Z"
        fill="#A3C39D"
        opacity="0.85"
      />

      <!-- Side Branch 2 -->
      <path
        d="M0 0C35 18 70 35 95 50"
        stroke="#3E4C3A"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M30 12C42 15 48 25 42 35C33 32 26 23 30 12Z"
        fill="#6A8067"
        opacity="0.9"
      />
      <path
        d="M58 26C68 24 76 34 70 44C61 41 54 32 58 26Z"
        fill="#C5A880"
        opacity="0.8"
      />
      <path
        d="M82 42C92 39 98 49 92 59C83 55 78 46 82 42Z"
        fill="#8B9E83"
        opacity="0.9"
      />
    </svg>

    <!-- Hero Content -->
    <div class="px-4 max-w-3xl z-20 flex flex-col items-center">
      <!-- Names with Green Ampersand Circle -->
      <h1
        class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-new-icon text-6xl md:text-8xl text-white mb-8 drop-shadow-md select-text normal-case"
      >
        <!-- Ervíng -->
        <span class="inline-flex">
          <span
            v-for="(char, index) in title1Letters"
            :key="'t1-' + index"
            class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-[transform,opacity]"
            :style="{ transitionDelay: `${index * 100}ms` }"
            :class="
              showTitle1
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-[15px] scale-75'
            "
          >
            {{ char }}
          </span>
        </span>

        <!-- Ampersand -->
        <span
          class="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white text-3xl md:text-4xl font-new-icon font-light shadow-md shadow-black/10 border border-white/20 select-none my-2 md:my-0 normal-case transition-all duration-500 ease-out"
          :class="
            showAmpersand
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50 pointer-events-none'
          "
        >
          &
        </span>

        <!-- María -->
        <span class="inline-flex">
          <span
            v-for="(char, index) in title2Letters"
            :key="'t2-' + index"
            class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-[transform,opacity]"
            :style="{ transitionDelay: `${index * 100}ms` }"
            :class="
              showTitle2
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-[15px] scale-75'
            "
          >
            {{ char }}
          </span>
        </span>
      </h1>

      <!-- Love Quote with Decorative Quotations -->
      <div
        class="max-w-xl mx-auto !text-white text-sm md:text-base flex flex-col items-center"
      >
        <p
          class="font-inria text-white text-xl md:text-2xl font-light tracking-wide leading-relaxed text-center flex flex-wrap justify-center min-h-[2rem] sm:min-h-[2rem]"
        >
          <template v-for="(word, wIndex) in words" :key="'w-' + wIndex">
            <!-- Word Wrapper to prevent line breaks inside words -->
            <span class="inline-block whitespace-nowrap">
              <span
                v-for="(char, cIndex) in word.letters"
                :key="'c-' + cIndex"
                class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-[transform,opacity]"
                :style="{
                  transitionDelay: `${(word.startIndex + cIndex) * 50}ms`,
                }"
                :class="
                  showParagraph
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-[12px] scale-90'
                "
              >
                {{ char }}
              </span>
            </span>
            <!-- Space outside the word container to let browser wrap lines naturally -->
            <span v-if="wIndex < words.length - 1" class="inline-block"
              >&nbsp;</span
            >
          </template>
        </p>

        <!-- Scroll Down Arrow Button -->
        <button
          @click="scrollToNextSection"
          class="mt-8 flex flex-col items-center gap-2 cursor-pointer focus:outline-none z-30 group transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-[transform,opacity]"
          :class="
            showScrollButton
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 translate-y-[15px] scale-90 pointer-events-none'
          "
        >
          <span
            class="text-[10px] tracking-[0.25em] uppercase text-white transition-colors font-sans font-medium"
          >
            Ver Invitación
          </span>
          <div
            class="w-10 outline-none h-10 rounded-full border flex justify-center items-center border-white/50 group-hover:bg-white/10 transition-all duration-300 animate-bounce-down"
          >
            <!-- SVG Chevron Down Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";
import coverUrl from "../../../assets/images/portada-3.webp";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const title1Letters = "Ervíng".split("");
const title2Letters = "María".split("");
const paragraphText =
  "Que el amor sea siempre nuestro vínculo y Dios, nuestro camino; para caminar juntos, de la mano, hacia toda una vida por compartir";

// Split into words and pre-calculate indices for seamless stagger delays
const words = [];
let currentIndex = 0;
const rawWords = paragraphText.split(" ");
for (let i = 0; i < rawWords.length; i++) {
  const wordText = rawWords[i];
  const letters = wordText.split("");
  words.push({
    text: wordText,
    letters: letters,
    startIndex: currentIndex,
  });
  currentIndex += letters.length + 1; // +1 to account for the space
}

const showTitle1 = ref(false);
const showAmpersand = ref(false);
const showTitle2 = ref(false);
const showParagraph = ref(false);
const showScrollButton = ref(false);

let started = false;

const startAnimation = async () => {
  if (started) return;
  started = true;

  showTitle1.value = false;
  showAmpersand.value = false;
  showTitle2.value = false;
  showParagraph.value = false;
  showScrollButton.value = false;

  // Step 1: Block scroll during animation
  if (typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
  }

  // Step 2: Start "Ervíng" staggered letter transitions
  showTitle1.value = true;

  // Step 3: Fade & scale in the ampersand circle after 700ms (Ervíng completes layout)
  await new Promise((resolve) => setTimeout(resolve, 700));
  showAmpersand.value = true;

  // Step 4: Start "María" staggered letter transitions after 1100ms total (400ms after ampersand)
  await new Promise((resolve) => setTimeout(resolve, 400));
  showTitle2.value = true;

  // Step 5: Stagger before paragraph fade-in wave (wait 800ms after María starts)
  await new Promise((resolve) => setTimeout(resolve, 800));
  showParagraph.value = true;

  // Step 6: Wait for paragraph staggered animation to finish (123 letters * 50ms + 1000ms animation duration + buffer)
  // 123 * 50 = 6150ms. Total animation complete at 6150 + 1000 = 7150ms. Let's wait 7500ms.
  await new Promise((resolve) => setTimeout(resolve, 7500));

  // Step 7: Reveal scroll arrow button and restore scroll
  showScrollButton.value = true;
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
};

const scrollToNextSection = () => {
  const nextSection = document.getElementById("detailSection");
  if (nextSection) {
    const targetY = nextSection.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY || window.pageYOffset;
    const difference = targetY - startY;
    const duration = 1800; // 1.8 seconds for a very smooth glide
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startY + difference * easeInOutCubic(percent));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
};

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      startAnimation();
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  // Safe cleanup: restore scrolling if the page transitions or unmounts
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 1.5s ease forwards;
}
.animate-fade-in-up {
  animation: fadeInUp 1.5s ease forwards;
}
.animate-fade-in {
  animation: fadeIn 2s ease forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-bounce-down {
  animation: bounceDown 2s infinite;
}

@keyframes bounceDown {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(6px);
  }
  60% {
    transform: translateY(3px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
}
</style>
