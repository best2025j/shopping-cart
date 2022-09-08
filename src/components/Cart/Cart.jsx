import React, { useContext, useState } from "react";
import CartContext from "../../Store/Cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  //   THE REMOVE BUTTON
  const cartItemRemoverHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //  THE ADD BUTTON
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
    

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-[16rem] overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoverHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="flex gap-2 mt-2 float-right">
      <button
        className="text-red-500 active:bg-red-300 border-red-600 rounded-3xl border px-6 py-2"
        onClick={props.onClose}
      >
        Close
      </button>
      {hasItems && (
        <button
          className="px-6 py-2 bg-red-600 rounded-3xl"
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="font-bold md:text-xl mt-2">
        <span>Total Amount</span>
        <span className="float-right ">{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
