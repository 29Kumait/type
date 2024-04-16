import React from "react";
import stylex from "@stylexjs/stylex";
import DynamicInput from "../Components/Inputs/DynamicInput.tsx";
import lady from "../assets/lady.png";

const stylesAnotherNewPage = stylex.create({
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
    <div {...stylex.props(stylesAnotherNewPage.logo(lady))}>
      <h1 {...stylex.props(stylesAnotherNewPage.header)}>AnotherNewPage</h1>
      <DynamicInput />
    </div>
  );
};

export default AnotherNewPage;
