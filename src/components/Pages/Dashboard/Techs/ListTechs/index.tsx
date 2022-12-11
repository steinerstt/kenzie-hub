import { iUserTechs } from "../../../../../contexts/AuthContext/@types";
import { CardTech } from "./CardTech";
import { ContainerListTechs } from "./styles";

interface iListTechsProps {
  techs: iUserTechs[];
}

export const ListTechs = ({ techs }: iListTechsProps) => {
  const cards = techs.map((tech) => {
    return <CardTech key={tech.id} tech={tech} />;
  });

  return <ContainerListTechs>{cards}</ContainerListTechs>;
};
