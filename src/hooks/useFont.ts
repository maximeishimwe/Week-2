import { useContext } from "react";
import { FontContext } from "../context/FontContext";

export const useFont = () => {
  const context = useContext(FontContext);

  return context;
};
