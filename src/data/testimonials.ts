export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    text: "El mejor café que he probado en Apodaca. El ambiente es increíble y el personal siempre te recibe con una sonrisa. Mi lugar favorito para trabajar por las tardes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "El Mocha Mexicano es una obra maestra. Se nota que usan ingredientes de calidad. Además, el Wi-Fi es rápido, perfecto para mis juntas virtuales.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    text: "Descubrí Café Aroma hace unos meses y ahora no puedo empezar mi día sin su cappuccino. Los postres también son deliciosos, especialmente el cheesecake.",
    rating: 4,
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    text: "Excelente lugar para reunirse con amigos o tener una cita tranquila. La decoración es muy acogedora y los precios son muy accesibles para la calidad que ofrecen.",
    rating: 5,
  },
  {
    id: 5,
    name: "Laura Hernández",
    text: "El cold brew de Café Aroma es adictivo. Me encanta que tienen estacionamiento, algo difícil de encontrar en la zona. Totalmente recomendado.",
    rating: 4,
  },
];
