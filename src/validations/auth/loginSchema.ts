import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido")
    .required("Informe o seu email"),
  password: yup.string().required("Informe a sua senha"),
});
