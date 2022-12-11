import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { Button } from "../../../../styles/components/Buttons/styles";
import { Form } from "../../../../styles/components/Form/styles";
import { InputGroup } from "../../../Global/InputGroup";
import { CreateAccountLogin } from "./CreateAccountLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../validations/auth/loginSchema";
import { TextErrorForm } from "../../../../styles/components/Form/TextErrorForm/styles";

export interface iFormLogin {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(loginSchema),
  });
  const { handleLogin, isLoginIncorrect } = useAuthContext();

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <h2>Login</h2>
      <InputGroup
        labelText="Email"
        labelRef="email"
        placeholder="Digite aqui o seu email"
        register={register("email")}
        msgError={errors.email?.message}
      />
      <InputGroup
        type="password"
        labelText="Senha"
        labelRef="password"
        placeholder="Digite aqui a sua senha"
        register={register("password")}
        msgError={errors.password?.message}
      />
      <Button type="submit" width="100%">
        Entrar
      </Button>

      {isLoginIncorrect && (
        <TextErrorForm>Email ou senha inválidos</TextErrorForm>
      )}

      <CreateAccountLogin />
    </Form>
  );
};
