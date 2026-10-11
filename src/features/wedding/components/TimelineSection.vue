<template>
  <section
    id="timeline"
    class="bg-fondo-verde py-20 select-none overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        class="w-full max-w-xl mx-auto"
        :initial="{ opacity: 0, y: 50, scale: 0.98 }"
        :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 1.2, ease: 'easeOut' }"
        :viewport="{ once: false, amount: 0.2 }"
      >
        <PaperCard
          shape="standard"
          is-white
          show-seal
          has-foliage
          class="w-full"
          containerClass="max-md:w-[100%]"
          contentClass="!px-4 sm:!px-8 !py-10"
        >
          <div class="w-full flex flex-col items-center">
            <!-- Header -->
            <div class="text-center mb-4 w-full">
              <h4 class="title text-4xl sm:text-5xl mb-1">
                {{ texts.timeline.title }}
              </h4>
              <h5 class="description mt-4 !mb-1 px-[84px] max-md:px-0">
                {{ texts.timeline.subtitle }}
              </h5>
            </div>

            <!-- Timeline Events List -->
            <div class="w-full max-w-md mx-auto flex flex-col">
              <motion.div
                v-for="(event, index) in events"
                :key="index"
                class="flex items-center group relative min-h-[76px] sm:min-h-[84px]"
                :initial="{ opacity: 0, x: 20 }"
                :while-in-view="{ opacity: 1, x: 0 }"
                :transition="{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }"
                :viewport="{ once: false, amount: 0.3 }"
              >
                <!-- Left Column: Icon -->
                <div
                  class="w-14 sm:w-16 h-12 flex items-center justify-end pr-2.5 sm:pr-3 shrink-0 text-primary group-hover:text-secondary transition-colors duration-300"
                >
                  <div
                    class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
                  >
                    <!-- Church / Capilla -->
                    <svg
                      v-if="event.icon === 'church'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <line x1="27" y1="4" x2="27" y2="12" />
                      <line x1="23" y1="7" x2="31" y2="7" />
                      <polyline points="19,19 27,12 35,19" />
                      <line x1="19" y1="19" x2="19" y2="24" />
                      <line x1="35" y1="19" x2="35" y2="24" />
                      <line x1="19" y1="24" x2="11" y2="28" />
                      <line x1="35" y1="24" x2="43" y2="28" />
                      <line x1="11" y1="28" x2="11" y2="48" />
                      <line x1="43" y1="28" x2="43" y2="48" />
                      <line x1="19" y1="24" x2="19" y2="48" />
                      <line x1="35" y1="24" x2="35" y2="48" />
                      <line x1="9" y1="48" x2="45" y2="48" />
                      <path
                        d="M23 48 V36 C23 33.8 24.8 32 27 32 C29.2 32 31 33.8 31 36 V48"
                      />
                      <path
                        d="M27 26.5 C26 24.8 23.8 24.8 23 26 C22 27.5 23.5 29.2 27 31 C30.5 29.2 32 27.5 31 26 C30.2 24.8 28 24.8 27 26.5 Z"
                      />
                      <line x1="15" y1="34" x2="15" y2="42" />
                      <line x1="39" y1="34" x2="39" y2="42" />
                    </svg>

                    <!-- Guests / Recibimiento -->
                    <svg
                      v-else-if="event.icon === 'guests'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <circle cx="27" cy="18" r="5" />
                      <path
                        d="M19 36 C19 31.6 22.6 28 27 28 C31.4 28 35 31.6 35 36"
                      />
                      <circle cx="15" cy="22" r="4.2" />
                      <path
                        d="M8 38 C8 34.5 10.8 31.5 14.5 31.5 C15.8 31.5 17 31.9 18 32.6"
                      />
                      <circle cx="39" cy="22" r="4.2" />
                      <path
                        d="M36 32.6 C37 31.9 38.2 31.5 39.5 31.5 C43.2 31.5 46 34.5 46 38"
                      />
                    </svg>

                    <!-- Rings / Anillos / Votos -->
                    <svg
                      v-else-if="event.icon === 'rings'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <circle cx="33" cy="33" r="11" />
                      <circle cx="33" cy="33" r="8" />
                      <circle cx="21" cy="33" r="11" />
                      <circle cx="21" cy="33" r="8" />
                      <path d="M17 19 L21 15 L25 19 L21 23 Z" />
                      <line x1="17" y1="19" x2="25" y2="19" />
                      <path
                        d="M29 16 C28.3 15 26.8 15 26.2 16 C25.5 17 26.5 18.2 29 19.5 C31.5 18.2 32.5 17 31.8 16 C31.2 15 29.7 15 29 16 Z"
                      />
                      <line x1="14" y1="16" x2="12" y2="14" />
                      <line x1="21" y1="11" x2="21" y2="8" />
                      <line x1="42" y1="28" x2="45" y2="27" />
                    </svg>

                    <!-- Toast / Champagne / Brindis -->
                    <svg
                      v-else-if="event.icon === 'toast'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <g
                        transform="translate(19, 30) rotate(14) translate(-19, -30)"
                      >
                        <path
                          d="M15 13 L15 25 C15 28.5 17 31 19 31 C21 31 23 28.5 23 25 L23 13 Z"
                        />
                        <line
                          x1="15.5"
                          y1="20"
                          x2="22.5"
                          y2="20"
                          stroke-dasharray="1.5 1.5"
                        />
                        <line x1="19" y1="31" x2="19" y2="43" />
                        <line x1="14" y1="43" x2="24" y2="43" />
                      </g>
                      <g
                        transform="translate(35, 30) rotate(-14) translate(-35, -30)"
                      >
                        <path
                          d="M31 13 L31 25 C31 28.5 33 31 35 31 C37 31 39 28.5 39 25 L39 13 Z"
                        />
                        <line
                          x1="31.5"
                          y1="20"
                          x2="38.5"
                          y2="20"
                          stroke-dasharray="1.5 1.5"
                        />
                        <line x1="35" y1="31" x2="35" y2="43" />
                        <line x1="30" y1="43" x2="40" y2="43" />
                      </g>
                      <circle cx="27" cy="11" r="1.2" fill="currentColor" />
                      <circle cx="24" cy="7" r="1" fill="currentColor" />
                      <circle cx="30" cy="8" r="0.9" fill="currentColor" />
                      <line x1="27" y1="15" x2="27" y2="18" />
                    </svg>

                    <!-- Dinner / Banquete / Cena -->
                    <svg
                      v-else-if="event.icon === 'dinner'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <circle cx="27" cy="27" r="14" />
                      <circle cx="27" cy="27" r="10" />
                      <path d="M12 15 L12 24 C12 26 13 27 14 27 L14 41" />
                      <line x1="16" y1="15" x2="16" y2="24" />
                      <path d="M16 24 C16 26 15 27 14 27" />
                      <line x1="14" y1="15" x2="14" y2="24" />
                      <path d="M40 15 C38 17 38 23 38 27 L38 41" />
                      <path d="M40 15 L40 41" />
                    </svg>

                    <!-- Dance / Baile / Música -->
                    <svg
                      v-else-if="event.icon === 'dance'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <path d="M10 24 C18 20 24 30 34 22 C39 18 43 20 45 22" />
                      <path d="M11 28 C19 24 25 34 35 26 C40 22 43 23 45 25" />
                      <path d="M12 32 C20 28 26 38 36 30 C41 26 43 27 45 29" />
                      <circle cx="17" cy="21" r="2.5" fill="currentColor" />
                      <line x1="19.5" y1="21" x2="19.5" y2="12" />
                      <path d="M19.5 12 C22 13 23 15 23 16" />
                      <circle cx="28" cy="27" r="2.5" fill="currentColor" />
                      <circle cx="36" cy="21" r="2.5" fill="currentColor" />
                      <line x1="30.5" y1="27" x2="30.5" y2="15" />
                      <line x1="38.5" y1="21" x2="38.5" y2="9" />
                      <line
                        x1="30.5"
                        y1="15"
                        x2="38.5"
                        y2="9"
                        stroke-width="2"
                      />
                      <path d="M43 14 L43 18 M41 16 L45 16" />
                    </svg>

                    <!-- Party / Disco / Balada -->
                    <svg
                      v-else-if="event.icon === 'party'"
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <line x1="27" y1="4" x2="27" y2="13" />
                      <circle cx="27" cy="29" r="14" />
                      <ellipse cx="27" cy="29" rx="14" ry="10" />
                      <ellipse cx="27" cy="29" rx="14" ry="5" />
                      <line x1="13" y1="29" x2="41" y2="29" />
                      <ellipse cx="27" cy="29" rx="5" ry="14" />
                      <ellipse cx="27" cy="29" rx="10" ry="14" />
                      <line x1="27" y1="15" x2="27" y2="43" />
                      <!-- Sparkles -->
                      <path
                        d="M10 13 Q12 15 12 17 Q12 15 14 13 Q12 15 12 9 Q12 15 10 13 Z"
                        fill="currentColor"
                      />
                      <path
                        d="M40 16 Q42 18 42 20 Q42 18 44 16 Q42 18 42 12 Q42 18 40 16 Z"
                        fill="currentColor"
                      />
                      <circle cx="43" cy="36" r="1.8" fill="currentColor" />
                      <line x1="44.8" y1="36" x2="44.8" y2="29" />
                      <path d="M44.8 29 C46 30 47.5 31 47.5 32" />
                    </svg>

                    <!-- Default Hearts -->
                    <svg
                      v-else
                      viewBox="0 0 54 54"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-full h-full"
                    >
                      <path
                        d="M22 39 C13 32 9 26 9 19 C9 14.5 12.5 11 17 11 C19.8 11 22.3 12.5 23.8 14.8 C25.3 12.5 27.8 11 30.6 11 C35.1 11 38.6 14.5 38.6 19 C38.6 20.8 38 22.5 37 24"
                      />
                      <path
                        d="M32 43 C26.5 38 23 34 23 29.5 C23 26.5 25.5 24 28.5 24 C30.4 24 32.1 25 33.1 26.6 C34.1 25 35.8 24 37.7 24 C40.7 24 43.2 26.5 43.2 29.5 C43.2 34 39.7 38 34.2 43 L33.1 44 Z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Center Column: Vertical Line + Heart Node -->
                <div
                  class="w-8 sm:w-10 relative flex flex-col items-center self-stretch justify-center shrink-0"
                >
                  <!-- Vertical connecting line -->
                  <div
                    v-if="events.length > 1"
                    class="absolute w-[1.5px] bg-primary/45 left-1/2 -translate-x-1/2"
                    :class="[
                      index === 0 ? 'top-2 bottom-0' : '',
                      index === events.length - 1 ? 'top-0 bottom-2' : '',
                      index > 0 && index < events.length - 1
                        ? 'top-0 bottom-0'
                        : '',
                    ]"
                  ></div>

                  <!-- Heart Node -->
                  <div
                    class="relative z-10 w-6 h-6 flex items-center justify-center bg-[#FAF7F3] rounded-full shadow-sm"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-primary fill-current transition-transform duration-300 group-hover:scale-125"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Right Column: Time & Activity Details -->
                <div
                  class="flex-1 text-left pl-3 sm:pl-5 py-3 sm:py-3.5 flex flex-col justify-center"
                >
                  <!-- Time -->
                  <span
                    class="font-badoni italic text-secondary text-sm sm:text-base font-medium tracking-wide leading-none"
                  >
                    {{ event.time }}
                  </span>
                  <!-- Activity Title -->
                  <h4
                    class="font-badoni font-bold uppercase tracking-wider text-primary text-sm sm:text-base mt-1.5 leading-snug group-hover:text-primary transition-colors"
                  >
                    {{ event.title }}
                  </h4>
                  <!-- Description / Address / Details -->
                  <p
                    v-if="event.description"
                    class="font-badoni italic text-xs sm:text-sm text-slate-muted mt-1 leading-snug"
                  >
                    {{ event.description }}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </PaperCard>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { motion } from "motion-v";
import PaperCard from "../../../components/PaperCard.vue";
import texts from "../data/texts.json";

const events = computed(() => texts.timeline?.events || []);
</script>

<style scoped>
/* Additional component refinements */
</style>
