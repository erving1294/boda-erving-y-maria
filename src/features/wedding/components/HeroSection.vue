<template>
  <header
    id="hero"
    class="relative h-screen flex justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat select-none overflow-hidden z-20"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), ${bgUrl(images.hero.cover)};`"
  >
    <!-- Hero Content -->
    <div class="px-4 max-w-3xl z-20 flex flex-col items-center">
      <!-- Names with Green Ampersand Circle -->
      <h1
        class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-laparisienne text-6xl md:text-8xl text-white mb-8 drop-shadow-md select-text normal-case"
      >
        <!-- Ervíng -->
        <span class="inline-flex">
          <span
            v-for="(char, index) in title1Letters"
            :key="'t1-' + index"
            class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
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
          class="inline-flex justify-center items-center rounded-full text-white text-3xl md:text-4xl font-laparisienne font-light select-none my-2 md:my-0 normal-case transition-all duration-500 ease-out"
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
            class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
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
          class="font-badoni text-white text-xl md:text-2xl font-light tracking-wide leading-relaxed text-center flex flex-wrap justify-center min-h-[2rem] sm:min-h-[2rem] italic"
        >
          <template v-for="(word, wIndex) in words" :key="'w-' + wIndex">
            <!-- Word Wrapper to prevent line breaks inside words -->
            <span class="inline-block whitespace-nowrap">
              <span
                v-for="(char, cIndex) in word.letters"
                :key="'c-' + cIndex"
                class="inline-block transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
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
          class="mt-8 flex flex-col items-center gap-2 cursor-pointer focus:outline-none z-30 group transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
          :class="
            showScrollButton
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 translate-y-[15px] scale-90 pointer-events-none'
          "
        >
          <span
            class="text-[10px] tracking-[0.25em] uppercase text-white group-hover:text-white transition-colors font-sans font-medium"
          >
            {{ texts.hero.buttonLabel }}
          </span>
          <div
            class="w-10 h-10 rounded-full border border-white flex justify-center items-center group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300 animate-bounce-down"
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
import { images, bgUrl } from "../data/images";
import texts from "../data/texts.json";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  blockScroll: {
    type: Boolean,
    default: true, // Bloquea por defecto el scroll durante la animación
  },
});

const title1Letters = texts.hero.title1.split("");
const title2Letters = texts.hero.title2.split("");
const paragraphText = texts.hero.paragraph;

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

  // Step 1: Block scroll during animation if blockScroll is enabled
  if (props.blockScroll && typeof window !== "undefined") {
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

  // Step 7: Reveal scroll arrow button
  showScrollButton.value = true;

  // Step 8: Restore scroll automatically if we blocked it
  if (props.blockScroll && typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
};

const scrollToNextSection = () => {
  // Safe scroll restoration
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }

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
  if (props.blockScroll && typeof window !== "undefined") {
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
    transform: translateY(0);
  }
}
</style>
