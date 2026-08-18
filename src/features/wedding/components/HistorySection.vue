<template>
  <section
    class="bg-texture-white flex flex-col flex-none justify-center items-center gap-[10px] w-full h-min pb-[60px] relative overflow-hidden"
  >
    <!-- Main Frame Wrapper -->
    <div
      class="relative flex-none w-[425px] h-[517px] overflow-clip max-sm:!w-[356px] max-sm:!h-[398px]"
    >
      <!-- Wedding Frame Image Container -->
      <div class="block">
        <div
          class="absolute top-0 bottom-0 right-0 flex-none w-[425px] overflow-clip will-change-[filter] max-sm:!bottom-[unset] max-sm:!h-[383px] max-sm:!left-[calc(50%-173px)] max-sm:!top-[calc(50%-178.5px)] max-sm:!right-[unset] max-sm:!w-[346px]"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="marcoBoda"
              alt="Marco de boda"
            />
          </div>
        </div>
      </div>

      <!-- Couple Photo Container (Cusco) -->
      <div class="block">
        <div
          class="absolute top-[calc(50.4836%-178.5px)] left-[calc(50.5%-173.5px)] z-0 flex-none w-[347px] h-[357px] overflow-clip will-change-[filter] max-sm:!h-[263px] max-sm:!w-[257px] max-sm:!top-[calc(50.2513%-116px)] max-sm:!left-[calc(50.5618%-127px)]"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="cuscoImg"
              alt="Nuestra foto en Cusco"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Description Text -->
    <div class="max-sm:px-4">
      <p
        class="text-center max-w-[400px] m-auto font-inria text-lg leading-relaxed text-slate-muted"
      >
        Todo comenzó en enero del 2017, sin imaginar que ese sería el primer
        capítulo de nuestra historia. Hoy, con el corazón lleno de gratitud,
        estamos listos para escribir nuestro…
      </p>
      <p
        class="font-cookie text-center italic text-[26px] mt-2 max-w-[400px] m-auto"
      >
        Para siempre
      </p>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import marcoBoda from "../../../assets/images/marco_boda.jpg";
import cuscoImg from "../../../assets/images/cusco.webp";

// Import Swiper styles in script
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination, Autoplay];

const story = [
  {
    period: "El Comienzo",
    title: "Cómo nos conocimos",
    desc: "Un cruce de miradas casual, una conversación improvisada y el inicio de una maravillosa amistad que pronto se convirtió en un amor profundo.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
  },
  {
    period: "El Camino",
    title: "El Noviazgo",
    desc: "Años llenos de risas, viajes compartidos, apoyo mutuo y crecimiento continuo, confirmando que queríamos pasar el resto de nuestras vidas juntos.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
  },
  {
    period: "La Propuesta",
    title: "El Sí, Quiero",
    desc: "Bajo un atardecer mágico, con los nervios a flor de piel y el mar de testigo, Ervíng hizo la gran pregunta y María respondió con el alma: ¡Sí!",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800",
  },
];
</script>
