<template>
  <div class="w-full h-[600px] max-sm:h-[480px]">
    <img
      decoding="auto"
      loading="lazy"
      width="1300"
      height="1950"
      sizes="(min-width: 1200px) 100vw, (max-width: 1199.98px) 100vw"
      :src="Banner"
      alt=""
      style="
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        corner-shape: inherit;
        object-position: 48.4% 24.5%;
        object-fit: cover;
      "
    />
  </div>
</template>
<script setup>
import Banner from "../assets/images/save_the_date.jpg";
</script>
