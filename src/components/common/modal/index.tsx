import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalContext } from "./context/ModalContext";

interface Props {
  children: React.ReactNode;
}

const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${currentScrollY}px`;
  document.body.style.overflowY = "scroll";
  return currentScrollY;
};

const allowScroll = (prevScrollY: number) => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, prevScrollY);
};

const Modal = ({ children }: Props) => {
  const { onCloseModal } = useContext(ModalContext);

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <>
      {createPortal(
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-b3 z-10 bg-opacity-70"
            onClick={onCloseModal}
          />
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white max-w-lg w-full max-h-[450px] h-full rounded-medium p-3 z-20">
            <button className="absolute top-3 right-3" onClick={onCloseModal}>
              X
            </button>
            {children}
          </div>
        </>,
        document.body,
      )}
    </>
  );
};

export default Modal;
