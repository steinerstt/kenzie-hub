import { ButtonRedirect } from "../../../../../styles/components/Buttons/styles";
import { ContainerCreateAccountLogin } from "./styles";

export const CreateAccountLogin = () => {
  return (
    <ContainerCreateAccountLogin>
      <span>Ainda não possui uma conta?</span>
      <ButtonRedirect to="/register" variant="secondary">
        Cadastrar-se
      </ButtonRedirect>
    </ContainerCreateAccountLogin>
  );
};
