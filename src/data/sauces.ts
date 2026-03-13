import type { Sauce } from "../types";

export const sauces: Sauce[] = [
  { name: "BBQ", level: 0, description: "Dulce y ahumada" },
  { name: "Frutos Rojos", level: 0, description: "Dulce y acida" },
  { name: "Blueberry Morita", level: 1, description: "Dulce y picosita" },
  { name: "Mandarina Habanero", level: 2, description: "Cítrica y picosita" },
  { name: "Buffalo", level: 3, description: "El clásico picante suave" },
  { name: "Mango Habanero", level: 4, description: "Dulce pero picosa" },
  { name: "Fuego", level: 5, description: "Picante" },
  {
    name: "¡Infierno!",
    level: 5,
    description: "¡Cuidado! Solo para valientes",
  },
];
