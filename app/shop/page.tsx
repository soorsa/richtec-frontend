import ProductGrid from "@/app/shop/_components/ProductGrid";
import { productsData } from "@/data/constants";

const page = () => {
  return (
    <div>
      <div className=""></div>
      <div className="p-4 sm:p-10 flex gap-4">
        <div className="w-1/5 bg-white p-4"></div>
        <div className="flex-1">
          <ProductGrid products={productsData} />
        </div>
      </div>
    </div>
  );
};

export default page;
