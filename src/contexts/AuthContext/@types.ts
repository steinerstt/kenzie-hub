import { ReactNode } from "react";
import { iFormLogin } from "../../components/Pages/Login/FormLogin";
import { iFormRegister } from "../../components/Pages/Register/FormRegister";

export interface iAuthProvider {
  children: ReactNode;
}

export interface iAuthContext {
  handleLogin: (data: iFormLogin) => Promise<void>;
  isLoginIncorrect: boolean;
  user: iUser;
  handleRegister: (data: iFormRegister) => Promise<void>;
  isRegisterIncorrect: boolean;
  handleLogout: () => void;
  handleUpdateStateUser: (newStateUser: iUser) => void;
  isLoading: boolean;
}

export interface iUserTechs {
  id: string;
  title: string;
  status: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  techs: iUserTechs[];
}

export interface iResponseLogin {
  user: iUser;
  token: string;
}

export interface iResponseAutoLogin {
  data: iUser;
}
