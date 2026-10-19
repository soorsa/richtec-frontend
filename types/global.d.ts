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
  title?: string;
  page_size?: number;
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
  access_token: string;
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
type ErrorResponse = {
  status: number;
  errors: Record<string, string[]>;
};
interface RegisterPayload {
  email: string;
  phone_number: string;
  password: string;
  first_name: string;
  last_name: string;
}
type RegisterError = {
  non_field_errors: string[];
  error: string;
  errors: string[];
  username: string[];
  email: string[];
  password: string[];
};

interface User {
  id: 0;
  last_login: string;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  email: email;
  role: "admin" | "staff" | "customer";
  phone_number: string;
  profile_picture: string;
  bio: string;
  date_of_birth: string;
  groups: number[];
  user_permissions: number[];
}

interface Category {
  title: string;
  slug: string;
  thumbnail: string;
  is_featured: boolean;
}
interface CategoryPayload {
  title: string;
  slug?: string;
  thumbnail?: File;
  is_featured?: boolean;
}
