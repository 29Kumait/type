// actions.ts
export interface InputField {
  id: string;
  type: "text";
  value: string;
  editable: boolean;
  groupName: string;
}

export type State = InputField[];

export enum ActionType {
  AddInput = "ADD_INPUT",
  UpdateInput = "UPDATE_INPUT",
  ToggleEditability = "TOGGLE_EDITABILITY",
  Submit = "SUBMIT",
}

export type Action =
  | { type: ActionType.AddInput; groupName: string }
  | { type: ActionType.UpdateInput; id: string; value: string }
  | { type: ActionType.ToggleEditability; id: string }
  | { type: ActionType.Submit };
