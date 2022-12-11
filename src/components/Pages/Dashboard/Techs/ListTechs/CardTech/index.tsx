import { iUserTechs } from "../../../../../../contexts/AuthContext/@types";
import { ContainerCardTech, ContainerStatusTrash } from "./styles";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { ModalDelEditTech } from "./ModalDelEditTech";

interface iCardTechProps {
  tech: iUserTechs;
}

export const CardTech = ({ tech }: iCardTechProps) => {
  const { title, status } = tech;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ContainerCardTech>
        <p>{title}</p>
        <ContainerStatusTrash>
          <p>{status}</p>
          <button type="button" onClick={handleOpenCloseModal}>
            <BiTrash />
          </button>
        </ContainerStatusTrash>
      </ContainerCardTech>

      {isOpenModal && (
        <ModalDelEditTech handleCloseModal={handleOpenCloseModal} tech={tech} />
      )}
    </>
  );
};
