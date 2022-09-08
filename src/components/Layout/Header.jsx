import React, { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";
import Image from "../../assets/ivana-squares.jpg";

const Header = (props) => {
  return (
    <Fragment>
        <header className="fixed w-full h-14 bg-red-600 text-white flex justify-between items-center shadow-xl z-10 font-serif">
          <h1 className="lg:text-2xl text-lg1 font-bold px-4">ReactMeals</h1>
          <HeaderCardButton onClick={props.onShowCart} />
      </header>
      {/*  */}
        <div className="w-full md:h-[52rem] h-[28rem] overflow-hidden">
          <img
            src={Image}
            alt="A table full of delicious meals!"
            className="w-full h-[28rem] md:h-[50rem]"
          />
        </div>
    </Fragment>
  );    <div className="p-4 shadow-xl rounded-2xl bg-zinc-300 mb-10">{props.children}</div>

};

export default Header;
