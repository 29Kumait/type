import React from "react";
import * as stylex from "@stylexjs/stylex";
import { ActionType, InputField, Action } from "./ actions.ts";

interface InputProps {
  input: InputField;
  dispatch: React.Dispatch<Action>;
}

const Input: React.FC<InputProps> = ({ input, dispatch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.UpdateInput,
      id: input.id,
      value: e.target.value,
    });
  };

  if (!input.editable) {
    return <span>{input.value}</span>;
  }

  return (
    <input
      {...stylex.props(styles.input)}
      type="text"
      value={input.value}
      onChange={handleInputChange}
    />
  );
};

const styles = stylex.create({
  input: {
    backgroundColor: "#4b51b7",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "var(--primary-text)",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 1.25,
    paddingBottom: 10,
    paddingEnd: 16,
    paddingTop: 26,
    width: "100%",
    alignSelf: "center",
  },
});

export default Input;
