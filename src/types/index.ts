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

export interface PromoItem {
  title: string;
  description: string;
  tag: string;
  src: any;
  alt: string;
  price: string;
}

export interface PromoSection {
  name: string;
  promos: PromoItem[];
}

export interface OrderSection {
  title: string;
  url: string;
  src?: any;
  alt?: string;
  icon?: string;
  img?: any;
  description: string;
}
