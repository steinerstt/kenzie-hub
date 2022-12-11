import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { TechsProvider } from "../../../contexts/TechsContext";
import { Header } from "../../Global/Header";
import { Nav } from "../../Global/Nav";
import { Techs } from "./Techs";

export const Dashboard = () => {
  const { user } = useAuthContext();

  if (!user.id) {
    return null;
  }

  return (
    <>
      <Nav />
      <Header />
      <TechsProvider>
        <Techs />
      </TechsProvider>
    </>
  );
};
