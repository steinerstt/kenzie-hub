import { useEffect, useState } from "react";
import { iUserTechs } from "../../../../../../../contexts/AuthContext/@types";
import { useTechsContext } from "../../../../../../../contexts/TechsContext/hook";
import { Button } from "../../../../../../../styles/components/Buttons/styles";
import { Form } from "../../../../../../../styles/components/Form/styles";
import { InputGroup } from "../../../../../../Global/InputGroup";
import { Modal } from "../../../../../../Global/Modal";
import { SelectGroup } from "../../../../../../Global/SelectGroup";
import { ContainerButtons } from "./styles";

interface iModalDelEditTech {
  handleCloseModal: () => void;
  tech: iUserTechs;
}

export const ModalDelEditTech = ({
  handleCloseModal,
  tech,
}: iModalDelEditTech) => {
  const { handleEditTech, handleDelTech } = useTechsContext();
  const [newStatusTech, setNewStatusTech] = useState<string>("");
  const techStatus = ["Iniciante", "Intermediário", "Avançado"];

  useEffect(() => {
    setNewStatusTech(tech.status);
  }, []);

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      textHeaderModal="Tecnologia Detalhes"
    >
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputGroup
          labelText="Nome da tecnologia"
          labelRef="title"
          placeholder={tech.title}
          disabled
        />

        <SelectGroup
          labelText="Status"
          defaultValue={tech.status}
          onChange={(e) => setNewStatusTech(e.target.value)}
        >
          {techStatus.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </SelectGroup>

        <ContainerButtons>
          <Button
            type="submit"
            onClick={() => handleEditTech(tech, newStatusTech)}
          >
            Salvar alterações
          </Button>
          <Button
            type="submit"
            onClick={() => handleDelTech(tech)}
            variant="secondary"
          >
            Exluir
          </Button>
        </ContainerButtons>
      </Form>
    </Modal>
  );
};
