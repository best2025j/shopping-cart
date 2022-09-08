import React from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex border-b-2 border-red-600 md-mb-4 mb-2">
      <div className="lg:w-[5rem] w-[7rem]">
        <h2 className="font-bold text-md">{props.name}</h2>
        <div>
          <span className="text-lg text-red-600">{price}</span>
          <span className="ml-6  border border-zinc-600 px-[2px]">
            x{props.amount}
          </span>
        </div>
      </div>
      <div className="lg:ml-[68%] md:ml-[60%] ml-[46%] mt-4 lg-mb-10">
        <button
          onClick={props.onRemove}
          className="text-red-500 active:bg-red-300 border-red-600 rounded-lg border gap-1 px-4 mx-1"
        >
          -
        </button>
        <button
          onClick={props.onAdd}
          className="text-red-500 active:bg-red-300 border-red-600 rounded-lg border px-3 "
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
