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

interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ProductFilterParams {
  search?: string;
  category?: string;
  page?: number;
}
interface CategoryFilterParams {
  name?: string;
}

interface PaginatedResponse<Data> {
  count: number;
  next: string;
  previous: string;
  results: Data[];
}

interface Category {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  is_featured: boolean;
}

interface LoginPayload {
  email: string;
  password: string;
}
interface LoginResponse {
  token: string;
  refresh_token: string;
  user: User;
}

type LoginError = {
  non_field_errors: string;
  error: string;
  errors: string[];
  detail: string;
  messages: ErrorMsg[];
};
