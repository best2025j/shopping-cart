import React, { useContext } from "react";
import CartContext from "../../../Store/Cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between border-b-2 border-slate-900">
      <div className="mb-2">
        <h3 className="font-bold text-black text-xl">{props.name}</h3>
        <div>{props.description}</div>
        <div className="mt-[0.25rem] font-bold text-[#080808]">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
