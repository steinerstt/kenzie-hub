import { useState } from "react";
import { iInputGroup, iRegister } from "..";
import { Input } from "../styles";
import { ContainerPassword, IconEye } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface iPasswordProps {
  inputAttributes: iInputGroup;
  register?: iRegister;
}

export const Password = ({ inputAttributes, register }: iPasswordProps) => {
  const { labelRef } = inputAttributes;
  const [isEye, setIsEye] = useState(false);

  const handleEye = () => {
    setIsEye(!isEye);
  };

  return (
    <ContainerPassword>
      <Input
        id={labelRef}
        {...inputAttributes}
        type={isEye ? "text" : "password"}
        {...register}
      />

      <IconEye onClick={handleEye}>
        {!isEye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </IconEye>
    </ContainerPassword>
  );
};
