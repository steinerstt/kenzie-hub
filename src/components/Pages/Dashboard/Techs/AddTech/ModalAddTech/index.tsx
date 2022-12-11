import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTechsContext } from "../../../../../../contexts/TechsContext/hook";
import { Button } from "../../../../../../styles/components/Buttons/styles";
import { Form } from "../../../../../../styles/components/Form/styles";
import { addTechSchema } from "../../../../../../validations/techs/addTechSchema";
import { InputGroup } from "../../../../../Global/InputGroup";
import { Modal } from "../../../../../Global/Modal";
import { SelectGroup } from "../../../../../Global/SelectGroup";

interface iModalAddTechProps {
  handleCloseModal: () => void;
}

export interface iFormAddTech {
  title: string;
  status: string;
}

export const ModalAddTech = ({ handleCloseModal }: iModalAddTechProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormAddTech>({
    resolver: yupResolver(addTechSchema),
  });
  const { handleAddTech } = useTechsContext();
  const techStatus = ["Iniciante", "Intermediário", "Avançado"];

  return (
    <Modal
      textHeaderModal="Cadastrar Tecnologias"
      handleCloseModal={handleCloseModal}
    >
      <Form onSubmit={handleSubmit(handleAddTech)}>
        <InputGroup
          labelText="Nome"
          labelRef="title"
          placeholder="Ex: React.JS"
          register={register("title")}
          msgError={errors.title?.message}
        />
        <SelectGroup
          labelText="Selecionar status"
          register={register("status")}
          msgError={errors.status?.message}
        >
          {techStatus.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </SelectGroup>
        <Button type="submit" width="100%">
          Cadastrar Tecnologia
        </Button>
      </Form>
    </Modal>
  );
};
