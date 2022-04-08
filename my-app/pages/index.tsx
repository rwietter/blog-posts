import type { NextPage } from "next";
import { useRef } from "react";
import Modal from "../components/modal";

export interface ModalRef {
  handleOpenModal: () => void;
}

const Home: NextPage = () => {
  const modalRef = useRef<ModalRef>(null);
  const handleOpenModal = () => modalRef.current?.handleOpenModal();

  return (
    <main>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal} className="open-modal-button">
        Open Modal
      </button>
    </main>
  );
};

export default Home;
