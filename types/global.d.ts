interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  price: number;
}

type CartItem = {
  product: Product;
  quantity: number;
};

type Cart = {
  totalPrice: number;
  totalquantity: number;
  cartitems: CartItem[];
};

type ShoppingBagState = {
  cart: Cart | null;
  resetCart: () => void;
};
