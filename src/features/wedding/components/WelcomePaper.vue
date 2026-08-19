<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits<{
  open: [];
  opened: [];
  close: [];
  closed: [];
}>();

const isOpen = ref(false);
const isAnimating = ref(false);
const isVisible = ref(true);

const OPEN_DURATION = 1200;
const OVERLAY_DURATION = 850;
const CLOSE_DURATION = 1200;

/**
 * Bloqueamos el scroll mientras
 * el sobre está visible.
 */
const lockScroll = () => {
  if (!import.meta.client) return;

  document.body.style.overflow = "hidden";
};

/**
 * Liberamos el scroll cuando
 * el sobre desaparece.
 */
const unlockScroll = () => {
  if (!import.meta.client) return;

  document.body.style.overflow = "";
};

/**
 * Abrir sobre
 */
const open = () => {
  if (isOpen.value || isAnimating.value) {
    return;
  }

  isAnimating.value = true;

  /*
   * Activamos el estado abierto.
   *
   * Esto inicia simultáneamente:
   *
   * - desaparición del fondo
   * - desaparición del sello
   * - apertura de la solapa
   */
  isOpen.value = true;

  /*
   * IMPORTANTE:
   *
   * Emitimos inmediatamente.
   *
   * No esperamos a que termine
   * la animación del sobre.
   *
   * El HeroSection empieza a aparecer
   * mientras el sobre todavía se está abriendo.
   */
  emit("open");

  /*
   * Después de 850ms retiramos
   * completamente el overlay.
   *
   * Para este momento el usuario
   * ya debería estar viendo el Hero.
   */
  window.setTimeout(() => {
    isVisible.value = false;

    unlockScroll();
  }, OVERLAY_DURATION);

  /*
   * La animación de apertura
   * termina aproximadamente aquí.
   */
  window.setTimeout(() => {
    isAnimating.value = false;

    emit("opened");
  }, OPEN_DURATION);
};

/**
 * Cerrar sobre
 *
 * Lo dejamos disponible para poder
 * controlar el componente desde el padre.
 */
const close = () => {
  if (!isOpen.value || isAnimating.value) {
    return;
  }

  isAnimating.value = true;

  /*
   * Primero volvemos a mostrar
   * el overlay.
   */
  isVisible.value = true;

  lockScroll();

  /*
   * Esperamos un frame para permitir
   * que Vue renderice nuevamente
   * el estado inicial.
   */
  requestAnimationFrame(() => {
    isOpen.value = false;
  });

  emit("close");

  window.setTimeout(() => {
    isAnimating.value = false;

    emit("closed");
  }, CLOSE_DURATION);
};

/**
 * Toggle
 */
const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

/**
 * Exponemos los métodos para poder
 * controlar el componente desde el padre.
 */
defineExpose({
  open,
  close,
  toggle,
  isOpen,
});

onMounted(() => {
  lockScroll();
});

onUnmounted(() => {
  unlockScroll();
});
</script>

