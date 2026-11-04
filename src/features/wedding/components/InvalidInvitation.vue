<template>
  <main
    class="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-fondo-marmol bg-ivory selection:bg-gold/30 selection:text-sage relative overflow-x-hidden select-none"
  >
    <!-- Background overlay / soft texture -->
    <div
      class="absolute inset-0 bg-ivory/70 backdrop-blur-[1px] pointer-events-none"
    ></div>

    <div class="relative z-10 w-full max-w-md mx-auto my-8">
      <PaperCard
        shape="standard"
        is-white
        :has-foliage="true"
        :has-shadow="true"
        container-class="w-full"
        content-class="!p-8 sm:!p-12"
      >
        <div class="flex flex-col items-center text-center w-full">
          <!-- Decorative Icon Container with gold accent -->
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#faf7f3] border border-gold/40 flex items-center justify-center mb-6 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 sm:w-10 sm:h-10 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 3h.01"
              />
            </svg>
          </div>

          <!-- Main Title: "Invitación no disponible" -->
          <h1 class="title !text-3xl sm:!text-4xl !text-primary !mb-3">
            {{ texts.invalidInvitation.title }}
          </h1>

          <!-- Gold divider -->
          <div class="w-16 h-[1px] bg-gold/50 my-3"></div>

          <!-- Generic message -->
          <p
            class="description !text-base sm:!text-lg text-slate-muted mt-2 mb-3 leading-relaxed max-w-sm"
          >
            {{ texts.invalidInvitation.description }}
          </p>
        </div>
      </PaperCard>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import PaperCard from "../../../components/PaperCard.vue";
import texts from "../data/texts.json";
import { useAudio } from "../../../core/composables/useAudio";

const { pause } = useAudio();

onMounted(() => {
  try {
    pause();
  } catch (e) {
    // Ignore audio pause errors
  }
  if (typeof document !== "undefined") {
    document.title = texts.invalidInvitation.title;
    document.body.style.overflow = "";
  }
});
</script>
