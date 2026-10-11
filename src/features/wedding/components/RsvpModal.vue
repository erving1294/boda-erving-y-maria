<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-[999] flex justify-center items-center p-4 overflow-y-auto"
    >
      <!-- Modal Card using paper-card class for graphic consistency -->
      <div
        :class="[
          'bg-white w-full max-w-md p-6 md:p-10 relative select-text max-md:overflow-y-auto shadow-[0_20px_50px_-12px_rgba(44,73,69,0.3)]',
          isSubmitted ? 'max-md:!h-auto' : 'max-md:!h-full',
        ]"
      >
        <!-- Close Button Top Right -->
        <button
          @click="closeModal"
          :disabled="isSending"
          class="absolute top-4 right-4 text-slate-muted hover:text-slate-dark transition-colors focus:outline-none p-1 cursor-pointer z-10"
          :class="isSending ? 'opacity-50 cursor-not-allowed' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <Transition name="modal-swap" mode="out-in">
          <!-- Success Screen -->
          <div
            v-if="isSubmitted"
            key="success"
            class="text-center py-6 select-none flex flex-col items-center"
          >
            <!-- Checkmark Circle Icon -->
            <div
              class="w-16 h-16 bg-[#eef3f1] rounded-full flex justify-center items-center mb-6"
            >
              <!-- SVG Checkmark Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="#2c4945"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h4 class="title !text-[40px] !mb-5">
              {{ texts.rsvp.modal.thanksTitle }}
            </h4>

            <p
              v-if="form.attending === 'yes'"
              class="font-badoni text-slate-muted leading-relaxed mb-8 max-w-xs mx-auto"
            >
              {{ texts.rsvp.modal.attendingSuccess }}
            </p>
            <p
              v-else
              class="font-badoni text-slate-muted leading-relaxed mb-8 max-w-xs mx-auto"
            >
              {{ texts.rsvp.modal.notAttendingSuccess }}
            </p>

            <button
              @click="closeModal"
              class="button cursor-pointer w-full !max-w-[180px] border-0"
            >
              {{ texts.rsvp.modal.closeButton }}
            </button>
          </div>

          <!-- Form Layout -->
          <div v-else key="form">
            <!-- Form Header -->
            <div class="text-center mb-7 select-none">
              <h4 class="title mb-1">
                {{ texts.rsvp.modal.confirmTitle }}
              </h4>
              <h5 class="title !mb-0">
                {{ texts.rsvp.modal.confirmSubtitle }}
              </h5>
            </div>

            <!-- Form Fields -->
            <form @submit.prevent="submitForm" class="space-y-4 text-left">
              <!-- 1. Nombre Completo -->
              <div class="flex flex-col gap-[2px]">
                <label class="text-xs font-badoni font-bold text-slate-muted">
                  {{ texts.rsvp.modal.fullNameLabel }}
                </label>
                <input
                  v-model="form.fullName"
                  disabled
                  type="text"
                  required
                  :disabled="isSending"
                  :placeholder="texts.rsvp.modal.fullNamePlaceholder"
                  class="w-full px-4 py-2.5 border border-secondary/40 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg outline-none font-badoni text-slate-dark bg-white/70 transition-all duration-300 placeholder:text-slate-muted/40 text-sm disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <!-- Celular -->
              <div class="flex flex-col gap-[2px]">
                <label class="text-xs font-badoni font-bold text-slate-muted">
                  {{ texts.rsvp.modal.phoneLabel }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  :disabled="isSending"
                  :placeholder="texts.rsvp.modal.phonePlaceholder"
                  class="w-full px-4 py-2.5 border border-secondary/40 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg outline-none font-badoni text-slate-dark bg-white/70 transition-all duration-300 placeholder:text-slate-muted/40 text-sm disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <!-- 2. ¿Podrás asistir al evento? -->
              <div class="flex flex-col gap-[2px]">
                <label class="text-xs font-badoni font-bold text-slate-muted">
                  {{ texts.rsvp.modal.attendingQuestionLabel }}
                </label>
                <select
                  v-model="form.attending"
                  required
                  :disabled="isSending"
                  class="w-full px-4 py-2.5 border border-secondary/40 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg outline-none font-badoni text-slate-dark bg-white/70 transition-all duration-300 text-sm cursor-pointer disabled:bg-slate-100 disabled:cursor-not-allowed"
                >
                  <option value="" disabled selected>
                    {{ texts.rsvp.modal.attendingSelectDefault }}
                  </option>
                  <option value="yes">
                    {{ texts.rsvp.modal.attendingSelectYes }}
                  </option>
                  <option value="no">
                    {{ texts.rsvp.modal.attendingSelectNo }}
                  </option>
                </select>
              </div>

              <!-- 3. ¿Cuántas personas asistirán? (Visible only if attending is 'yes') -->
              <div
                v-if="form.attending === 'yes'"
                class="flex flex-col gap-[2px]"
              >
                <label class="text-xs font-badoni font-bold text-slate-muted">
                  {{ texts.rsvp.modal.peopleCountLabel }}
                </label>
                <select
                  v-model.number="form.people"
                  required
                  :disabled="isSending"
                  class="w-full px-4 py-2.5 border border-secondary/40 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg outline-none font-badoni text-slate-dark bg-white/70 transition-all duration-300 text-sm cursor-pointer disabled:bg-slate-100 disabled:cursor-not-allowed"
                >
                  <option v-for="n in passes || 2" :key="n" :value="n">
                    {{ n }}
                    {{
                      n === 1
                        ? texts.rsvp.modal.personLabel
                        : texts.rsvp.modal.peopleLabel
                    }}
                  </option>
                </select>
              </div>

              <!-- 4. Felicitaciones y buenos deseos -->
              <div class="flex flex-col gap-[2px]">
                <label class="text-xs font-badoni font-bold text-slate-muted">
                  {{ texts.rsvp.modal.wishesLabel }}
                </label>
                <textarea
                  v-model="form.wishes"
                  rows="2"
                  :disabled="isSending"
                  :placeholder="texts.rsvp.modal.wishesPlaceholder"
                  class="w-full px-4 py-2.5 border border-secondary/40 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg outline-none font-badoni text-slate-dark bg-white/70 transition-all duration-300 placeholder:text-slate-muted/40 text-sm resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col items-center gap-3 pt-4 select-none">
                <button
                  type="submit"
                  :disabled="isSending"
                  class="button cursor-pointer w-full !max-w-none border-0 !flex justify-center items-center gap-2"
                  :class="isSending ? 'opacity-85 cursor-not-allowed' : ''"
                >
                  <!-- Loading Spinner -->
                  <svg
                    v-if="isSending"
                    class="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>{{
                    isSending
                      ? texts.rsvp.modal.sendingButtonLabel
                      : texts.rsvp.modal.submitButtonLabel
                  }}</span>
                </button>

                <!-- Error feedback -->
                <p
                  v-if="errorMessage"
                  class="text-xs text-red-600 font-sans font-medium text-center mt-1"
                >
                  {{ errorMessage }}
                </p>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";
