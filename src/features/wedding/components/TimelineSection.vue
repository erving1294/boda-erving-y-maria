<template></template>

<script setup>
import { defineComponent, h } from "vue";

// Basic SVG components defined inside so they are self-contained and don't break on imports
const ChurchIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z",
      }),
    ]),
});

const FileTextIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
      }),
    ]),
});

const GlassIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M7.5 2h9c.83 0 1.5.67 1.5 1.5 0 .54-.29 1.01-.73 1.28L13 10.5V19h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3v-8.5L6.23 4.78C5.79 4.51 5.5 4.04 5.5 3.5 5.5 2.67 6.17 2 7.5 2zM9.54 4h4.92L12 6.46 9.54 4z",
      }),
    ]),
});

const UtensilsIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M8.1 21.84c-.6.6-1.57.6-2.17 0a1.53 1.53 0 0 1 0-2.17L12 13.5l1.66 1.66-5.56 5.68zm9.9-16.34a3.83 3.83 0 0 0-5.41 0L6 12.16l1.66 1.66 6.34-6.34L12.34 9l1.66 1.66 1.66-1.66 1.66 1.66 1.66-1.66-1-1.16z",
      }),
    ]),
});

const MusicIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
      }),
    ]),
});

const MoonIcon = defineComponent({
  render: () =>
    h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
      h("path", {
        d: "M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.999V3z",
      }),
    ]),
});

const items = [
  {
    time: "16:00 - 16:45",
    title: "Ceremonia Religiosa",
    desc: "Momento de consagrar nuestro amor en la Parroquia Nuestra Señora de Luján.",
    icon: ChurchIcon,
  },
  {
    time: "18:00 - 19:30",
    title: "Recepción",
    desc: "Cóctel de bienvenida en el jardín exterior del Salón Avril.",
    icon: GlassIcon,
  },
  {
    time: "20:00",
    title: "Cena",
    desc: "Servicio de banquete formal y brindis con la pareja en el salón principal.",
    icon: UtensilsIcon,
  },
  {
    time: "21:00",
    title: "Fiesta",
    desc: "¡Baile, diversión y festejo hasta el amanecer!",
    icon: MusicIcon,
  },
  {
    time: "21:00",
    title: "Fin de la Fiesta",
    desc: "Agradecemos tu presencia en el cierre de esta gran celebración.",
    icon: MoonIcon,
  },
  {
    time: "02:00",
    title: "Fin de la Fiesta",
    desc: "Agradecemos tu presencia en el cierre de esta gran celebración.",
    icon: MoonIcon,
  },
];
</script>
