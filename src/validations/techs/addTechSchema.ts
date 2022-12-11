import * as yup from "yup";

export const addTechSchema = yup.object().shape({
  title: yup.string().min(2, "O nome da tec deve ter no mínimo 2 caracteres"),
});
