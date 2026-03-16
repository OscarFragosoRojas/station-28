import type { MenuSection } from "../types";
import type { PromoSection } from "../types";
import type { OrderSection } from "../types";
import burger1 from "../assets/images/burger-1.jpeg";
import burger_bacon from "../assets/images/burger_bacon.jpeg";
import burger_double from "../assets/images/burger_double.jpeg";
import burger_single from "../assets/images/burger_single.jpeg";
import onion_rings from "../assets/images/onion_rings.png";
import corn_ribs from "../assets/images/corn_ribs.png";
import cheese_sticks from "../assets/images/cheese_sticks.png";
import french_fries from "../assets/images/french_fries.png";
import wings_7 from "../assets/images/wings_seven.png";
import wings_kg from "../assets/images/wings_kg.png";
import whatsapp from "../assets/images/whatsapp.png";
import uberEats from "../assets/images/uberEats.png";
import rappi from "../assets/images/rappi.png";
import promo1 from "../assets/images/promo1.png";

export const menuItems: MenuSection[] = [
    {
        name: "Hamburguesas",
        items: [
            {
                name: "Honda",
                subtitle: "Sencilla",
                src: burger_single,
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
                src: burger_bacon,
                alt: "Hamburguesa Indian",
                tags: ["Indian", "Carne de Res", "Queso Americano", "Tocino", "Papas Fritas"],
                price: "145",
                description: "100% carne de res, tocino crujiente, lechuga, queso americano, quesillo, jitomate, cebolla morada, pepinillos, picante, mayonesa y papas fritas.",
            },
            {
                name: "Harley Davidson",
                subtitle: "Doble Carne",
                src: burger_double,
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
                name: "YamaWings",
                subtitle: "7 piezas de alitas",
                src: wings_7,
                alt: "YamaWings",
                tags: ["YamaWings", "Varios Sabores", "Papas Fritas"],
                price: "149",
                description: "7 piezas de alitas con lechuga, guarnición y aderezo. Además de papas fritas y eleccion de 2 salsas.",
            },
            {
                name: "KawaWings",
                subtitle: "10 piezas de alitas",
                src: burger1,
                alt: "KawaWings",
                tags: ["KawaWings", "Varios Sabores", "Papas Fritas"],
                price: "199",
                description: "10 piezas de alitas con lechuga, guarnición y aderezo. Además de papas fritas y eleccion de 2 salsas.",
            },
            {
                name: "DucatiWings",
                subtitle: "1 kg de alitas",
                src: wings_kg,
                alt: "DucatiWings",
                tags: ["DucatiWings", "Varios Sabores", "Papas Fritas"],
                price: "309",
                description: "1 kg de alitas con lechuga, guarnición y aderezo. Eleccion de 2 salsas.",
            },
        ],
    },
    {
        name: "Para compartir",
        items: [
            {
                name: "Suspensiones",
                subtitle: "8 piezas de dedos de queso",
                src: cheese_sticks,
                alt: "Suspensiones",
                tags: ["Dedos de queso", "Ranch"],
                price: "120",
                description: "8 piezas de dedos de queso con lechuga y aderezo ranch.",
            },
            {
                name: "Discos",
                subtitle: "8 piezas de aros de cebolla",
                src: onion_rings,
                alt: "Discos",
                tags: ["Aros de cebolla", "Ranch"],
                price: "120",
                description: "8 piezas de aros de cebolla con lechuga y aderezo ranch.",
            },
            {
                name: "Discos",
                subtitle: "Papas fritas con queso",
                src: french_fries,
                alt: "Discos",
                tags: ["Aros de cebolla", "Ranch"],
                price: "120",
                description: "8 piezas de aros de cebolla con lechuga y aderezo ranch.",
            },
            {
                name: "Calipers",
                subtitle: "Papas gajo ",
                src: burger1,
                alt: "Calipers",
                tags: ["Papas fritas", "Carne"],
                price: "79",
                description: "250gr de papas gajo fritas acompañadas con catsup.",
            },
            {
                name: "Costillas de elote",
                subtitle: "Elote en trozos",
                src: corn_ribs,
                alt: "Costillas de elote",
                tags: ["Elote", "Queso", "Crema"],
                price: "120",
                description: "Elote en trozos con queso, crema y aderezo.",
            }
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
                description: "2 x precio especial",
                src: promo1,
                alt: "Hamburguesa Honda",
                tag: "Promo",
                price: "120",
            }
        ],
    },
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
