<template>
  <section
    id="details"
    class="bg-texture-marmol py-20 select-none bg-ivory-dark/30"
    data-aos="fade-up"
  >
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- CEREMONIA CARD (LEFT) -->
        <PaperCard
          shape="left"
          is-white
          class="w-full max-w-md mx-auto"
          containerClass="max-md:w-[95%]"
        >
          <div>
            <!-- Title -->
            <h4 class="location-title font-new-icon">Ceremonia</h4>
            <h5 class="location-subtitle font-new-icon">Religiosa</h5>

            <img :src="ChurchGif" width="80px" class="m-auto mb-4" />

            <!-- Building Name -->
            <p class="location-name">Parroquia Nuestra Señora de Luján</p>

            <!-- Address -->
            <p class="location-address">Av. Pergamino 203, Lima</p>

            <!-- Date Block (Classic Invitation Style) -->
            <div class="location-time-block">
              <span class="location-time-text">17:00 hs</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="location-actions">
            <a
              href="https://maps.google.com/?q=Av.+Pergamino+203,+Lima"
              target="_blank"
              class="location-btn"
            >
              Ver Ubicación
            </a>
          </div>
        </PaperCard>

        <!-- CELEBRACION CARD (RIGHT) -->
        <PaperCard
          shape="right"
          is-white
          class="w-full max-w-md mx-auto"
          containerClass="max-md:w-[95%]"
        >
          <div>
            <!-- Title -->
            <h4 class="location-title font-new-icon-serif">Recepción</h4>
            <h5 class="location-subtitle font-new-icon-serif">& Fiesta</h5>

            <img :src="WineGif" width="80px" class="m-auto mb-4" />

            <!-- Building Name -->
            <p class="location-name">Salón de Fiestas Avril</p>

            <!-- Address -->
            <p class="location-address">Av. Los Reartes 12, Lima</p>

            <!-- Date Block (Classic Invitation Style) -->
            <div class="location-time-block">
              <span class="location-time-text">19:30 hs</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="location-actions">
            <a
              href="https://maps.google.com/?q=Av.+Los+Reartes+12,+Lima"
              target="_blank"
              class="location-btn"
            >
              Ver Ubicación
            </a>
          </div>
        </PaperCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PaperCard from "../../../components/PaperCard.vue";
import WineGif from "../../../assets/images/gifs/wine.gif";
import ChurchGif from "../../../assets/images/gifs/church.gif";

const isVisible = ref(false);
const churchSvgRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Controla que el bucle solo corra cuando esté en pantalla para cuidar el rendimiento
        isVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.1 },
  );

  if (churchSvgRef.value) {
    observer.observe(churchSvgRef.value);
  }
});
</script>

<style scoped>
.location-title {
  @apply text-2xl md:text-3xl text-primary uppercase mb-1 leading-snug font-bold;
}

.location-subtitle {
  @apply text-lg md:text-xl text-secondary uppercase mb-6 leading-none font-bold;
}

.location-icon {
  @apply w-28 h-28 mx-auto mb-6;
}

.location-name {
  @apply font-inria font-bold text-sm md:text-base mb-1 px-4 leading-snug;
}

.location-address {
  @apply font-serif italic text-xs text-slate-muted mb-6;
}

.location-time-block {
  @apply w-full max-w-[260px] mx-auto border-y border-secondary py-3 mb-8 flex justify-center items-center gap-3 text-xs font-serif;
}

.location-time-text {
  @apply font-bold text-secondary text-lg;
}

.location-actions {
  @apply flex flex-col items-center gap-3 w-full mt-auto;
}

.location-btn {
  @apply w-full max-w-[200px] text-center py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full font-sans font-bold text-xs uppercase transition-all duration-300 shadow-sm;
}

/* Estado inicial del SVG de la iglesia (trazos invisibles) */
.church-svg path,
.church-svg rect,
.church-svg circle,
.church-svg line:not([stroke-dasharray]) {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
}

/* Animación de dibujo en bucle cuando es visible */
.church-svg.is-visible path,
.church-svg.is-visible rect,
.church-svg.is-visible circle,
.church-svg.is-visible line:not([stroke-dasharray]) {
  animation: draw-church-loop 6s ease-in-out infinite;
}

@keyframes draw-church-loop {
  0% {
    stroke-dashoffset: 300;
  }
  40% {
    stroke-dashoffset: 0;
  }
  70% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 300;
  }
}
</style>
