import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FunctionComponent, ComponentProps } from "react";
import stylex from "@stylexjs/stylex";
import mainLogo from "../assets/main.svg";
import branch from "../assets/branch.svg";
import review from "../assets/review.svg";
import { RocketIcon } from "@primer/octicons-react";
import Navbar from "../Components/Nav/Navbar.tsx";

type PageProps = {
  title: string;
  GoTo: FunctionComponent<ComponentProps<typeof Link>>;
};

const Page: React.FC<PageProps> = ({ GoTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState<string | null>(null);
  return (
    <div>
      <header>
        <h1>Ⓒ🅅</h1>
      </header>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <RocketIcon size={19} />
      </button>
      <Navbar
        {...stylex.props(nav.navbar)}
        activeLink={activeLink || "defaultLink"}
        setActiveLink={(value: string) => setActiveLink(value)}
        isMenuOpen={isMenuOpen}
      />

      <GoTo to="/">
        <img
          src={review}
          className={stylex(stylesPage.logo, stylesPage.imageStyle)}
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
});
const nav = stylex.create({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40 auto",
  },
});
export default Page;
