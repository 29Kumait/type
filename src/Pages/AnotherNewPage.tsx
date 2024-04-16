import React from "react";
import * as stylex from "@stylexjs/stylex";
import DynamicInput from "../Components/Inputs/DynamicInput.tsx";
import lady from "../assets/lady.png";

const styles = stylex.create({
  header: {
    margin: "20px",
  },
  logo: (lady: string) => ({
    backgroundImage: `url("${lady}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }),
});

const AnotherNewPage: React.FC = () => {
  return (
    <div {...stylex.props(styles.logo(lady))}>
      <h1 {...stylex.props(styles.header)}>AnotherNewPage</h1>
      <DynamicInput />
    </div>
  );
};

export default AnotherNewPage;
