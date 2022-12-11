import { ReactNode } from "react";
import { iFormAddTech } from "../../components/Pages/Dashboard/Techs/AddTech/ModalAddTech";
import { iUserTechs } from "../AuthContext/@types";

export interface iTechsContext {
  handleAddTech: (data: iFormAddTech) => Promise<void>;
  techs: iUserTechs[];
  handleEditTech: (tech: iUserTechs, newStatusTech: string) => Promise<void>;
  handleDelTech: (tech: iUserTechs) => Promise<void>;
  isLoading: boolean;
}

export interface iTechsProvider {
  children: ReactNode;
}

export interface iHandleUpdateUserTechs {
  update: "add" | "edit" | "rmv";
  techSelected: iUserTechs;
}
