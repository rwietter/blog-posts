import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";
import { ModalRef } from "../../pages";

interface ModalProps {
  children?: ReactNode;
}

const Modal: ForwardRefRenderFunction<ModalRef, ModalProps> = (props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen((state) => !state);

  useImperativeHandle(ref, () => ({
    handleOpenModal,
  }));

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <label htmlFor="nome">Qual o seu nome ?</label>
          <input name="nome" />
          <button onClick={handleOpenModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default forwardRef(Modal);
