import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { ContainerWrapper } from "../../../styles/components/Containers/styles";
import { ContainerHeader } from "./styles";

export const Header = () => {
  const { user } = useAuthContext();
  const { name, course_module } = user;

  return (
    <ContainerHeader>
      <ContainerWrapper className="container__wrapper">
        <h2>Olá, {name}</h2>
        <p>{course_module}</p>
      </ContainerWrapper>
    </ContainerHeader>
  );
};
