import { Button } from "../../../../../styles/components/Buttons/styles";
import { ContainerAddTech } from "./styles";
import { RiAddLine } from "react-icons/ri";
import { useState } from "react";
import { ModalAddTech } from "./ModalAddTech";

export const AddTech = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ContainerAddTech>
        <h3>Tecnologias</h3>
        <Button type="button" variant="tertiary" onClick={handleOpenCloseModal}>
          <RiAddLine />
        </Button>
      </ContainerAddTech>

      {isOpenModal && <ModalAddTech handleCloseModal={handleOpenCloseModal} />}
    </>
  );
};
