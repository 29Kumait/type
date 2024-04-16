import React from "react";
import * as stylex from "@stylexjs/stylex";
import DynamicInput from "../Components/Inputs/DynamicInput.tsx";

const styles = stylex.create({
  header: {
    margin: "20px",
  },
});

const AnotherNewPage: React.FC = () => {
  return (
    <div>
      <h1 {...stylex.props(styles.header)}>AnotherNewPage</h1>
      <DynamicInput />
    </div>
  );
};

export default AnotherNewPage;
