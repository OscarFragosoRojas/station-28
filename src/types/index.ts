export interface MenuItem {
  name: string;
  subtitle: string;
  src: any;
  alt: string;
  tags?: string[];
  price: string;
  description: string;
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}

export interface PromoSection {
  name: string;
  promos: MenuItem[];
}

export interface OrderSection {
  title: string;
  url: string;
  src?: any;
  alt?: string;
  icon?: string;
  description: string;
}
