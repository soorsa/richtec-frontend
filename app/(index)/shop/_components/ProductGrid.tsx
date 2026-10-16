import ProductCard from "@/app/(index)/shop/_components/ProductCard";
import React from "react";
interface Prop {
  products: Product[];
}
const ProductGrid: React.FC<Prop> = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-4 gap-3">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
