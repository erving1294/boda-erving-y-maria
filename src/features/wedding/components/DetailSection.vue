<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import invitationCard from "../../../assets/images/sobre_verde.webp";
import paperWedding from "../../../assets/images/papel_boda.jpg";
import sealUrl from "../../../assets/images/Sello.png";

const detailSectionRef = ref(null);
const isIntersecting = ref(false);

let observer = null;

onMounted(() => {
  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting.value = entry.isIntersecting;
        });
      },
      {
        threshold: 0.7, // Trigger when 15% of the section is visible
      },
    );
    if (detailSectionRef.value) {
      observer.observe(detailSectionRef.value);
    }
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section
    ref="detailSectionRef"
    id="detailSection"
    class="w-full h-[728px] relative overflow-hidden"
  >
    <!-- Marble Texture Background Layer -->
    <div
      class="bg-texture-marmol absolute inset-0 rounded-[inherit] border-0"
    ></div>

    <!-- Multiply Overlay Layer -->
    <div
      class="absolute inset-0 mix-blend-multiply bg-[#faf5eb]/40 flex-none"
    ></div>

    <!-- Outer Card Wrapper -->
    <div
      class="absolute top-[79px] left-[calc(50%-223px)] w-[446px] h-[494px] overflow-visible max-sm:!top-[75px] max-sm:!w-[340px]"
    >
      <!-- Envelope Image -->
      <img
        :class="
          isIntersecting
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-[80px] md:-translate-x-[150px]'
        "
        :src="invitationCard"
        alt="Invitation Card"
        class="w-[340px] h-full object-cover max-sm:!h-[480px] transition-all duration-[1500ms] ease-out"
      />

      <!-- Inner Invitation Paper Card (Overlapping) -->
      <article
        class="absolute bottom-[-110px] right-[-24px] flex-none w-[460px] h-[550px] overflow-visible filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.25)] max-sm:!w-[340px] max-sm:!h-[520px] max-sm:!bottom-[-100px] max-sm:!right-[-52px] transition-all duration-[1500ms] ease-out"
        :class="
          isIntersecting
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-[80px] md:translate-x-[150px]'
        "
      >
        <!-- Paper Texture Background -->
        <div class="absolute inset-0 rounded-[inherit]">
          <img
            :src="paperWedding"
            alt="Paper Wedding"
            class="block w-full h-full rounded-[inherit] object-center object-contain"
          />
        </div>

        <!-- Wax Seal (Centered Top) -->
        <div
          class="absolute top-[-20px] left-[calc(50%-35px)] w-[70px] h-[74px] overflow-visible"
        >
          <div class="absolute inset-0 rounded-[inherit]">
            <img
              decoding="auto"
              loading="lazy"
              width="100"
              height="100"
              alt="Sello de cera"
              class="block w-full h-full rounded-[inherit] object-center object-cover"
              :src="sealUrl"
            />
          </div>
        </div>

        <!-- Invitation Details Content -->
        <div
          class="text-center absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center gap-3.5 w-[299px] h-min p-[10px]"
        >
          <!-- Animatable text wrapper -->
          <div
            class="flex flex-col items-center justify-center gap-3.5 w-full transition-all duration-[1500ms] delay-[1000ms] ease-out"
            :class="
              isIntersecting
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[30px]'
            "
          >
            <!-- Names Layout -->
            <div class="flex flex-col items-center justify-center w-full mb-1">
              <span class="font-new-icon text-4xl text-primary uppercase"
                >Ervíng</span
              >
              <span
                class="font-cookie text-xl text-secondary lowercase italic my-0.5"
                >&</span
              >
              <span class="font-new-icon text-4xl text-primary uppercase"
                >María</span
              >
            </div>

            <!-- Invite phrase -->
            <p
              class="font-inria text-sm tracking-[0.1em] text-slate-muted leading-normal max-w-[240px]"
            >
              Tenemos el honor de invitarlos a celebrar nuestro matrimonio.
            </p>
            <p
              class="font-inria text-sm tracking-[0.1em] text-slate-muted leading-normal max-w-[240px]"
            >
              Que se celebrará el próximo
            </p>

            <!-- Date Block (Reference Style) -->
            <div
              class="flex items-center justify-center w-full my-2 font-inria text-slate-muted select-none"
            >
              <!-- Left Side (Day of the week) -->
              <div
                class="flex-1 border-y border-primary py-2.5 text-xs tracking-[0.15em] uppercase text-center text-slate-muted"
              >
                Sábado
              </div>
              <!-- Center (Day number and Month) -->
              <div
                class="px-4 flex flex-col justify-center items-center min-w-[80px]"
              >
                <span class="text-3xl font-semibold text-primary leading-none"
                  >21</span
                >
                <span
                  class="text-[9px] tracking-[0.15em] uppercase font-bold text-primary mt-1.5 leading-none"
                  >Noviembre</span
                >
              </div>
              <!-- Right Side (Time) -->
              <div
                class="flex-1 border-y border-primary py-2.5 text-xs tracking-[0.12em] uppercase text-center text-slate-muted"
              >
                4:00 PM
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
