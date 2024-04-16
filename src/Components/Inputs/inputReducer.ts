import { State, Action, ActionType } from "./ actions.ts";
import { v4 as uuidv4 } from "uuid";

export const inputReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.AddInput:
      return [
        ...state,
        {
          id: uuidv4(),
          type: "text",
          value: "",
          editable: true,
          groupName: action.groupName,
        },
      ];
    case ActionType.UpdateInput:
      return state.map((input) =>
        input.id === action.id ? { ...input, value: action.value } : input,
      );
    case ActionType.ToggleEditability:
      return state.map((input) =>
        input.id === action.id
          ? { ...input, editable: !input.editable }
          : input,
      );
    case ActionType.Submit:
      return state
        .map((input) => ({ ...input, editable: false }))
        .filter((input) => input.value.trim() !== "");
    default:
      return state;
  }
};
