import React from "react";

  const Input = React.forwardRef((props, ref) => {
    return (
      <div className=" flex text-center">
        <label htmlFor={props.input.id} className="font-bold px-2">
          {props.label}
        </label>
        <input
          id={props.input.id}
          ref={ref}
          {...props.input}
          className="w-12 text-center font-bold font-serif"
        />
      </div>
    );
  });

export default Input;
