import CartItem from "@/app/cart/_components/CartItem";
import React from "react";
interface Props {
  cartItems: CartItem[];
}
const CartItemList: React.FC<Props> = ({ cartItems }) => {
  if (cartItems.length < 1) {
    return <h1>No Items in Cart.</h1>;
  }
  return (
    <div className="divide divide-y divide-gray-300">
      {cartItems.map((item, index) => (
        <CartItem cartItem={item} key={index} />
      ))}
    </div>
  );
};

export default CartItemList;
