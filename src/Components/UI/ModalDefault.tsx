import { Modal } from "./Modal";
import React from "react";
const ModalDefault: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p> Modal-content!</p>
      </Modal>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
    </>
  );
};

export default ModalDefault;
