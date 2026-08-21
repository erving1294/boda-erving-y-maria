<template>
  <section
    id="contact"
    class="py-16 bg-white text-center select-none"
    data-aos="fade-up"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-xs uppercase tracking-[0.2em] text-slate-muted mb-2 font-semibold">
          {{ texts.contact.title }}
        </h2>
        <h3 class="text-4xl md:text-5xl">{{ texts.contact.subtitle }}</h3>
        <div class="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
      </div>

      <p class="text-sm text-slate-muted italic max-w-md mx-auto mb-12">
        {{ texts.contact.description }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-slate-dark">
        <!-- Bride Card -->
        <div class="paper-card p-6 rounded-3xl flex flex-col items-center">
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/45 mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
              alt="Novia"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span class="text-xs uppercase font-bold tracking-widest text-gold-hover mb-1">{{ texts.contact.brideLabel }}</span>
          <h4 class="font-serif text-lg font-bold text-sage mb-4">{{ texts.contact.brideName }}</h4>
          <a
            :href="`https://api.whatsapp.com/send?phone=${bridePhone}&text=${encodeURIComponent(texts.contact.brideWhatsappMessage)}`"
            target="_blank"
            class="px-6 py-2 bg-sage hover:bg-sage-dark text-white rounded-full font-sans font-semibold text-xs tracking-wider uppercase shadow-sm transition duration-300 flex items-center gap-2"
          >
            <!-- WhatsApp SVG Icon -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.512 5.281 3.51 8.487-.005 6.66-5.344 11.997-11.957 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.072 11.9 1.072c-5.442 0-9.866 4.42-9.87 9.865 0 1.761.47 3.48 1.364 5.011l-1.026 3.75 3.868-1.015L6.647 19.15z" />
            </svg>
            {{ texts.contact.brideQueryButton }}
          </a>
        </div>

        <!-- Groom Card -->
        <div class="paper-card p-6 rounded-3xl flex flex-col items-center">
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/45 mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
              alt="Novio"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span class="text-xs uppercase font-bold tracking-widest text-gold-hover mb-1">{{ texts.contact.groomLabel }}</span>
          <h4 class="font-serif text-lg font-bold text-sage mb-4">{{ texts.contact.groomName }}</h4>
          <a
            :href="`https://api.whatsapp.com/send?phone=${groomPhone}&text=${encodeURIComponent(texts.contact.groomWhatsappMessage)}`"
            target="_blank"
            class="px-6 py-2 bg-sage hover:bg-sage-dark text-white rounded-full font-sans font-semibold text-xs tracking-wider uppercase shadow-sm transition duration-300 flex items-center gap-2"
          >
            <!-- WhatsApp SVG Icon -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.512 5.281 3.51 8.487-.005 6.66-5.344 11.997-11.957 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.072 11.9 1.072c-5.442 0-9.866 4.42-9.87 9.865 0 1.761.47 3.48 1.364 5.011l-1.026 3.75 3.868-1.015L6.647 19.15z" />
            </svg>
            {{ texts.contact.groomQueryButton }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import texts from "../data/texts.json";

const bridePhone = '51999999999' // replace with actual number if needed, matches original html format
const groomPhone = '51999999999'
</script>
