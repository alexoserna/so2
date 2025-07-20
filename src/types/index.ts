export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface DesignSystem {
  project: string;
  design_style: {
    theme: string;
    mood: string;
    visual_motifs: string[];
    color_palette: {
      background: string;
      text_primary: string;
      accent_purple: string;
      accent_green: string;
      accent_pink: string;
      text_gray: string;
      nav_loop_text: string;
      inactive_dot: string;
    };
    typography: {
      main_heading: {
        font_family: string;
        font_weight: string;
        font_size: string;
        color: string;
        effects: string[];
      };
      body_text: {
        font_family: string;
        font_size: string;
        color: string;
        line_height: string;
      };
      japanese_text: {
        font_family: string;
        color_variants: string[];
        use_case: string;
      };
    };
  };
  layout: {
    structure: string[];
    alignment: string;
    spacing: {
      section_padding: string;
      gap_between_modules: string;
    };
    composition: string;
  };
  interactions: {
    on_scroll: string[];
    hover_effects: {
      links: string;
      buttons: string;
      images: string;
    };
    scroll_based_animations: string[];
    glitch_effects: {
      applied_to: string[];
      style: string[];
      trigger: string;
    };
  };
  components: {
    hero_banner: {
      title_text: string;
      subtitle: string;
      background_image: string;
      text_overlay_style: string;
    };
    looping_nav: {
      text: string;
      animation: string;
      color: string;
    };
    mobile_preview: {
      device_frame: string;
      screen_title: string;
      character: string;
      centered: boolean;
      background: string;
    };
    carousel_dots: {
      active: string;
      inactive: string;
    };
    blog_preview: {
      title: string;
      background: string;
      layout: string;
      manga_snippet: string;
    };
  };
  responsive: {
    mobile: {
      font_scaling: string;
      layout_stack: string;
      carousel_behavior: string;
    };
    desktop: {
      grid_layout: string;
      manga_images: string;
    };
  };
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: Cart };

export interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}