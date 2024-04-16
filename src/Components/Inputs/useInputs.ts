import { useReducer } from "react";
import { inputReducer } from "./inputReducer";
import { InputField } from "./ actions.ts";

export const useInputs = (initialState: InputField[] = []) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);
  return { state, dispatch };
};
