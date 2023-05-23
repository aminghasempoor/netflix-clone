import { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LodingProvider = ({ children }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  return (
    <LoadingContext.Provider value={{ loadingPage, setLoadingPage }}>
      {children}
    </LoadingContext.Provider>
  );
};
