import React from "react";
import { Link } from "react-router-dom";
import { FunctionComponent, ComponentProps } from "react";
import stylex from "@stylexjs/stylex";
import mainLogo from "../assets/main.svg";
import branch from "../assets/branch.svg";
import review from "../assets/review.svg";
import LanguageProficiency from "../Components/Data/LanguageProficiency.tsx";

type PageProps = {
  title: string;
  GoTo: FunctionComponent<ComponentProps<typeof Link>>;
};

const Page: React.FC<PageProps> = ({ title, GoTo }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <LanguageProficiency />
      </div>
      <nav>
        <GoTo to="/">
          <img
            src={review}
            className="logo"
            {...stylex.props(stylesPage.logo, stylesPage.imageStyle)}
            alt="logo"
          />
        </GoTo>

        <GoTo to="/new-page">
          <img
            src={mainLogo}
            className="logo"
            {...stylex.props(
              stylesPage.animation,
              stylesPage.logo,
              stylesPage.imageStyle,
            )}
            alt="logo"
          />
        </GoTo>

        <GoTo to="/another-new-page">
          <img
            src={branch}
            className="logo"
            {...stylex.props(stylesPage.logo, stylesPage.imageStyle)}
            alt="logo"
          />
        </GoTo>
      </nav>
    </>
  );
};

const spin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});
const fadeIn = stylex.keyframes({
  from: { opacity: 0.5 },
  to: { opacity: 1 },
});

const stylesPage = stylex.create({
  logo: {
    height: "6em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 300ms",
    // eslint-disable-next-line @stylexjs/valid-styles
    ":hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },

  imageStyle: {
    width: "190",
    height: "auto",
  },

  animation: {
    animationName: `${spin}, ${fadeIn}`,
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
});

export default Page;
