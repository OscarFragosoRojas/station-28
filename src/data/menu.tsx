import type { MenuSection } from "../types";
import type { PromoSection } from "../types";
import type { OrderSection } from "../types";
import burger1 from "../assets/images/burger-1.jpeg";
import whatsapp from "../assets/images/whatsapp.png";
import uberEats from "../assets/images/uberEats.png";
import rappi from "../assets/images/rappi.png";

export const menuItems: MenuSection[] = [
    {
        name: "Hambuguesas",
        items: [
            {
                name: "Honda",
                subtitle: "Sencilla",
                src: burger1,
                alt: "Honda",
                tags: ["Honda", "Carne de Res", "Queso Americano", "Papas Fritas", "Sencilla"],
                price: "125",
                description: "100% carne de res, lechuga, queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
            {
                name: "Triumph",
                subtitle: "Hawaiana",
                src: burger1,
                alt: "Hamburguesa Triumph",
                tags: ["Triumph", "Carne de Res", "Queso Americano", "Jamón Crujiente", "Piña", "Papas Fritas"],
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

export const promos: PromoSection[] = [
    {
        name: "Hamburguesas",
        promos: [
            {
                title: "Honda",
                description: "Promo Sencilla",
                src: burger1,
                alt: "Hamburguesa Honda",
                tag: "Promo",
                price: "120",
            },
            {
                title: "Honda",
                description: "Promo Pareja",
                src: burger1,
                alt: "Hamburguesa Honda",
                tag: "Promo",
                price: "120",
            },
        ],
    },
    {
        name: "Wings & Wheels",
        promos: [
            {
                title: "Honda",
                description: "Promo Sencilla",
                src: burger1,
                alt: "Hamburguesa Honda",
                tag: "Promo",
                price: "120",
            },
            {
                title: "Honda",
                description: "Promo Doble",
                src: burger1,
                alt: "Hamburguesa Honda",
                tag: "Promo",
                price: "120",
            },
        ],
    }
]

export const order: OrderSection[] = [
    {
        title: "Contacta a la estacion",
        url: "https://wa.me/5215647979490",
        src: whatsapp,
        alt: "Whatsapp",
        description: "Contactanos a la estacion para pedir lo que mas te guste. (Verifica si cubrimos tu colonia)",
    },
    {
        title: "Pide por Rappi",
        url: "https://www.rappi.com.mx/restaurantes/delivery/602989-la-estacion-28?utm_source=app&utm_medium=deeplink&utm_campaign=share&utm_content=link_in_bio&fbclid=PAZnRzaAOgIClleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae9IPPOJ5qx3UT22pItGGdQgiOcagnfTf0hWtTh2JnEwyn-Y4_02mz-HGGq7Q_aem_-SudhIDeFrp2A8hKM0WprQ",
        src: rappi,
        alt: "Rappi",
        description: "Buscanos en Rappi para ordenar tu platillo favorito.",
    },
    {
        title: "Ordena con Uber Eats",
        url: "https://www.ubereats.com/mx/store/la-estacion-28/CGvGp1jeQZ6M5dXjUIzLbg?diningMode=DELIVERY&ps=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAOgIABleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadixgYlCd38F_Ddf2DLlJ00JplNdLqtzsfZ1A50bbIU50Uo1ysecjzKzSVMMA_aem_ZmFrZWR1bW15MTZieXRlcw",
        src: uberEats,
        alt: "Uber Eats",
        description: "Pide tus platillos en Uber Eats.",
    },
]
