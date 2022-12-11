import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Seu nome deve ter no mínimo 3 caracteres")
    .required("Informe seu seu nome"),
  email: yup
    .string()
    .email("Informe um email válido")
    .required("Informe seu email"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caracter especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 digitos")
    .required("Informe sua senha"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Sua confirmação deve ser igual a informada anteriormente"
    )
    .required("Confirme sua senha"),
  bio: yup
    .string()
    .min(10, "Sua bio deve ter no mínimo 10 caracteres")
    .max(1000, "Sua bio deve ter no máximo 1000 caracteres")
    .required("Fale um pouco sobre você xD"),
  contact: yup.string().required("Informe uma opção de contato"),
  course_module: yup.string().required("Selecione um módulo"),
});
