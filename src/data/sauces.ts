export interface Sauce {
  name: string;
  level: number; // 0 to 5
  description?: string;
}

export const sauces: Sauce[] = [
  { name: "BBQ", level: 0, description: "Dulce y ahumada" },
  { name: "Honey Mustard", level: 0, description: "Mostaza dulce" },
  { name: "Ajo Parmesano", level: 1, description: "Cremosa con un toque de ajo" },
  { name: "Lemon Pepper", level: 1, description: "Cítrica con pimienta" },
  { name: "Buffalo Mild", level: 2, description: "El clásico picante suave" },
  { name: "Buffalo Hot", level: 3, description: "Para los que aguantan" },
  { name: "Mango Habanero", level: 4, description: "Dulce pero picosa" },
  { name: "Salsas de la Casa", level: 5, description: "¡Cuidado! Solo para valientes" },
];
