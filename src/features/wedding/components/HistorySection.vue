<template>
  <section
    id="history"
    class="py-16 bg-ivory select-none"
    data-aos="fade-up"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-xs uppercase tracking-[0.2em] text-slate-muted mb-2 font-semibold">
          Nuestra Historia
        </h2>
        <h3 class="text-4xl md:text-5xl">Momentos Compartidos</h3>
        <div class="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
      </div>

      <!-- Swiper Slider -->
      <div class="max-w-2xl mx-auto rounded-3xl overflow-hidden paper-card p-4 md:p-6">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="history-swiper"
        >
          <SwiperSlide
            v-for="(moment, index) in story"
            :key="index"
            class="flex flex-col items-center pb-8"
          >
            <!-- Story Image -->
            <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gold/10">
              <img
                :src="moment.image"
                :alt="moment.title"
                class="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
            
            <!-- Story Text -->
            <div class="text-center px-4">
              <span class="text-xs uppercase tracking-widest text-gold-hover font-semibold">{{ moment.period }}</span>
              <h4 class="font-serif text-2xl text-sage my-2 font-bold">{{ moment.title }}</h4>
              <p class="text-sm text-slate-muted italic leading-relaxed max-w-lg mx-auto">
                "{{ moment.desc }}"
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles in script
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const story = [
  {
    period: 'El Comienzo',
    title: 'Cómo nos conocimos',
    desc: 'Un cruce de miradas casual, una conversación improvisada y el inicio de una maravillosa amistad que pronto se convirtió en un amor profundo.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800'
  },
  {
    period: 'El Camino',
    title: 'El Noviazgo',
    desc: 'Años llenos de risas, viajes compartidos, apoyo mutuo y crecimiento continuo, confirmando que queríamos pasar el resto de nuestras vidas juntos.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
  },
  {
    period: 'La Propuesta',
    title: 'El Sí, Quiero',
    desc: 'Bajo un atardecer mágico, con los nervios a flor de piel y el mar de testigo, Ervíng hizo la gran pregunta y María respondió con el alma: ¡Sí!',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800'
  }
]
</script>

<style>
/* Custom Swiper pagination and arrow overrides */
.history-swiper {
  --swiper-theme-color: #C5A880;
  --swiper-navigation-size: 20px;
}

.history-swiper .swiper-button-next,
.history-swiper .swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.8);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(197, 168, 128, 0.2);
}

.history-swiper .swiper-button-next::after,
.history-swiper .swiper-button-prev::after {
  font-size: 14px;
  font-weight: bold;
}
</style>
