import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useUser = () => {
  const {
    isAuth,
    token,
    user,
    getUser,
    clearUser,
    changeUser,
    changeAuthState,
    clearToken,
    setToken,
  } = useContext(UserContext);

  return {
    isAuth,
    token,
    user,
    getUser,
    clearUser,
    changeUser,
    changeAuthState,
    clearToken,
    setToken,
  };
};

export default useUser;
