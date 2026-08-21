<template>
  <div
    class="relative bg-ivory min-h-screen text-slate-dark selection:bg-gold/30 selection:text-sage"
  >
    <!-- Welcome Overlay screen -->
    <WelcomeOverlay @enter="onEnter" />
    <!-- Main Invitation content -->
    <div class="w-full">
      <!-- 1. Floating Music Controller -->
      <MusicControl />
      <!-- 2. Banner/Portada -->
      <HeroSection :active="ready" />
      <!-- 3. Carta -->
      <DetailSection />
      <!-- 4. Cuenta Regresiva -->
      <CountdownSection />
      <!-- 5. Ubicaciones -->
      <LocationsSection />
      <!-- 6. Regalos -->
      <GiftsSection />
      <!-- 7. Código de Vestimenta -->
      <DressCodeSection />
      <!-- 8. Carrusel de imagenes -->
      <HistorySection />
      <!-- 9. Banner con foto -->
      <BannerImage />
      <!-- 5. Invitados (Pase de invitados) -->
      <GuestsSection
        v-if="showInviteSections"
        :guest-name="guestName || undefined"
        :passes="passes"
      />
      <!-- 11. Confirmar Asistencia -->
      <RsvpSection
        v-if="showInviteSections"
        :guest-name="guestName"
        :passes="passes"
      />
      <!-- 13. Footer -->
      <footer
        class="bg-primary text-ivory py-16 text-center select-none border-t border-gold/10"
      >
        <div class="max-w-md mx-auto px-6">
          <h2 class="title !font-new-icon !text-white">{{ texts.hero.title1 }} & {{ texts.hero.title2 }}</h2>
          <p class="font-serif italic text-xl text-white max-w-xs mx-auto mb-8">
            "{{ texts.footer.quote }}"
          </p>
          <div class="w-12 h-[1px] bg-white mx-auto mb-6"></div>
          <p class="text-[10px] text-white tracking-widest uppercase">
            {{ texts.footer.copyright }}
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
import GuestsSection from "../components/GuestsSection.vue";
import LocationsSection from "../components/LocationsSection.vue";
import HistorySection from "../components/HistorySection.vue";
import GiftsSection from "../components/GiftsSection.vue";
import DressCodeSection from "../components/DressCodeSection.vue";
import RsvpSection from "../components/RsvpSection.vue";
import DetailSection from "../components/DetailSection.vue";
import BannerImage from "../../../components/BannerImage.vue";
import guests from "../data/guests.json";
import texts from "../data/texts.json";

// Reactive state
const ready = ref(false);
const guestName = ref("");
const passes = ref(2);
const showInviteSections = ref(false);

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
    const invitedCode = params.get("invited");

    if (invitedCode) {
      const guest = guests.find(
        (g) => g.code.trim().toUpperCase() === invitedCode.trim().toUpperCase(),
      );
      if (guest) {
        guestName.value = guest.name;
        passes.value = guest.invitationCount;
        showInviteSections.value = true;
      }
    }
  }
});
</script>
