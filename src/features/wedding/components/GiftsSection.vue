<template>
  <section
    id="gifts"
    class="bg-texture-flores py-24 select-none overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6">
      <!-- Arched Card Container with paper texture for volume -->
      <motion.div
        class="arched-card max-w-md mx-auto rounded-t-[180px] p-8 md:p-12 text-center relative flex flex-col items-center justify-center border border-gold/15 will-change-[transform,opacity]"
        :initial="{ opacity: 0, y: 50, scale: 0.97 }"
        :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 1.2, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.55 }"
      >
        <!-- Header Text -->
        <h4 class="title text-4xl mt-6 mb-2 max-sm:mt-8">Mesa de Regalos</h4>

        <!-- Gift GIF Icon -->
        <img :src="GiftGif" class="icon" />

        <!-- Paragraph -->
        <p
          class="font-inria text-base text-slate-muted leading-relaxed mb-6 max-w-xs mx-auto"
        >
          El mejor regalo es que nos acompañes en este día tan especial, pero si
          desean tener un detalle con nosotros, pueden hacerlo a través de:
        </p>

        <!-- Account details container -->
        <div class="w-full max-w-[320px] mx-auto space-y-3 text-xs">
          <!-- Cuenta Box -->
          <motion.div
            class="flex justify-between items-center border border-secondary rounded-xl p-3.5 will-change-[transform,opacity]"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.4, ease: 'easeOut' }"
            :viewport="{ once: false, amount: 0.55 }"
          >
            <div class="flex flex-col text-left">
              <span
                class="text-[9px] uppercase tracking-wider text-slate-muted font-bold"
                >Número de Cuenta</span
              >
              <span
                class="font-mono font-semibold text-slate-dark text-xs mt-0.5"
                >{{ cuenta }}</span
              >
            </div>
            <button
              @click="copyText(cuenta, 'cuenta')"
              class="px-3 py-1.5 text-[9px] uppercase font-bold text-white bg-secondary hover:bg-secondary rounded transition duration-200 shadow-sm"
            >
              {{ copiedField === "cuenta" ? "Copiado" : "Copiar" }}
            </button>
          </motion.div>

          <!-- CCI Box -->
          <motion.div
            class="flex justify-between items-center border border-secondary rounded-xl p-3.5 will-change-[transform,opacity]"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.8, ease: 'easeOut' }"
            :viewport="{ once: false, amount: 0.55 }"
          >
            <div class="flex flex-col text-left">
              <span
                class="text-[9px] uppercase tracking-wider text-slate-muted font-bold"
                >Cuenta Interbancaria (CCI)</span
              >
              <span
                class="font-mono font-semibold text-slate-dark text-[11px] mt-0.5"
                >{{ cci }}</span
              >
            </div>
            <button
              @click="copyText(cci, 'cci')"
              class="px-3 py-1.5 text-[9px] uppercase font-bold text-white bg-secondary hover:bg-secondary rounded transition duration-200 shadow-sm"
            >
              {{ copiedField === "cci" ? "Copiado" : "Copiar" }}
            </button>
          </motion.div>

          <!-- Titular Box -->
          <motion.div
            class="flex justify-between items-center border border-secondary rounded-xl p-3.5 will-change-[transform,opacity]"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 1.2, ease: 'easeOut' }"
            :viewport="{ once: false, amount: 0.55 }"
          >
            <div class="flex flex-col text-left">
              <span
                class="text-[9px] uppercase tracking-wider text-slate-muted font-bold"
                >Titular</span
              >
              <span class="font-semibold text-slate-dark text-xs mt-0.5"
                >Ervíng y María</span
              >
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    <!-- Global Toast Notification -->
    <Transition name="toast-fade">
      <div
        v-if="showToast"
        class="fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-dark text-white font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full shadow-lg z-[999] pointer-events-none"
      >
        {{ toastMessage }}
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { motion } from "motion-v";
import GiftGif from "../../../assets/images/gifs/gift.gif";

const cuenta = "193-98765432-0-12";
const cci = "002-193-0098765432012-14";

const copiedField = ref(null);
const showToast = ref(false);
const toastMessage = ref("");

const copyText = (text, fieldName) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => triggerToast(fieldName))
      .catch(() => fallbackCopy(text, fieldName));
  } else {
    fallbackCopy(text, fieldName);
  }
};

const fallbackCopy = (text, fieldName) => {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  triggerToast(fieldName);
};

const triggerToast = (fieldName) => {
  copiedField.value = fieldName;
  toastMessage.value = `${fieldName.toUpperCase()} copiado al portapapeles`;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
    copiedField.value = null;
  }, 2500);
};
</script>

<style scoped>
.arched-card {
  position: relative;
  background-color: #faf7f3;
  /* Use papel_boda_blanco.jpg to give it texture and volume */

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:
    0 20px 40px -15px rgba(74, 99, 96, 0.2),
    inset 0 0 45px rgba(191, 168, 128, 0.04),
    0 25px 50px -12px rgba(0, 0, 0, 0.08);
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px);
}
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