import texts from "../data/texts.json";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  guestId: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "51999999999",
  },
  guestName: {
    type: String,
    default: "",
  },
  passes: {
    type: Number,
    default: 2,
  },
});

const emit = defineEmits(["close"]);

const isSubmitted = ref(false);
const sucessConfirmation = ref(false);
const isSending = ref(false);
const errorMessage = ref("");
const hasBeenSubmitted = ref(false);
const submittedAttending = ref("");

const form = ref({
  fullName: "",
  phone: "",
  attending: "",
  people: 1,
  wishes: "",
});

const closeModal = () => {
  emit("close");
  // Reset states after modal transition finishes to avoid flickering
  setTimeout(() => {
    isSending.value = false;
    errorMessage.value = "";
    if (!hasBeenSubmitted.value) {
      isSubmitted.value = false;
      form.value = {
        fullName: "",
        phone: "",
        attending: "",
        people: 1,
        wishes: "",
      };
    } else {
      isSubmitted.value = true;
      form.value.attending = submittedAttending.value;
    }
  }, 400);
};

const submitForm = async () => {
  isSending.value = true;
  errorMessage.value = "";

  const payload = {
    id: props.guestId,
    fullName: form.value.fullName,
    phone: form.value.phone,
    attending: form.value.attending,
    people: form.value.attending === "yes" ? form.value.people : 0,
    wishes: form.value.wishes,
  };

  try {
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 302 || response.ok) {
      isSubmitted.value = true;
      hasBeenSubmitted.value = true;
      submittedAttending.value = form.value.attending;
    } else {
      // En caso de otros códigos de error (400, 402, 403, 500, etc.)
      console.error("Error del servidor, código HTTP:", response.status);
      errorMessage.value = `Error al registrar tu confirmación (Código ${response.status}). Por favor, intenta nuevamente.`;
    }
  } catch (error) {
    console.error("Error de conexión:", error);
    errorMessage.value =
      "No pudimos conectar con el servidor. Por favor, verifica tu conexión e intenta de nuevo.";
  } finally {
    isSending.value = false;
  }
};

const getPrimaryGuestName = (name) => {
  if (!name) return "";
  // Extrae solo el nombre del invitado principal, hasta antes del "y" o "e"
  // Ejemplo: "Haydee Arica y Álvaro Sanz" -> "Haydee Arica"
  // Ejemplo: "Gustavo Galarza e Ivonne" -> "Gustavo Galarza"
  const parts = name.split(/\s+[ye]\s+/i);
  return parts[0].trim();
};

watch(
  () => props.show,
  (newVal) => {
    if (typeof window !== "undefined") {
      if (newVal) {
        document.body.style.overflow = "hidden";
        if (hasBeenSubmitted.value) {
          isSubmitted.value = true;
          form.value.attending = submittedAttending.value;
        } else {
          if (props.guestName && !form.value.fullName) {
            form.value.fullName = getPrimaryGuestName(props.guestName);
          }
          if (props.passes) {
            form.value.people = props.passes;
          }
        }
      } else {
        document.body.style.overflow = "";
      }
    }
  },
);

onUnmounted(() => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
/* Backdrop transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Modal Card transition (zoom and slide in) */
.fade-enter-active .paper-card {
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.4s ease;
}
.fade-leave-active .paper-card {
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
}
.fade-enter-from .paper-card {
  opacity: 0;
  transform: translateY(25px) scale(0.96);
}
.fade-leave-to .paper-card {
  opacity: 0;
  transform: translateY(25px) scale(0.96);
}

/* Form swap transition (smooth page flip effect) */
.modal-swap-enter-active,
.modal-swap-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-swap-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.modal-swap-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
