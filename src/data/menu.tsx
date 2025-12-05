import type { MenuSection } from "../types";
import burger1 from "../assets/images/burger-1.jpeg";

export const menuItems: MenuSection[] = [
    {
        name: "Hambuguesas",
        items: [
            {
                name: "Honda",
                subtitle: "Sencilla",
                src: burger1,
                alt: "Honda",
                tags: ["Honda", "Carne de Res", "Queso Americano", "Papas Fritas"],
                price: "125",
                description: "100% carne de res, lechuga, queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
            {
                name: "Triumph",
                subtitle: "Hawaiana",
                src: burger1,
                alt: "Hamburguesa Triumph",
                tags: ["Triumph", "Carne de Res", "Queso Americano","Jamón Crujiente", "Piña", "Papas Fritas"],
                price: "139",
                description: "100% carne de res, piña, jamón crujiente, lechuga, queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
            {
                name: "Indian",
                subtitle: "Tocino",
                src: burger1,
                alt: "Hamburguesa Indian",
                tags: ["Indian", "Carne de Res", "Queso Americano", "Tocino", "Papas Fritas"],
                price: "145",
                description: "100% carne de res, tocino crujiente, lechuga, queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
            {
                name: "Harley Davidson",
                subtitle: "Doble Carne",
                src: burger1,
                alt: "Hamburguesa Harley Davidson",
                tags: ["Harley Davidson", "Doble Carne", "Queso Americano", "Papas Fritas"],
                price: "165",
                description: "100% carne de res, doble carne, lechuga,doble queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
        ],    
    },
    {
        name: "Wings & Wheels",
        items: [
            {
                name: "La Chopper",
                subtitle: "Doble Carne",
                src: burger1,
                alt: "Hamburguesa Chopper",
                tags: ["Chopper", "Doble Carne", "Queso Cheddar", "Tocino", "Salsa BBQ"],
                price: "120",
                description: "Doble carne, queso cheddar, tocino crujiente y salsa BBQ casera.",
            },
        ],    
    },
    {
        name: "Para compartir",
        items: [
            {
                name: "La Chopper",
                subtitle: "Doble Carne",
                src: burger1,
                alt: "Hamburguesa Chopper",
                tags: ["Chopper", "Doble Carne", "Queso Cheddar", "Tocino", "Salsa BBQ"],
                price: "120",
                description: "Doble carne, queso cheddar, tocino crujiente y salsa BBQ casera.",
            },
        ],    
    },
    {
        name: "Llena el tanque",
        items: [
            {
                name: "La Chopper",
                subtitle: "Doble Carne",
                src: burger1,
                alt: "Hamburguesa Chopper",
                tags: ["Chopper", "Doble Carne", "Queso Cheddar", "Tocino", "Salsa BBQ"],
                price: "120",
                description: "Doble carne, queso cheddar, tocino crujiente y salsa BBQ casera.",
            },
        ],    
    }
]