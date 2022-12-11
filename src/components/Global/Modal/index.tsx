import { ReactNode } from "react";
import { CgClose } from "react-icons/cg";
import { ContainerModal, ModalBody, ModalContent, ModalHeader } from "./styles";

interface iModal {
  textHeaderModal: string;
  handleCloseModal: () => void;
  children: ReactNode;
}

export const Modal = ({
  textHeaderModal,
  handleCloseModal,
  children,
}: iModal) => {
  return (
    <ContainerModal>
      <ModalContent>
        <ModalHeader>
          <h2>{textHeaderModal}</h2>
          <button type="button" onClick={handleCloseModal}>
            <CgClose />
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ContainerModal>
  );
};
