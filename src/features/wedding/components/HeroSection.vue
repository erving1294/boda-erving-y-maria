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
        class="max-w-md mx-auto !text-white text-sm md:text-base flex flex-col items-center"
      >
        <p
          class="font-inria text-white text-xl font-light tracking-wide leading-relaxed min-h-[5rem] sm:min-h-[4rem]"
        >
          {{ displayedParagraph }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
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
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima ab voluptatum, possimus voluptatem laborum asperiores.";

const showTitle1 = ref(false);
const showAmpersand = ref(false);
const showTitle2 = ref(false);
const displayedParagraph = ref("");

let started = false;

const typeText = (text, refVar, speed) => {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      refVar.value += text[index];
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
};

const startAnimation = async () => {
  if (started) return;
  started = true;

  showTitle1.value = false;
  showAmpersand.value = false;
  showTitle2.value = false;
  displayedParagraph.value = "";

  // Step 1: Start "Ervíng" staggered letter transitions
  showTitle1.value = true;

  // Step 2: Fade & scale in the ampersand circle after 700ms (Ervíng completes layout)
  await new Promise((resolve) => setTimeout(resolve, 700));
  showAmpersand.value = true;

  // Step 3: Start "María" staggered letter transitions after 1100ms total (400ms after ampersand)
  await new Promise((resolve) => setTimeout(resolve, 400));
  showTitle2.value = true;

  // Step 4: Stagger before paragraph typing (María starts at 1100ms and finishes around 1500ms, wait 1200ms)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Step 5: Type paragraph smoothly (45ms per letter)
  await typeText(paragraphText, displayedParagraph, 45);
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
