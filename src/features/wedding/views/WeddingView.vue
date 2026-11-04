<template>
  <!-- If invitation is invalid: show "Invitación no disponible" -->
  <InvalidInvitation v-if="!isValidGuest" />

  <!-- If invitation is valid: show full wedding experience -->
  <div
    v-else
    class="relative bg-ivory min-h-screen text-slate-dark selection:bg-gold/30 selection:text-sage"
  >
    <!-- Welcome Overlay screen -->
    <WelcomeOverlay @enter="onEnter" />
    <!-- Main Invitation content -->
    <div class="w-full">
      <!-- 1. Floating Music Controller -->
      <MusicControl />
      <!-- 2. Banner/Portada -->
      <HeroSection :active="ready" :blockScroll="false" />
      <!-- 3. Carta -->
      <DetailSection />
      <!-- 4. Cuenta Regresiva -->
      <CountdownSection />
      <!-- 5. Ubicaciones -->
      <LocationsSection />
      <!-- Timeline / Itinerario -->
      <TimelineSection />
      <!-- 8. Carrusel de imagenes -->
      <HistorySection />

      <!-- 6. Regalos -->
      <GiftsSection />
      <!-- 7. Código de Vestimenta -->
      <DressCodeSection />

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
        :guest-id="guestId"
        :guest-name="guestName"
        :passes="passes"
        :queue="isQueue"
      />
      <!-- 13. Footer -->
      <footer
        class="bg-[#4b6865] font-laparisienne py-16 text-center select-none border-t border-gold/10"
      >
        <div class="max-w-md mx-auto px-6">
          <h2 class="title !font-laparisienne !text-white">
            {{ texts.hero.title2 }} y {{ texts.hero.title1 }}
          </h2>
          <p class="font-badoni italic text-xl text-white my-4 mb-8">
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
import InvalidInvitation from "../components/InvalidInvitation.vue";
import MusicControl from "../components/MusicControl.vue";
import HeroSection from "../components/HeroSection.vue";
import CountdownSection from "../components/CountdownSection.vue";
import GuestsSection from "../components/GuestsSection.vue";
import LocationsSection from "../components/LocationsSection.vue";
import TimelineSection from "../components/TimelineSection.vue";
import HistorySection from "../components/HistorySection.vue";
import GiftsSection from "../components/GiftsSection.vue";
import DressCodeSection from "../components/DressCodeSection.vue";
import RsvpSection from "../components/RsvpSection.vue";
import DetailSection from "../components/DetailSection.vue";
import BannerImage from "../../../components/BannerImage.vue";
import guests from "../data/guests.json";
import texts from "../data/texts.json";

function findGuest(invitedCode) {
  if (!invitedCode || typeof invitedCode !== "string") return null;
  const cleanCode = invitedCode.trim().toUpperCase();
  if (!cleanCode) return null;

  return (
    guests.find((g) => {
      if (g.code && g.code.trim().toUpperCase() === cleanCode) return true;
      if (g.url) {
        try {
          const u = new URL(g.url);
          const urlCode = u.searchParams.get("invited");
          if (urlCode && urlCode.trim().toUpperCase() === cleanCode) return true;
        } catch {
          const match = g.url.match(/[?&]invited=([^&#]+)/i);
          if (
            match &&
            decodeURIComponent(match[1]).trim().toUpperCase() === cleanCode
          ) {
            return true;
          }
        }
      }
      return false;
    }) || null
  );
}

function getGuestFromCurrentUrl() {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const invitedCode = params.get("invited") || params.get("code");
  return findGuest(invitedCode);
}

const currentGuest = getGuestFromCurrentUrl();

// Reactive state
const isValidGuest = ref(Boolean(currentGuest));
const ready = ref(false);
const guestId = ref(currentGuest?.code || "");
const guestName = ref(currentGuest?.name || "");
const passes = ref(currentGuest?.invitationCount || 2);
const isQueue = ref(Boolean(currentGuest?.queue));
const showInviteSections = ref(Boolean(currentGuest));

const onEnter = () => {
  ready.value = true;
};

onMounted(() => {
  if (!isValidGuest.value) {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    return;
  }

  // Preload hero fonts early in background while overlay is active
  if (typeof document !== "undefined" && document.fonts) {
    try {
      document.fonts.load('60px "laparisienne"');
      document.fonts.load('italic 24px "badoni"');
    } catch (e) {
      // Ignore background preload errors
    }
  }

  // Force scroll to top (0, 0) on page load/refresh
  if (typeof window !== "undefined") {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
});
</script>
