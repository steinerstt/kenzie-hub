import illustration from "../../../../../../assets/illustration-pair-programming.svg";
import { ContainerIllustrationEmptyList } from "./styles";

export const IllustrationEmptyList = () => {
  return (
    <ContainerIllustrationEmptyList>
      <img src={illustration} alt="Lista de tecnologias vazia" />
    </ContainerIllustrationEmptyList>
  );
};
