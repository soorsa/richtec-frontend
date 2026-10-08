import ProductCard from "@/app/shop/_components/ProductCard";
import React from "react";
interface Prop {
  products: Product[];
}
const ProductGrid: React.FC<Prop> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
