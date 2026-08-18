<template>
  <section
    id="guests"
    class="bg-texture-marmol py-20 bg-ivory-dark/30 select-none"
    data-aos="fade-up"
  >
    <div class="max-w-2xl mx-auto px-6">
      <!-- Ticket Card utilizing PaperCard component -->
      <PaperCard shape="standard" is-white class="max-w-md mx-auto">
        <div
          class="relative w-full border border-dashed border-gold/40 rounded-2xl py-8 px-6 md:px-8 bg-transparent"
        >
          <!-- Circular punch-outs on the sides to look like a ticket -->
          <div
            class="absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#faf7f3] border-r border-gold/20"
          ></div>
          <div
            class="absolute -right-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#faf7f3] border-l border-gold/20"
          ></div>

          <div
            class="text-xs uppercase tracking-[0.15em] text-slate-muted font-bold mb-3"
          >
            Invitación Especial Para
          </div>

          <h4
            class="font-new-icon text-3xl md:text-4xl text-primary font-bold mb-6"
          >
            {{ guestName || "Invitado Especial" }}
          </h4>

          <div
            class="w-16 h-16 rounded-full bg-tertiary/30 flex justify-center items-center mx-auto mb-4 border border-gold/30 shadow-sm"
          >
            <span
              class="font-inria text-3xl text-primary font-bold leading-none"
              >{{ passes || 2 }}</span
            >
          </div>

          <div
            class="text-xs uppercase tracking-[0.15em] text-secondary font-bold mb-6"
          >
            {{ passes === 1 ? "Pase Individual" : "Pases Disponibles" }}
          </div>

          <div class="w-12 h-[1px] bg-gold/30 mx-auto mb-6"></div>

          <p
            class="font-serif italic text-xs text-slate-muted leading-relaxed max-w-xs mx-auto"
          >
            "Tu presencia es muy importante para nosotros. Por favor,
            confírmanos si podrás asistir."
          </p>
        </div>
      </PaperCard>
    </div>
  </section>
</template>

<script setup>
import PaperCard from "../../../components/PaperCard.vue";

defineProps({
  guestName: {
    type: String,
    default: "",
  },
  passes: {
    type: Number,
    default: 2,
  },
});
</script>
