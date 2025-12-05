export interface MenuItem {
  name: string;
  subtitle: string;
  src: any;
  alt: string;
  tags: string[];
  price: string;
  description: string;
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}
