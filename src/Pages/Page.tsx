import { NavLink } from "react-router-dom";
import React from "react";
import { FunctionComponent, ComponentProps } from "react";
import stylex from "@stylexjs/stylex";
import mainLogo from "../assets/main.svg";
import branch from "../assets/branch.svg";
// import review from "../assets/review.svg";
// import Header from "./Header.tsx";

type PageProps = {
  GoTo: FunctionComponent<ComponentProps<typeof NavLink>>;
};

const Page: React.FC<PageProps> = ({ GoTo }) => {
  return (
    <div>
      <div>
        {/*<GoTo to="/">*/}
        {/*  <img*/}
        {/*    src={review}*/}
        {/*    className={stylex(stylesPage.logo, stylesPage.imageStyle)}*/}
        {/*    alt="logo"*/}
        {/*  />*/}
        {/*</GoTo>*/}

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
      </div>
      <h1 {...stylex.props(stylesPage.text)}>Ⓒ🅅</h1>
    </div>
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
  imageStyle: {
    maxWidth: "275px",
    height: "auto",
    width: "19",
  },

  logo: {
    height: "7em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 300ms",
    // eslint-disable-next-line @stylexjs/valid-styles
    ":hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  },

  animation: {
    animationName: `${spin}, ${fadeIn}`,
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },

  text: {
    color: "#4b51b7",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    order: 2,
    maxWidth: "29vw",
    margin: "10px 0",
    textAlign: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    marginEnd: 29,
    marginStart: 29,
    paddingEnd: 8,
    paddingStart: 8,
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 100,
  },
});

export default Page;
