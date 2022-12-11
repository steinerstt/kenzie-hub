import { useContext } from "react";
import { TechsContext } from ".";

export const useTechsContext = () => {
  const conext = useContext(TechsContext);
  return conext;
};
