import { iInputGroup, iRegister } from "..";
import { Input } from "../styles";

interface iCommonProps {
  inputAttributes: iInputGroup;
  register?: iRegister;
}

export const Common = ({ inputAttributes, register }: iCommonProps) => {
  const { labelRef } = inputAttributes;
  return <Input id={labelRef} {...inputAttributes} {...register} />;
};
