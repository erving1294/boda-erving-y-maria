<template>
  <section
    id="parents"
    class="py-16 bg-ivory-dark text-center select-none"
    data-aos="fade-up"
  >
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-xs uppercase tracking-[0.2em] text-slate-muted mb-4 font-semibold">
        {{ texts.parents.title }}
      </h2>
      
      <p class="font-serif italic text-lg text-sage mb-12 max-w-lg mx-auto">
        "{{ texts.parents.blessing }}"
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-dark">
        <!-- Bride's Parents -->
        <div class="flex flex-col items-center p-8 rounded-2xl paper-card">
          <h3 class="text-4xl text-gold-hover mb-4">{{ texts.parents.brideParentsTitle }}</h3>
          <div class="font-serif text-lg font-medium space-y-1">
            <p>{{ texts.parents.brideMother }}</p>
            <p>&</p>
            <p>{{ texts.parents.brideFather }}</p>
          </div>
        </div>

        <!-- Groom's Parents -->
        <div class="flex flex-col items-center p-8 rounded-2xl paper-card">
          <h3 class="text-4xl text-gold-hover mb-4">{{ texts.parents.groomParentsTitle }}</h3>
          <div class="font-serif text-lg font-medium space-y-1">
            <p>{{ texts.parents.groomMother }}</p>
            <p>&</p>
            <p>{{ texts.parents.groomFather }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import texts from "../data/texts.json";
</script>
