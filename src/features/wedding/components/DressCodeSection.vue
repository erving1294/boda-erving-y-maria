<template>
  <section
    id="dresscode"
    class="bg-texture-flores py-20 bg-ivory-dark/30 select-none"
    data-aos="fade-up"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2
          class="text-xs uppercase tracking-[0.2em] text-slate-muted mb-2 font-semibold"
        >
          Dress Code
        </h2>
        <h3 class="text-4xl md:text-5xl font-cookie text-primary">
          Código de Vestimenta
        </h3>
        <div class="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
      </div>

      <PaperCard shape="standard" is-white class="max-w-2xl mx-auto">
        <div class="w-full">
          <p class="font-serif italic text-lg text-primary font-medium mb-8">
            "Queremos que te sientas cómodo y espectacular en nuestro gran día."
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-8">
            <!-- Women Dress Code -->
            <div class="flex gap-4">
              <!-- Dress Icon SVG -->
              <div
                class="w-12 h-12 bg-tertiary/20 rounded-full flex justify-center items-center text-primary shrink-0 border border-gold/20"
              >
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 2c1.1 0 2 .9 2 2v1.07C17.07 5.56 19 8.08 19 11v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-8c0-2.92 1.93-5.44 5-5.93V4c0-1.1.9-2 2-2zm5 9H7v8h10v-8zm-5-3c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-new-icon text-lg text-primary font-bold mb-2">
                  Para Ellas
                </h4>
                <p class="font-inria text-sm text-slate-muted leading-relaxed">
                  Vestido corto, largo o midi de cóctel, mono elegante o traje
                  sastre de vestir.
                </p>
              </div>
            </div>

            <!-- Men Dress Code -->
            <div class="flex gap-4">
              <!-- Suit / Hanger Icon SVG -->
              <div
                class="w-12 h-12 bg-tertiary/20 rounded-full flex justify-center items-center text-primary shrink-0 border border-gold/20"
              >
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 2a3 3 0 0 0-3 3v1H4v2h3v12h10V8h3V6h-5V5a3 3 0 0 0-3-3zm-1 4V5a1 1 0 1 1 2 0v1h-2z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-new-icon text-lg text-primary font-bold mb-2">
                  Para Ellos
                </h4>
                <p class="font-inria text-sm text-slate-muted leading-relaxed">
                  Traje completo, saco y pantalón de vestir con camisa de cuello
                  rígido. El uso de corbata es opcional.
                </p>
              </div>
            </div>
          </div>

          <div class="border-t border-gold/20 pt-6 text-center w-full">
            <span
              class="text-xs font-sans uppercase tracking-[0.2em] text-secondary font-bold block mb-2"
            >
              Nota Importante
            </span>
            <p
              class="font-serif text-xs text-slate-muted italic max-w-md mx-auto"
            >
              Agradecemos reservar el color blanco y el marfil exclusivamente
              para la novia. ¡Muchas gracias por tu comprensión!
            </p>
          </div>
        </div>
      </PaperCard>
    </div>
  </section>
</template>

<script setup>
import PaperCard from "../../../components/PaperCard.vue";
</script>
