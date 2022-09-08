import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartIcons from "../Cart/CartIcons";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className="animate-pulse easy-out cursor-pointer active:text-[#130b0b] flex items-center font-bold px-2 md:px-[10px] rounded-[25px]"
      onClick={props.onClick}
    >
      <span className="lg:w-8 md:w-8 sm:w-8 w-5">
        <CartIcons />
      </span>
      <span className="hidden sm:block cursor-pointer text-sm">Your Cart</span>
      <span className="bg-blue-500 px-[8px] py-[4px] text-[10px] -mt-6 rounded-full">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCardButton;
