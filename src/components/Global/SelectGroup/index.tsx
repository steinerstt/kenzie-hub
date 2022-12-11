import { ReactNode, Ref, SelectHTMLAttributes } from "react";
import { ChangeHandler } from "react-hook-form";
import { ContainerSelectGroup, Label, Select, TextSelectError } from "./styles";

interface iRegister {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: Ref<any>;
  name: string;
}

interface iSelectGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  register?: iRegister;
  msgError?: string;
  children: ReactNode;
}

export const SelectGroup = ({
  labelText,
  register,
  msgError,
  children,
  ...rest
}: iSelectGroupProps) => {
  return (
    <ContainerSelectGroup>
      <Label>{labelText}</Label>
      <Select {...register} {...rest}>
        {children}
      </Select>
      {msgError && <TextSelectError>{msgError}</TextSelectError>}
    </ContainerSelectGroup>
  );
};
