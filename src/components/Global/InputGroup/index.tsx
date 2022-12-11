import { InputHTMLAttributes, Ref } from "react";
import { ChangeHandler } from "react-hook-form";
import { Common } from "./Common";
import { Password } from "./Password";
import { ContainerInputGroup, Label, TextInputError } from "./styles";

export interface iRegister {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: Ref<any>;
  name: string;
}

export interface iInputGroup extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  labelRef: string;
  register?: iRegister;
  msgError?: string;
}

export const InputGroup = ({
  labelText,
  labelRef,
  register,
  msgError,
  ...rest
}: iInputGroup) => {
  const typeInput = rest.type;
  const inputAttributes = {
    labelText,
    labelRef,
    register,
    ...rest,
  };

  return (
    <ContainerInputGroup>
      <Label htmlFor={labelRef}>{labelText}</Label>

      {!(typeInput == "password") ? (
        <Common inputAttributes={inputAttributes} register={register} />
      ) : (
        <Password inputAttributes={inputAttributes} register={register} />
      )}

      {msgError && <TextInputError>{msgError}</TextInputError>}
    </ContainerInputGroup>
  );
};
