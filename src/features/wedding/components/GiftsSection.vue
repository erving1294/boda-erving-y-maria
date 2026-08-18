<template>
  <section
    id="gifts"
    class="bg-texture-flores py-20 bg-ivory-dark/30 select-none"
    data-aos="fade-up"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h3 class="text-4xl md:text-5xl font-cookie text-primary">
          Muestras de Afecto
        </h3>
        <div class="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
      </div>

      <p
        class="font-serif italic text-sm text-slate-muted text-center max-w-xl mx-auto mb-12"
      >
        "El mejor regalo que nos puedes dar es tu presencia compartiendo este
        gran día con nosotros. Si, sin embargo, deseas realizarnos un obsequio,
        ponemos a tu disposición estas opciones:"
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <!-- LLUVIA DE SOBRES -->
        <PaperCard shape="left" is-white>
          <div class="flex flex-col items-center">
            <!-- Mail / Envelope Icon -->
            <div
              class="w-12 h-12 bg-tertiary/20 rounded-full flex justify-center items-center text-primary border border-gold/20 mb-6"
            >
              <svg
                class="w-6 h-6 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            <h4 class="font-new-icon text-xl text-primary font-bold mb-4">
              Lluvia de Sobres
            </h4>
            <p class="font-inria text-sm text-slate-muted leading-relaxed">
              Consiste en la entrega de tu regalo en efectivo dentro de un sobre
              cerrado el día del evento. En el salón de fiestas Avril
              encontrarás un buzón especial decorado para depositarlos de forma
              segura.
            </p>
          </div>

          <div class="w-full h-[1px] bg-gold/20 my-6"></div>

          <span
            class="text-xs uppercase tracking-widest font-semibold text-secondary"
            >Tradicional</span
          >
        </PaperCard>

        <!-- TRANSFERENCIA BANCARIA -->
        <PaperCard shape="right" is-white>
          <div class="w-full flex flex-col items-center">
            <!-- Bank Card Icon -->
            <div
              class="w-12 h-12 bg-tertiary/20 rounded-full flex justify-center items-center text-primary border border-gold/20 mb-6"
            >
              <svg
                class="w-6 h-6 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>

            <h4 class="font-new-icon text-xl text-primary font-bold mb-6">
              Transferencia Bancaria
            </h4>

            <!-- Bank Account Box -->
            <div
              class="w-full bg-[#faf7f3]/50 border border-gold/20 rounded-2xl p-4 space-y-3 text-xs md:text-sm text-slate-dark relative"
            >
              <div
                class="flex justify-between items-center py-1 border-b border-gold/10"
              >
                <span
                  class="text-slate-muted uppercase font-semibold text-[10px] tracking-wide"
                  >Banco</span
                >
                <span class="font-semibold text-right">Banco de la Nación</span>
              </div>

              <div
                class="flex justify-between items-center py-1 border-b border-gold/10"
              >
                <span
                  class="text-slate-muted uppercase font-semibold text-[10px] tracking-wide"
                  >Alias</span
                >
                <div class="flex items-center gap-2">
                  <span class="font-mono font-semibold">{{ alias }}</span>
                  <button
                    @click="copyText(alias, 'alias')"
                    class="px-2 py-0.5 text-[10px] uppercase font-bold text-white bg-primary hover:bg-secondary rounded transition duration-200"
                  >
                    {{ copiedField === "alias" ? "Copiado" : "Copiar" }}
                  </button>
                </div>
              </div>

              <div
                class="flex justify-between items-center py-1 border-b border-gold/10"
              >
                <span
                  class="text-slate-muted uppercase font-semibold text-[10px] tracking-wide"
                  >CBU / IBAN</span
                >
                <div class="flex items-center gap-2">
                  <span
                    class="font-mono font-semibold text-[11px] md:text-xs"
                    >{{ cbu }}</span
                  >
                  <button
                    @click="copyText(cbu, 'cbu')"
                    class="px-2 py-0.5 text-[10px] uppercase font-bold text-white bg-primary hover:bg-secondary rounded transition duration-200"
                  >
                    {{ copiedField === "cbu" ? "Copiado" : "Copiar" }}
                  </button>
                </div>
              </div>

              <div class="flex justify-between items-center py-1">
                <span
                  class="text-slate-muted uppercase font-semibold text-[10px] tracking-wide"
                  >Titulares</span
                >
                <span class="font-semibold text-right">Ervíng y María</span>
              </div>
            </div>
          </div>
        </PaperCard>
      </div>
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
import PaperCard from "../../../components/PaperCard.vue";

const alias = "erving.y.maria.boda";
const cbu = "0110123456789012345678";

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
