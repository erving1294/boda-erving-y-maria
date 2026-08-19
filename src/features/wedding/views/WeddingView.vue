<template>
  <div
    class="relative bg-ivory min-h-screen text-slate-dark selection:bg-gold/30 selection:text-sage"
  >
    <!-- Welcome Overlay screen -->
    <WelcomeOverlay @enter="onEnter" />
    <!-- <WelcomePaper /> -->
    <!-- Main Invitation content -->
    <div class="w-full">
      <!-- 1. Floating Music Controller -->
      <MusicControl />

      <!-- 2. Banner/Portada -->
      <HeroSection :active="ready" />

      <DetailSection />
      <!-- 3. Contador -->
      <CountdownSection />
      <!-- 5. Invitados (Pase de invitados) -->
      <!-- <GuestsSection :guest-name="guestName" :passes="passes" /> -->

      <!-- 6. Ubicaciones -->
      <LocationsSection />

      <!-- 9. Regalos -->
      <GiftsSection />

      <!-- 10. Código de Vestimenta -->
      <DressCodeSection />
      <HistorySection />
      <BannerImage />

      <!-- 11. Confirmar Asistencia -->
      <RsvpSection />

      <!-- 13. Footer -->
      <footer
        class="bg-primary text-ivory py-16 text-center select-none border-t border-gold/10"
      >
        <div class="max-w-md mx-auto px-6">
          <h2 class="title !font-new-icon !text-white">Ervíng & María</h2>
          <p class="font-serif italic text-xl text-white max-w-xs mx-auto mb-8">
            "Donde tú vayas, yo iré; donde tú vivas, yo viviré."
          </p>
          <div class="w-12 h-[1px] bg-white mx-auto mb-6"></div>
          <p class="text-[10px] text-white tracking-widest uppercase">
            © 2026 Ervíng & María. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Import Subcomponents
import WelcomeOverlay from "../components/WelcomeOverlay.vue";
import MusicControl from "../components/MusicControl.vue";
import HeroSection from "../components/HeroSection.vue";
import CountdownSection from "../components/CountdownSection.vue";
import ParentsSection from "../components/ParentsSection.vue";
import GuestsSection from "../components/GuestsSection.vue";
import LocationsSection from "../components/LocationsSection.vue";
import TimelineSection from "../components/TimelineSection.vue";
import HistorySection from "../components/HistorySection.vue";
import GiftsSection from "../components/GiftsSection.vue";
import DressCodeSection from "../components/DressCodeSection.vue";
import RsvpSection from "../components/RsvpSection.vue";
import ContactSection from "../components/ContactSection.vue";
import DetailSection from "../components/DetailSection.vue";
import BannerImage from "../../../components/BannerImage.vue";

// Reactive state
const ready = ref(false);
const guestName = ref("");
const passes = ref(2);

const onEnter = () => {
  ready.value = true;
};

onMounted(() => {
  // Force scroll to top (0, 0) on page load/refresh
  if (typeof window !== "undefined") {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // Parse Query Parameters
    const params = new URLSearchParams(window.location.search);

    // Support both Spanish and English keys
    const rawGuest = params.get("invitado") || params.get("guest");
    const rawPasses = params.get("pases") || params.get("passes");

    if (rawGuest) {
      guestName.value = decodeURIComponent(rawGuest).replace(/\+/g, " ");
    }
    if (rawPasses) {
      const p = parseInt(rawPasses, 10);
      if (!isNaN(p) && p > 0) {
        passes.value = p;
      }
    }
  }
});
</script>
