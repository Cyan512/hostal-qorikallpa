import { Experience } from "@/src/types/Experience";

export const experiences: Experience[] = [
  {
    id: 1,
    category: "Cultural",
    title: "Tour por el centro histórico de Cusco",
    description: "Explora las calles empedradas y la arquitectura colonial de Cusco con un guía local.",
    duration: 3,
    price: 30,
    image: "/images/experience1.jpg",
  },
  {
    id: 2,
    category: "Aventura",
    title: "Excursión a Machu Picchu",
    description: "Visita la ciudadela inca de Machu Picchu y disfruta de vistas impresionantes.",
    duration: 8,
    price: 150,
    image: "/images/experience2.jpg",
  },
  {
    id: 3,
    category: "Cultural",
    title: "Clases de Cocina Peruana",
    description: "Aprende a preparar platos tradicionales peruanos con ingredientes frescos y técnicas auténticas.",
    duration: 2,
    price: 50,
    image: "/images/experience3.jpg",
  }
];
