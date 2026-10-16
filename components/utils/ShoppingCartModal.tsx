"use client";
import CartItemList from "@/app/(index)/cart/_components/CartItemList";
import { Button } from "@/components/ui/button";
import { getFormattedCurrency } from "@/lib/utils";
import { useShoppingBag } from "@/store/shoppingcart.store";
import { ArrowRight, X } from "lucide-react";

const ShoppingCartModal = () => {
  const { cart } = useShoppingBag();
  const cartItems = cart?.cartitems || [];
  const subTotal = cart?.totalPrice || 0;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col h-full">
        <div className="overflow-scroll flex-1 scrollbar-hide">
          <CartItemList cartItems={cartItems} />
        </div>
        <div className="space-y-4 py-2 border-t border-gray-300">
          <div className="flex flex-row justify-between">
            <div className="">SubTotal:</div>
            <div className="font-alaba-mid">
              {getFormattedCurrency(subTotal)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button>
              <X />
              <span>Clear</span>
            </Button>
            <Button>
              <span>Confirm Order</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
