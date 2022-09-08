import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Backdrop
const Backdrop = (props) => {
  return (
    <div
      className="fixed w-full h-[100vh]  left-0 top-0 bg-black opacity-90 text-white"
      onClick={props.onClose}
    />
  );
};

// overLay
const ModalOverlay = (props) => {
  return (
    <div className="fixed lg:top-[14vh] top-[16vh] lg:w-[36rem] md:w-[30rem] w-[20rem] md:left-[8rem] lg:left-[22rem] left-[23px] bg-white p-4 z-10 rounded-2xl">
      <div className="text-black py-4">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

// modal functions
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