<template>
  <Transition name="welcome">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[9999] h-dvh w-screen overflow-hidden bg-[#f5eddf]"
    >
      <div
        class="relative h-full w-full [perspective:1800px]"
        :class="{
          'is-open': isOpen,
        }"
      >
        <!-- =================================================
             1. PARTE POSTERIOR DEL SOBRE
             ================================================= -->

        <div
          class="absolute inset-0 z-10 overflow-hidden bg-[#f5eddf] transition-opacity duration-[400ms] ease-out [.is-open_&]:opacity-0"
        >
          <!-- Luz / textura -->

          <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.38),transparent_65%)]"
          />

          <!-- Textura -->

          <div
            class="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(0deg,rgba(130,108,80,0.018)_0,rgba(130,108,80,0.018)_1px,transparent_1px,transparent_4px)]"
          />

          <!-- Líneas posteriores -->

          <svg
            class="absolute inset-0 h-full w-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 285 L 700 1080"
              fill="none"
              stroke="rgba(174,153,124,0.23)"
              stroke-width="1.1"
            />

            <path
              d="M 1920 285 L 1220 1080"
              fill="none"
              stroke="rgba(174,153,124,0.23)"
              stroke-width="1.1"
            />
          </svg>
        </div>

        <!-- =================================================
             2. SOLAPA
             ================================================= -->

        <div
          class="absolute left-0 top-0 z-40 h-[63vh] w-full origin-top transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.75,.25,1)] [.is-open_&]:[transform:rotateX(112deg)] max-md:h-[58vh] max-sm:h-[53vh]"
        >
          <svg
            class="h-full w-full overflow-visible"
            viewBox="0 0 1920 670"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <!-- =========================================
                 SOLAPA PRINCIPAL
                 ========================================= -->

            <path
              d="
                M 0 0
                H 1920
                V 95

                C 1890 170,
                  1815 210,
                  1740 245

                C 1640 292,
                  1570 335,
                  1500 390

                C 1400 468,
                  1290 540,
                  1160 595

                C 1075 631,
                  1010 650,
                  960 664

                C 910 650,
                  845 631,
                  760 595

                C 630 540,
                  520 468,
                  420 390

                C 350 335,
                  280 292,
                  180 245

                C 105 210,
                  30 170,
                  0 95

                Z
              "
              fill="#f8f1e5"
            />

            <!-- =========================================
                 BORDE EXTERIOR
                 ========================================= -->

            <path
              d="
                M 45 20

                C 80 125,
                  180 165,
                  285 220

                C 395 277,
                  465 340,
                  560 410

                C 665 488,
                  775 560,
                  880 610

                C 915 627,
                  940 638,
                  960 645

                C 980 638,
                  1005 627,
                  1040 610

                C 1145 560,
                  1255 488,
                  1360 410

                C 1455 340,
                  1525 277,
                  1635 220

                C 1740 165,
                  1840 125,
                  1875 20
              "
              fill="none"
              stroke="rgba(183,162,132,0.30)"
              stroke-width="1.3"
            />

            <!-- =========================================
                 BORDE INTERIOR
                 ========================================= -->

            <path
              d="
                M 75 22

                C 110 110,
                  195 150,
                  300 205

                C 405 260,
                  485 328,
                  575 395

                C 680 475,
                  790 545,
                  885 590

                C 920 607,
                  945 618,
                  960 625

                C 975 618,
                  1000 607,
                  1035 590

                C 1130 545,
                  1240 475,
                  1345 395

                C 1435 328,
                  1515 260,
                  1620 205

                C 1725 150,
                  1810 110,
                  1845 22
              "
              fill="none"
              stroke="rgba(205,186,157,0.23)"
              stroke-width="1"
            />
          </svg>
        </div>

        <!-- =================================================
             3. SELLO
             ================================================= -->

        <button
          type="button"
          aria-label="Abrir invitación"
          :disabled="isAnimating"
          @click="open"
          class="absolute left-1/2 top-[57%] z-50 flex aspect-[0.84] w-[clamp(105px,12vw,175px)] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[47%_45%_48%_44%/43%_48%_45%_47%] bg-[linear-gradient(145deg,#fffaf1_0%,#eee2cf_28%,#d9c4a5_55%,#f4e7d4_75%,#d8c1a0_100%)] shadow-[0_7px_12px_rgba(89,68,42,0.22),0_2px_3px_rgba(89,68,42,0.15),inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-3px_5px_rgba(132,102,68,0.20)] transition-all duration-700 hover:scale-[1.035] [.is-open_&]:pointer-events-none [.is-open_&]:scale-[0.12] [.is-open_&]:rotate-[18deg] [.is-open_&]:opacity-0 max-md:top-[54%] max-sm:top-[51%] max-sm:w-[clamp(90px,25vw,130px)]"
        >
          <!-- ===========================================
               BORDE DEL SELLO
               =========================================== -->

          <span
            class="flex h-[87%] w-[79%] items-center justify-center rounded-[46%_46%_43%_43%] border-2 border-[rgba(192,168,131,0.75)] shadow-[inset_0_0_0_2px_rgba(255,252,244,0.72)]"
          >
            <span class="relative flex flex-col items-center gap-1">
              <!-- Flor -->

              <svg
                viewBox="0 0 50 60"
                class="h-11 w-9 opacity-80"
                aria-hidden="true"
              >
                <path
                  d="M25 52 C25 42 25 31 25 19"
                  fill="none"
                  stroke="#c7ae88"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <path
                  d="
                    M25 39
                    C18 39 13 35 12 30
                    C18 30 23 33 25 39
                  "
                  fill="none"
                  stroke="#c7ae88"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <path
                  d="
                    M25 34
                    C32 34 37 30 38 24
                    C32 24 27 27 25 34
                  "
                  fill="none"
                  stroke="#c7ae88"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <path
                  d="
                    M25 20
                    C19 18 16 14 18 9
                    C20 5 24 6 25 10
                    C26 6 30 5 32 9
                    C34 14 31 18 25 20
                  "
                  fill="none"
                  stroke="#c7ae88"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <!-- Iniciales -->

              <span
                class="font-serif text-[clamp(17px,1.6vw,26px)] font-normal tracking-[3px] text-[#c4aa82]"
              >
                C &amp; E
              </span>
            </span>
          </span>
        </button>

        <!-- =================================================
             INDICACIÓN
             ================================================= -->

        <div
          class="absolute left-1/2 top-[calc(57%+clamp(90px,9vw,125px))] z-50 -translate-x-1/2 whitespace-nowrap text-[clamp(8px,.8vw,11px)] uppercase tracking-[3px] text-[rgba(145,121,87,0.65)] transition-opacity duration-300 [.is-open_&]:opacity-0 max-md:top-[calc(54%+100px)] max-sm:top-[calc(51%+85px)]"
        >
          Toca el sello para abrir
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/*
 * El WelcomePaper desaparece suavemente
 * después de iniciar la apertura.
 */

.welcome-enter-active,
.welcome-leave-active {
  transition:
    opacity 650ms ease,
    transform 650ms ease;
}

.welcome-enter-from,
.welcome-leave-to {
  opacity: 0;

  transform: scale(1.03);
}

/*
 * Respeto por usuarios que tienen
 * activada la reducción de movimiento.
 */

@media (prefers-reduced-motion: reduce) {
  .welcome-enter-active,
  .welcome-leave-active {
    transition-duration: 1ms;
  }
}
</style>
