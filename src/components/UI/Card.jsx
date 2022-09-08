import React from "react";
const Card = (props) => {
  return (
    <div className="p-4 shadow-xl rounded-2xl bg-zinc-300 mb-10">{props.children}</div>
  );
};

export default Card;
