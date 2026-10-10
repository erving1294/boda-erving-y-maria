<template>
  <section
    ref="sectionRef"
    id="guests"
    class="guests-section bg-fondo-blanco-texture overflow-hidden"
  >
    <div class="guests-section__overlay"></div>
    <div class="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <motion.div
        class="mx-auto mb-8 text-center sm:mb-12 h-[440px] max-sm:h-[400px]"
        :initial="{ opacity: 0, x: -60, rotate: -3 }"
        :while-in-view="{ opacity: 1, x: 0, rotate: 0 }"
        :transition="{ duration: 1.2, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.55 }"
      >
        <p class="title">{{ texts.guests.title }}</p>
        <p class="description mt-4">
          {{ texts.guests.description }}
        </p>
      </motion.div>

      <TexturedEnvelope
        :is-open="isOpen"
        :liner-texture="images.guests.patronFloral"
        :seal-url="selloCera"
        @open="isOpen = true"
      >
        <div
          class="guest-inserts"
          :class="{ 'guest-inserts--visible': showInserts }"
        >
          <PaperCard
            shape="standard"
            is-white
            :hasFoliage="false"
            class="guest-pass-card h-[100%] md:w-[45%] w-[55%]"
            content-class="!p-4 sm:!p-6"
          >
            <article class="flex h-full justify-center items-center flex-col">
              <p class="font-badoni italic text-slate-muted mb-1">
                {{ texts.guests.reservedFor }}
              </p>
              <h3
                class="font-badoni text-primary italic text-[20px] leading-[24px] sm:text-[28px] md:leading-[34px]"
              >
                {{ guestName }}
              </h3>
            </article>
          </PaperCard>
          <PolaroidPhoto
            :src="images.guests.passes"
            alt="Ervíng y María"
            class="guest-photo h-[100%] md:w-[45%] w-[50%]"
          >
          </PolaroidPhoto>
        </div>
      </TexturedEnvelope>

      <p
        class="mt-10 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted transition-opacity duration-300"
        :class="isOpen ? 'opacity-0' : 'opacity-100'"
      >
        {{ texts.guests.openEnvelopeInstructions }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";
import { images } from "../data/images";
import TexturedEnvelope from "../../../components/TexturedEnvelope.vue";
import PolaroidPhoto from "../../../components/PolaroidPhoto.vue";
import PaperCard from "../../../components/PaperCard.vue";
import texts from "../data/texts.json";

// Specific assets for the 3D double-sided envelope
import selloCera from "../../../assets/images/Sello.webp";

const isOpen = ref(true);
const showInserts = ref(false);
const sectionRef = ref(null);
let observer = null;

const props = defineProps({
  guestName: { type: String, default: "María Galarza" },
  passes: { type: Number, default: 2 },
});

const passLabel = computed(() =>
  props.passes === 1 ? texts.guests.singlePass : texts.guests.multiplePasses,
);

onMounted(() => {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showInserts.value = true;
          } else {
            showInserts.value = false;
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  } else {
    showInserts.value = true;
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<style scoped>
.guests-section {
  position: relative;
}
.guests-section__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.03);
}
.guest-inserts {
  position: relative;
  width: 100%;
  height: 100%;
}
.guest-photo,
.guest-pass-card {
  position: absolute;
  bottom: 0;
  opacity: 1;
  will-change: transform;
}
.guest-pass-card {
  left: 8%;
  z-index: 2;
  transform: translate(0%, 145px) rotate(0);
  /* Transition on close (immediate slide back) */
  transition: transform 500ms ease-in;
}
.guest-photo {
  right: 5%;
  z-index: 1;
  transform: translate(0%, 145px) rotate(0);
  /* Transition on close (immediate slide back) */
  transition: transform 500ms ease-in;
}
.guest-inserts--visible .guest-photo {
  transform: translate(0%, -15%) rotate(10deg);
  /* Transition on open (delayed until envelope flap is open) */
  transition: transform 1500ms cubic-bezier(0.25, 1, 0.5, 1) 200ms;
}
.guest-inserts--visible .guest-pass-card {
  transform: translate(-10%, -15%) rotate(-10deg);
  /* Transition on open (delayed until envelope flap is open) */
  transition: transform 1500ms cubic-bezier(0.25, 1, 0.5, 1) 700ms;
}
@media (max-width: 768px) {
  .guest-pass-card {
    left: 6%;
    z-index: 2;
    transform: translate(0%, 95px) rotate(0);
    /* Transition on close (immediate slide back) */
    transition: transform 500ms ease-in;
  }
  .guest-photo {
    right: 5%;
    z-index: 1;
    transform: translate(0%, 95px) rotate(0);
    /* Transition on close (immediate slide back) */
    transition: transform 500ms ease-in;
  }
  .guest-inserts--visible .guest-photo {
    transform: translate(10%, -10%) rotate(10deg);
    /* Transition on open (delayed until envelope flap is open) */
    transition: transform 1500ms cubic-bezier(0.25, 1, 0.5, 1) 200ms;
  }
  .guest-inserts--visible .guest-pass-card {
    transform: translate(-10%, -10%) rotate(-10deg);
    /* Transition on open (delayed until envelope flap is open) */
    transition: transform 1500ms cubic-bezier(0.25, 1, 0.5, 1) 700ms;
  }
}
@media (prefers-reduced-motion: reduce) {
  .guest-photo,
  .guest-pass-card {
    transition-duration: 1ms;
  }
}
</style>
