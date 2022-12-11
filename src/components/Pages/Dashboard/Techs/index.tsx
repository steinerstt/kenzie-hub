import { useTechsContext } from "../../../../contexts/TechsContext/hook";
import { ContainerWrapper } from "../../../../styles/components/Containers/styles";
import { Loading } from "../../../Global/Loading";
import { AddTech } from "./AddTech";
import { ListTechs } from "./ListTechs";
import { IllustrationEmptyList } from "./ListTechs/IllustrationEmptyList";
import { ContainerTechs } from "./styles";

export const Techs = () => {
  const { techs, isLoading } = useTechsContext();
  return (
    <>
      <ContainerTechs>
        <ContainerWrapper>
          <AddTech />
          {techs.length ? (
            <ListTechs techs={techs} />
          ) : (
            <IllustrationEmptyList />
          )}
        </ContainerWrapper>
      </ContainerTechs>
      {isLoading && <Loading />}
    </>
  );
};
