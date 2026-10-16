"use client";
import ProductFilter from "@/app/(index)/shop/_components/ProductFilter";
import ProductGrid from "@/app/(index)/shop/_components/ProductGrid";
import { Breadcrumb } from "@/components/utils/BreadCrum";
import { productsData } from "@/data/constants";
import { useGetProducts } from "@/hooks/query/useShop";

const ShopPage = () => {
  useGetProducts();
  return (
    <div>
      <div className="p-4 sm:p-10">
        <Breadcrumb />
      </div>
      <div className="p-4 sm:p-10 grid sm:grid-cols-[1fr_4fr] gap-4">
        <div className="bg-white p-4 h-fit">
          <ProductFilter />
        </div>
        <div className="flex-1">
          <ProductGrid products={productsData} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
