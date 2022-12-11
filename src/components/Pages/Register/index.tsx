import { ContainerWrapper } from "../../../styles/components/Containers/styles";
import { BackLogin } from "./BackLogin";
import { FormRegister } from "./FormRegister";
import { ContainerRegister } from "./styles";

export const Register = () => {
  return (
    <ContainerRegister>
      <ContainerWrapper className="container__wrapper">
        <BackLogin />
        <FormRegister />
      </ContainerWrapper>
    </ContainerRegister>
  );
};
