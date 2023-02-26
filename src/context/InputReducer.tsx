import { Action, AppState } from "./InputContext";

const InputReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

export default InputReducer;
