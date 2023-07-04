import Button from "@/components/common/button";
import { useContext } from "react";
import { ModalContext } from "./common/modal/context/ModalContext";
import Modal from "./common/modal";

const Counter = () => {
  const { isOpen, onOpenModal } = useContext(ModalContext);

  return (
    <div>
      <Button type="button" onClick={onOpenModal}>
        더하기
      </Button>
      <Button type="button" className={"inline-flex items-center"}>
        <span>기업서비스</span>
        <span className="ml-1">&gt;</span>
      </Button>
      {isOpen && (
        <Modal>
          <div>
            <p>Hello Modal</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Counter;
