import { isAxiosError } from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iFormAddTech } from "../../components/Pages/Dashboard/Techs/AddTech/ModalAddTech";
import { api } from "../../services/api";
import { iUserTechs } from "../AuthContext/@types";
import { useAuthContext } from "../AuthContext/hook";
import {
  iHandleUpdateUserTechs,
  iTechsContext,
  iTechsProvider,
} from "./@types";

export const TechsContext = createContext({} as iTechsContext);

export const TechsProvider = ({ children }: iTechsProvider) => {
  const { user, handleUpdateStateUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { techs } = user;

  const token = localStorage.getItem("@kenzieHub:token");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const handleAddTech = async (data: iFormAddTech) => {
    setIsLoading(true);
    try {
      const response = await api.post("/users/techs", data);
      toast.success("Tech adicionada com sucesso");
      handleUpdateUserTechs({ update: "add", techSelected: response.data });
    } catch (error) {
      if (isAxiosError(error)) {
        const msg = error.response?.data.message;
        if (
          msg ==
          "User Already have this technology created you can only update it"
        ) {
          toast.error("Você já cadastrou uma tec com o mesmo nome");
        } else {
          toast.error("OOPS! Algo deu errado");
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditTech = async (tech: iUserTechs, newStatusTech: string) => {
    if (tech.status != newStatusTech) {
      const updateTech = {
        status: newStatusTech,
      };

      setIsLoading(true);
      try {
        const response = await api.put(`/users/techs/${tech.id}`, updateTech);
        toast.success("Tec atualizada com sucesso");
        handleUpdateUserTechs({ update: "edit", techSelected: response.data });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDelTech = async (tech: iUserTechs) => {
    setIsLoading(true);
    try {
      await api.delete(`/users/techs/${tech.id}`);
      handleUpdateUserTechs({ update: "rmv", techSelected: tech });
      toast.info("Tec deletada com sucesso")
    } catch (error) {
      toast.error("OOPS! Algo deu errado")
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateUserTechs = ({
    update,
    techSelected,
  }: iHandleUpdateUserTechs) => {
    if (update == "add") {
      handleUpdateStateUser({ ...user, techs: [...techs, techSelected] });
    }

    if (update == "edit") {
      const techsUpdate = techs.map((tech) => {
        if (tech.id == techSelected.id) {
          return techSelected;
        }
        return tech;
      });
      handleUpdateStateUser({ ...user, techs: techsUpdate });
    }

    if (update == "rmv") {
      const techsFiltered = techs.filter(({ id }) => id != techSelected.id);
      handleUpdateStateUser({ ...user, techs: techsFiltered });
    }
  };

  return (
    <TechsContext.Provider
      value={{ handleAddTech, techs, handleEditTech, handleDelTech, isLoading }}
    >
      {children}
    </TechsContext.Provider>
  );
};
