<script setup>
import invitationCard from "../../../assets/images/sobre_verde.webp";
import paperWedding from "../../../assets/images/papel_boda.jpg";
import sealUrl from "../../../assets/images/Sello.png";
</script>
<template>
  <section id="detailSection" class="w-full h-[728px] relative overflow-hidden">
    <div
      class="bg-texture-marmol absolute inset-0 rounded-[inherit] border-0"
      style="corner-shape: inherit"
    ></div>
    <div
      style="
        mix-blend-mode: multiply;
        background-color: #faf5eb69;
        flex: none;
        width: 100%;
        position: absolute;
        top: 0%;
        left: 0%;
      "
      class=""
    ></div>
    <div
      class="max-sm:!top-[75px] max-sm:!w-[340px]"
      style="
        width: 446px;
        height: 494px;
        position: absolute;
        top: 79px;
        left: calc(50% - 223px);
        overflow: visible;
      "
    >
      <img
        :src="invitationCard"
        alt="Invitation Card"
        class="w-[340px] h-full object-cover max-sm:!h-[480px]"
      />
      <article
        class="max-sm:!w-[340px] max-sm:!h-[520px] max-sm:!bottom-[-100px] max-sm:!right-[-52px]"
        style="
          filter: brightness() drop-shadow(2px 2px 4px #00000040);
          flex: none;
          width: 460px;
          height: 550px;
          position: absolute;
          bottom: -110px;
          right: -24px;
          overflow: visible;
        "
      >
        <div
          style="
            position: absolute;
            border-radius: inherit;
            corner-shape: inherit;
            inset: 0px;
          "
        >
          <img
            :src="paperWedding"
            alt="Paper Wedding"
            style="
              display: block;
              width: 100%;
              height: 100%;
              border-radius: inherit;
              corner-shape: inherit;
              object-position: center center;
              object-fit: contain;
            "
          />
        </div>
        <div
          style="
            width: 70px;
            height: 74px;
            position: absolute;
            top: -20px;
            left: calc(50% - 35px);
            overflow: visible;
          "
        >
          <div
            style="
              position: absolute;
              border-radius: inherit;
              corner-shape: inherit;
              inset: 0px;
            "
          >
            <img
              decoding="auto"
              loading="lazy"
              width="100"
              height="100"
              alt=""
              style="
                display: block;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                corner-shape: inherit;
                object-position: center center;
                object-fit: cover;
              "
              :src="sealUrl"
            />
          </div>
        </div>
        <div
          class="text-center"
          style="
            height: min-content;
            z-index: 1;
            flex-flow: column;
            flex: none;
            place-content: center;
            align-items: center;
            gap: 18px;
            width: 299px;
            padding: 10px;
            display: flex;
            position: absolute;
            top: 53%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
        >
          <p class="text-3xl font-semibold font-new-icon">Erving & María</p>
          <p>Tenemos el honor de invitarlos a celebrar nuestra Boda.</p>
          <p>Que se celebrará el próximo</p>
          <p class="text-2xl">21 · 11 · 2026</p>
          <p>En Pachacamac, Lima</p>
        </div>
      </article>
    </div>
  </section>
</template>
