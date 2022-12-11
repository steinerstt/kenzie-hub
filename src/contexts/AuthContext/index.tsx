import { isAxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iFormLogin } from "../../components/Pages/Login/FormLogin";
import { iFormRegister } from "../../components/Pages/Register/FormRegister";
import { api } from "../../services/api";
import { iAuthContext, iAuthProvider, iResponseLogin, iUser } from "./@types";

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as iUser);
  const [isLoginIncorrect, setIsLoginIncorrect] = useState<boolean>(false);
  const [isRegisterIncorrect, setIsRegisterIncorrect] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    const handleAutoLogin = async (): Promise<void>  => {
      setIsLoading(true)
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        let path = window.location.pathname;
        navigate(path != "/" ? path : "/dashboard", { replace: true });
      } catch (error) {
        localStorage.removeItem("@kenzieHub:token");
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    };

    if (token) {
      handleAutoLogin();
    }
  }, []);

  const handleLogin = async (data: iFormLogin): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.post<iResponseLogin>("/sessions", data);
      const { token, user } = response.data;

      localStorage.setItem("@kenzieHub:token", token);
      toast.success("Login realizado com sucesso");
      setUser(user);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error("OOPS! Algo deu errado");
      if (isAxiosError(error)) {
        const msg = error.response?.data.message;
        if (msg == "Incorrect email / password combination") {
          setIsLoginIncorrect(true);
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: iFormRegister): Promise<void> => {
    setIsLoading(true);
    try {
      await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error("OOPS! Algo deu errado");
      if (isAxiosError(error)) {
        const msg = error.response?.data.message;
        if (msg === "Email already exists") {
          setIsRegisterIncorrect(true);
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@kenzieHub:token");
    setUser({} as iUser);
  };

  const handleUpdateStateUser = (newStateUser: iUser) => {
    setUser(newStateUser);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        isLoginIncorrect,
        user,
        handleRegister,
        isRegisterIncorrect,
        handleLogout,
        handleUpdateStateUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
