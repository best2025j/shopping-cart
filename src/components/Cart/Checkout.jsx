import React from "react";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={confirmHandler}
      className="overflow-scroll h-[10rem] overflow-x-hidden"
    >
      <div className="">
        <label className="font-bold mb-[0.25rem] block" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          className="border border-black rounded-md font-[inherit]"
          id="name"
          placeholder=""
        />
      </div>

      <div className="">
        <label className="font-bold mb-[0.25rem] block" htmlFor="city">
          City:
        </label>
        <input
          type="text"
          className="border border-black rounded-md font-[inherit]"
          id="city"
          confirmHandler
          placeholder=""
        />
      </div>

      <div className="">
        <label className="font-bold mb-[0.25rem] block" htmlFor="address">
          Address:
        </label>
        <input
          type="text"
          className="border border-black rounded-md font-[inherit]"
          id="address"
          placeholder=""
        />
      </div>

      <div className="">
        <label className="font-bold mb-[0.25rem] block" htmlFor="postal">
          Postal Code:
        </label>
        <input
          type="text"
          className="border border-black rounded-md font-[inherit]"
          id="postal"
          placeholder=""
        />
      </div>

      <button
        type="submit"
        className="px-2 py-1 mt-2  bg-blue-500 rounded-md active:bg-black active:text-slate-600"
      >
        Confirm
      </button>
      <button
        className="px-2 py-1 mt-2  ml-1 bg-blue-500 rounded-md active:bg-black active:text-slate-600"
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
