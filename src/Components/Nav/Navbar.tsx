import { NavLink } from "react-router-dom";
import stylex from "@stylexjs/stylex";

interface NavbarProps {
  activeLink: string;
  setActiveLink: (activeLink: string) => void;
  isMenuOpen: boolean;
}

const Navbar = ({ activeLink, setActiveLink, isMenuOpen }: NavbarProps) => {
  const navItems = ["Log in", "New in", "Link"].map((item) => (
    <NavLink
      key={item}
      to={`/${item}`}
      {...stylex.props(
        navStyles.navItem,
        activeLink === item && navStyles.activeNavItem,
      )}
      onClick={() => setActiveLink(item)}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </NavLink>
  ));

  return (
    <div
      data-testid="navbar"
      style={{ display: isMenuOpen ? "block" : "none" }}
    >
      {navItems}
    </div>
  );
};

const navStyles = stylex.create({
  navItem: {
    position: "relative", // For the underline effect
    margin: "0 1rem",
    textDecoration: "none",
    transition: "color 0.3s",
    ":hover": {
      color: "#3E3E3E57",
    },

    "::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: 0,
      height: "2px",
      backgroundColor: "#54C3EF9E",
      transition: "width 0.3s",
    },
  },
  activeNavItem: {
    fontWeight: "bold",
    "::after": {
      width: "100%",
    },
  },
});

export default Navbar;
