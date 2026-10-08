import { getFormattedCurrency } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Props {
  cartItem: CartItem;
}
const CartItem: React.FC<Props> = ({ cartItem }) => {
  return (
    <div className="grid grid-cols-7 gap-2 py-2 relative">
      <div className="relative rounded-lg overflow-hidden h-12">
        <Image
          src={cartItem.product.images[0]}
          alt={cartItem.product.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="bg-black/10 absolute inset-0"></div>
      </div>
      <div className="flex-1 col-span-4">
        <div className="w-full line-clamp-1 text-sm text-left">
          {cartItem.product.title}
        </div>
        <div className="flex items-baseline text-gray-400">
          <button className="border border-gray-200 h-7 w-7 flex justify-center items-center text-center hover:bg-gray-100 hover:text-gray-500 rounded-md">
            -
          </button>
          <div className="h-7 w-7">{cartItem.quantity}</div>
          <button className="border border-gray-200 h-7 w-7 flex justify-center items-center text-center hover:bg-gray-100 hover:text-gray-500 rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="col-span-2 text-right flex flex-col justify-between">
        <div className="flex justify-end text-red-500">
          <Trash2 size={15} className="cursor-pointer" />
        </div>
        <div className="">
          {getFormattedCurrency(cartItem.quantity * cartItem.product.price)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
