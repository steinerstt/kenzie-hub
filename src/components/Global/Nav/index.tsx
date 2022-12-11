import { ContainerWrapper } from "../../../styles/components/Containers/styles";
import { ContainerNav } from "./styles";
import logo from "../../../assets/logo.svg";
import { ButtonRedirect } from "../../../styles/components/Buttons/styles";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { MdOutlineLogout } from "react-icons/md";

export const Nav = () => {
  const { handleLogout } = useAuthContext();

  return (
    <ContainerNav>
      <ContainerWrapper className="container__wrapper">
        <img src={logo} alt="Kenzie Hub Logo" />
        <ButtonRedirect to="/" variant="tertiary" onClick={handleLogout}>
          <MdOutlineLogout /> Sair
        </ButtonRedirect>
      </ContainerWrapper>
    </ContainerNav>
  );
};
