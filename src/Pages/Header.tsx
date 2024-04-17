import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { RocketIcon } from "@primer/octicons-react";
import Navbar from "../Components/Nav/Navbar.tsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <div {...stylex.props(stylesHeader.headerContainer)}>
      <Navbar
        {...stylex.props(stylesHeader.navbar)}
        activeLink={activeLink || "defaultLink"}
        setActiveLink={(value: string) => setActiveLink(value)}
        isMenuOpen={isMenuOpen}
      />
      <button
        {...stylex.props(stylesHeader.button)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RocketIcon size={19} />
      </button>
    </div>
  );
};

const stylesHeader = stylex.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navbar: {
    alignSelf: "stretch",
    order: 1,
  },

  button: {
    padding: "3px 7px",
    fontSize: "9px",
    height: "39px",
    width: "39px",
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 9,
    display: "inline-flex",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 5px",
  },
});

export default Header;
