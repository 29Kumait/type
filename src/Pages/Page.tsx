import React from "react";
import { Link } from "react-router-dom";
import { FunctionComponent, ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import mainLogo from "../assets/main.svg";
import branch from "../assets/branch.svg";

type PageProps = {
  title: string;
  GoTo: FunctionComponent<ComponentProps<typeof Link>>;
};

const Page: React.FC<PageProps> = ({ title, GoTo }) => {
  return (
    <>
      <h1>{title}</h1>
      <nav>
        <GoTo to="/">
          <img
            src={branch}
            className="logo"
            {...stylex.props(styles.logo)}
            alt="logo"
          />
        </GoTo>

        <GoTo to="/new-page">
          <img
            src={mainLogo}
            className="logo"
            {...stylex.props(styles.logo, styles.animation)}
            alt="logo"
          />
        </GoTo>
      </nav>
    </>
  );
};

const logoSpin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});
const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  logo: {
    height: "6em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 29ms",
    // eslint-disable-next-line @stylexjs/valid-styles
    ":hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  },

  animation: {
    animationName: `${logoSpin}, ${fadeIn}`,
    animationDuration: "20s, 29s",
    animationIterationCount: "infinite, infinite",
    animationTimingFunction: "linear, ease-out",
  },
});

export default Page;
