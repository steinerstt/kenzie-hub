import { ContainerWrapper } from "../../../styles/components/Containers/styles";
import { ContainerLogin } from "./styles";
import logo from "../../../assets/logo.svg";
import { FormLogin } from "./FormLogin";
import { Loading } from "../../Global/Loading";
import { useAuthContext } from "../../../contexts/AuthContext/hook";

export const Login = () => {
  const { isLoading } = useAuthContext();

  return (
    <>
      <ContainerLogin>
        <ContainerWrapper className="container__wrapper">
          <img src={logo} alt="Logo Kenzie Hub" />
          <FormLogin />
        </ContainerWrapper>
      </ContainerLogin>

      {isLoading && <Loading />}
    </>
  );
};
