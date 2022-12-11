import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { Button } from "../../../../styles/components/Buttons/styles";
import { Form } from "../../../../styles/components/Form/styles";
import { registerSchema } from "../../../../validations/auth/registerSchema";
import { InputGroup } from "../../../Global/InputGroup";
import { SelectGroup } from "../../../Global/SelectGroup";
import { Headline } from "./Headline";

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const FormRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(registerSchema),
  });
  const { handleRegister, isRegisterIncorrect } = useAuthContext();

  const courseModules = [
    "Primeiro módulo (Introduçao ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)",
  ];

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <Headline />

      <InputGroup
        labelText="Nome"
        labelRef="name"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        msgError={errors.name?.message}
      />
      <InputGroup
        type="email"
        labelText="Email"
        labelRef="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        msgError={
          isRegisterIncorrect
            ? "Já existe um usuário com este email cadastrado"
            : errors.email?.message
        }
      />
      <InputGroup
        type="password"
        labelText="Senha"
        labelRef="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        msgError={errors.password?.message}
      />
      <InputGroup
        type="password"
        labelText="Confirmar senha"
        labelRef="confirmPassword"
        placeholder="Digite novamente sua senha"
        register={register("confirmPassword")}
        msgError={errors.confirmPassword?.message}
      />
      <InputGroup
        labelText="Bio"
        labelRef="bio"
        placeholder="fale um pouco sobre você"
        register={register("bio")}
        msgError={errors.bio?.message}
      />
      <InputGroup
        labelText="Contato"
        labelRef="contact"
        placeholder="Opção de contato"
        register={register("contact")}
        msgError={errors.contact?.message}
      />
      <SelectGroup
        labelText="Selecionar módulo"
        defaultValue=""
        register={register("course_module")}
        msgError={errors.course_module?.message}
      >
        <option value="" disabled>
          Qual o seu módulo?
        </option>
        {courseModules.map((module, index) => (
          <option key={index} value={module}>
            {module}
          </option>
        ))}
      </SelectGroup>

      <Button type="submit" width="100%">
        Cadastrar
      </Button>
    </Form>
  );
};
