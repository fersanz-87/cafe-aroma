export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "cafe" | "bebida" | "postre" | "snack";
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Doble",
    description: "Dos shots de espresso con crema natural, intenso y aromático.",
    price: 45,
    category: "cafe",
  },
  {
    id: 2,
    name: "Cappuccino Clásico",
    description: "Espresso con leche vaporizada y espuma cremosa. Un clásico italiano.",
    price: 55,
    category: "cafe",
  },
  {
    id: 3,
    name: "Latte de Vainilla",
    description: "Café latte con sirope de vainilla artesanal y arte latte.",
    price: 65,
    category: "cafe",
  },
  {
    id: 4,
    name: "Mocha Mexicano",
    description: "Espresso con chocolate oaxaqueño, leche y un toque de canela.",
    price: 70,
    category: "cafe",
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "Café extraído en frío durante 18 horas. Suave y refrescante.",
    price: 60,
    category: "bebida",
  },
  {
    id: 6,
    name: "Frappé de Caramelo",
    description: "Bebida helada con café, caramelo artesanal y crema batida.",
    price: 75,
    category: "bebida",
  },
  {
    id: 7,
    name: "Cheesecake de Café",
    description: "Cheesecake cremoso con base de galleta y infusión de espresso.",
    price: 85,
    category: "postre",
  },
  {
    id: 8,
    name: "Croissant de Almendra",
    description: "Croissant artesanal relleno de crema de almendra y horneado al momento.",
    price: 55,
    category: "snack",
  },
];
