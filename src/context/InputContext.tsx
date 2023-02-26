import React, { createContext, useReducer } from "react";
import InputReducer from "./InputReducer";

export type AppState = typeof initialState;
export type Action =
  | { type: "SET_INPUT_VALUE"; payload: number }
  | { type: "SET_INPUT_VALUE_TO_100" };

interface IInputProviderProps {
  children: React.ReactNode;
}

const initialState = {
  inputValue: 0,
};

const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => ({}) });

function InputValueProvider({ children }: IInputProviderProps) {
  const [state, dispatch] = useReducer(InputReducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
