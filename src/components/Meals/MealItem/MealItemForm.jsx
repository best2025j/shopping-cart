import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber);
  };

  return (
    <form
      className="text-center mt-4 w-[8rem] px-[6px] "
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div className="px-14">
        <button className="px-2 m-2 cursor-pointer bg-red-600 border-2 border-red-400 rounded-[20px] hover:bg-red-400 active:bg-red-600">
          +Add
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
