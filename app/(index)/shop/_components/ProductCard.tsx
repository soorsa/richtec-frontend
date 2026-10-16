import { Button } from "@/components/ui/button";
import { getFormattedCurrency } from "@/lib/utils";
import { cn } from "cn";
import { Heart, ShoppingCartPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Prop {
  product: Product;
}
const ProductCard: React.FC<Prop> = ({ product }) => {
  return (
    <div className={cn("rounded-sm overflow-hidden")}>
      <Link href={`/shop/products/${product.slug}`}>
        <div className="h-52 relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="bg-white p-3 space-y-3">
        <div className="">
          <Link
            href={`/shop/products/${product.slug}`}
            className="text-base font-semibold line-clamp-2"
            title={product.title}
          >
            {product.title}
          </Link>
          <div className="flex justify-between items-center">
            <div className="text-xs bg-gray-300 text-gray-700 px-2 py-0.5 line-clamp-1 w-fit max-w-30">
              {product.category}
            </div>
            <div className="">{getFormattedCurrency(product.price)}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button className={cn("flex-1")}>
            <ShoppingCartPlus className="w-3.5 h-3.5" />
            <span>Add to cart</span>
          </Button>
          <Button
            className={cn("text-primary bg-transparent hover:bg-transparent")}
          >
            <Heart className="size-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
