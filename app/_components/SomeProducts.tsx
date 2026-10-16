import ProductGrid from "@/app/(index)/shop/_components/ProductGrid";
import { productsData } from "@/data/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SomeProducts = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold">Our Products</h2>
          <p className="text-sm text-gray-700">hfjdf</p>
        </div>
        <Link
          href={`/shop`}
          className="uppercase text-primary hover:border-b border-primary transition-all flex items-center gap-2 text-sm"
        >
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <ProductGrid products={productsData.slice(0, 8)} />
    </div>
  );
};

export default SomeProducts;
