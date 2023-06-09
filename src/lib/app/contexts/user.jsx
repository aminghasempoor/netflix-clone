import { createContext, useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import { GET_USER_ROUTE } from "@/core/data/apiRoutes";

const initialUser = {
  isAuth: false,
  userChangedLanguage: false,
  token: null,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_USER":
      return { ...state, user: {} };
    case "CHANGE_USER":
      return { ...state, user: action.user };
    case "CHANGE_AUTH_STATE":
      return { ...state, isAuth: action.isAuth };
    case "CLEAR_TOKEN":
      localStorage.removeItem("_token");
      return { ...state, token: null };
    case "SET_TOKEN":
      localStorage.setItem("_token", action.token);
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialUser);

  const clearUser = useCallback(() => {
    dispatch({ type: "CLEAR_USER" });
  }, []);

  const changeUser = useCallback((user) => {
    dispatch({ type: "CHANGE_USER", user });
  }, []);

  const changeAuthState = useCallback((isAuth) => {
    dispatch({ type: "CHANGE_AUTH_STATE", isAuth });
  }, []);

  const clearToken = useCallback(() => {
    dispatch({ type: "CLEAR_TOKEN" });
  }, []);

  const setToken = useCallback((token) => {
    dispatch({ type: "SET_TOKEN", token });
  }, []);

  const getUser = useCallback(
    (callback = () => {}) => {
      // axios
      //   .get(GET_USER_ROUTE, {
      //     headers: {
      //       authorization: `Bearer ${state.token}`,
      //     },
      //   })
      //   .then(({ data }) => {
      //     if (typeof callback === "function") callback(data);
      //   });
    },
    [state.token]
  );

  useEffect(() => {
    const localToken = localStorage.getItem("_token");
    if (localToken) dispatch({ type: "SET_TOKEN", token: localToken });
  }, []);

  useEffect(() => {
    if (!state.token) {
      clearUser();
      changeAuthState(false);
      return;
    }

    getUser((data) => {
      changeUser(data);
      changeAuthState(true);
    });
  }, [state.token]);

  return (
    <UserContext.Provider
      value={{
        isAuth: state.isAuth,
        token: state.token,
        user: state.user,
        getUser,
        clearUser,
        changeUser,
        changeAuthState,
        clearToken,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
