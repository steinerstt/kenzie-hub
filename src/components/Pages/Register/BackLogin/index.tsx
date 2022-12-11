import logo from "../../../../assets/logo.svg";
import { ButtonRedirect } from "../../../../styles/components/Buttons/styles";
import { ContainerBackLogin } from "./styles";

export const BackLogin = () => {
  return (
    <ContainerBackLogin>
      <img src={logo} alt="Kenzie Hub logo" />
      <ButtonRedirect to="/" variant="tertiary">
        Voltar
      </ButtonRedirect>
    </ContainerBackLogin>
  );
};
