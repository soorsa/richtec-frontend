import {
  ChartNetwork,
  Home,
  Image,
  Info,
  LayoutTemplate,
  Package,
  PhoneCall,
  ShoppingCart,
  Store,
  Tags,
  Users,
} from "lucide-react";

class Navigation {
  landing = [
    {
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      label: "Shop",
      icon: Store,
      path: "/shop",
    },
    {
      label: "About Us",
      icon: Info,
      path: "/about",
    },
    {
      label: "Contact Us",
      icon: PhoneCall,
      path: "/contact",
    },
  ];
  admin = [
    {
      label: "Overview",
      icon: LayoutTemplate,
      path: "/admin/dashboard",
    },
    {
      label: "Users",
      icon: Users,
      path: "/admin/dashboard/users",
    },
    {
      label: "Categories",
      icon: Tags,
      path: "/admin/dashboard/categories",
    },
    {
      label: "Products",
      icon: ShoppingCart,
      path: "/admin/dashboard/products",
    },
    {
      label: "Orders",
      icon: Package,
      path: "/admin/dashboard/orders",
    },
    {
      label: "Report",
      icon: ChartNetwork,
      path: "/admin/dashboard/reports",
    },
    {
      label: "Media",
      icon: Image,
      path: "/admin/dashboard/media",
    },
  ];
}

export const navigation = new Navigation();
export const Categories = [
  {
    name: "Kitchen Equipments",
    href: "/shop/kitchen-equipments",
  },
  {
    name: "bakery Equipments",
    href: "/shop/bakery-equipments",
  },
  {
    name: "industrial Equipments",
    href: "/shop/industrial-equipments",
  },
  {
    name: "Kitchen Equipments",
    href: "/shop/kitchen-equipments",
  },
];

export interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  price: number;
}

export const productsData: Product[] = [
  {
    slug: "richtec-6-burner-commercial-gas-range",
    title: "Heavy-Duty 6-Burner Commercial Gas Range with Convection Oven",
    category: "Cooking Equipment",
    description:
      "Designed for high-volume commercial kitchens, this heavy-duty gas range features six 30,000 BTU cast-iron burners and a high-performance convection oven base for rapid heat recovery and uniform baking.",
    features: [
      "Heavy-duty 304 stainless steel exterior and cabinet frame",
      "Six independent 30,000 BTU open cast-iron burners",
      "Full-size convection oven base with 2 adjustable chrome racks",
      "Removable pull-out stainless steel crumb tray for easy cleaning",
      "Adjustable 6-inch stainless steel legs with anti-skid foot pads",
      "NSF & ETL Sanitation Certified for commercial use",
    ],
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    ],
    price: 349009.0,
  },
  {
    slug: "richtec-double-door-reach-in-freezer",
    title: "Solid Double-Door Commercial Reach-In Freezer (49 Cu. Ft.)",
    category: "Refrigeration",
    description:
      "Maintain strict food safety standards with our high-capacity double-door reach-in freezer. Powered by an eco-friendly hydrocarbon refrigeration system with digital temperature controls.",
    features: [
      "49 cu. ft. capacity with 6 heavy-duty PVC-coated wire shelves",
      "Eco-friendly R290 hydrocarbon refrigerant for low energy costs",
      "Digital LED microcomputer thermostat (-10°F to 0°F range)",
      "Self-closing doors with 90-degree stay-open feature and keyed locks",
      "Corrosion-resistant stainless steel interior and exterior lining",
    ],
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    ],
    price: 425000.0,
  },
  {
    slug: "richtec-custom-stainless-steel-prep-table",
    title: "14-Gauge Stainless Steel Prep Table with Undershelf & Backsplash",
    category: "Stainless Steel Fabrication",
    description:
      "Engineered for daily kitchen preparation, this 72x30 inch worktable features heavy 14-gauge type 304 stainless steel with a reinforced undershelf for maximum weight capacity.",
    features: [
      "Premium 14-gauge 304 stainless steel top with sound-deadening foam",
      "4-inch backsplash to protect wall surfaces from spills",
      "Adjustable galvanized steel undershelf for extra utensil storage",
      "NSF approved for direct contact with food and ingredients",
      "Rust and corrosion-proof finish designed for wet environments",
    ],
    images: [
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=800",
    ],
    price: 68000.0,
  },
  {
    slug: "richtec-high-temp-conveyor-dishwasher",
    title: "High-Temperature Conveyor Dishwasher with Booster Heater",
    category: "Warewashing & Sanitation",
    description:
      "Capable of washing up to 200 racks per hour, this high-temperature conveyor dishwasher features a built-in 12kW booster heater to sanitize glassware and dishware reliably.",
    features: [
      "Cleans up to 200 dish racks per hour with dual-speed conveyor belt",
      "Built-in 12kW electric booster heater ensures 180°F sanitizing rinse",
      "Auto-start and auto-stop energy conservation system",
      "Stainless steel wash arms with anti-clogging nozzles",
      "Digital display with diagnostic error codes and cycle status",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    ],
    price: 1180000.0,
  },
  {
    slug: "richtec-floor-standing-planetary-mixer-30qt",
    title: "30-Quart Floor-Standing Commercial Planetary Dough Mixer",
    category: "Food Prep",
    description:
      "Built for bakeries and pizzerias, this 30-quart floor mixer handles dense doughs, batters, and sauces. Includes stainless steel bowl, spiral dough hook, wire whip, and flat beater.",
    features: [
      "Powerful 2 HP gear-driven motor with 3 fixed speeds",
      "30-quart stainless steel mixing bowl with safety interlock guard",
      "Includes 3 attachments: Spiral Dough Hook, Wire Whip, and Flat Beater",
      "Manual bowl-lift mechanism with ergonomic crank handle",
      "Thermal overload protection prevents motor overheating",
    ],
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    ],
    price: 289000.0,
  },
  {
    slug: "richtec-stainless-steel-exhaust-hood-system",
    title: "8FT Commercial Exhaust Canopy Hood with Baffle Filters",
    category: "Ventilation",
    description:
      "UL 710 listed Type-1 commercial kitchen exhaust hood system engineered for grease, moisture, and heat extraction over cooking lines. Pre-welded with stainless steel baffle filters.",
    features: [
      "Heavy-duty 18-gauge 430 stainless steel all-welded construction",
      "Includes removable stainless steel baffle grease filters",
      "Built-in grease gutter with removable stainless steel drain cup",
      "UL 710 listed for grease extraction and NFPA-96 fire safety compliance",
      "Includes pre-wired heat-resistant LED lighting fixtures",
    ],
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    ],
    price: 310000.0,
  },
];
