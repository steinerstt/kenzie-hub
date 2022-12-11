import { ContainerNotFound } from "./styles";
import { IoArrowBack } from "react-icons/io5";
import img404 from "../../../assets/img-404.svg";
import { ButtonRedirect } from "../../../styles/components/Buttons/styles";

export const NotFound = () => {
  return (
    <ContainerNotFound>
      <img src={img404} alt="404 - Página não econtrada" />

      <ButtonRedirect to=".." relative="path">
        <IoArrowBack /> Voltar
      </ButtonRedirect>
    </ContainerNotFound>
  );
};
