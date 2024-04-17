import * as stylex from "@stylexjs/stylex";
import React from "react";

const stylesLayout = stylex.create({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "200px auto",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `
      "header header"
      "sidebar content"
      "footer footer"
    `,
    height: "100vh",
  },
  header: {
    gridArea: "header",
    //
  },
  sidebar: {
    gridArea: "sidebar",
    //
  },
  content: {
    gridArea: "content",
    //
  },
  footer: {
    gridArea: "footer",
    //
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

// Component structure
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div {...stylex.props(styleApp.base)}>
      <h1 {...stylex.props(styleApp.text)}>Ⓒ🅅</h1>
      <div {...stylex.props(stylesLayout.gridContainer)}>
        <header {...stylex.props(stylesLayout.header)}>Test Header</header>
        <aside {...stylex.props(stylesLayout.sidebar)}>Sidebar Test</aside>
        <main {...stylex.props(stylesLayout.content)}>{children}</main>
        <footer {...stylex.props(stylesLayout.footer)}>Test Footer</footer>
      </div>
    </div>
  );
};

export default Layout;

const styleApp = stylex.create({
  text: {
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    justifyContent: "center",
    marginEnd: 29,
    marginStart: 29,
    paddingEnd: 8,
    paddingStart: 8,
    maxWidth: "29vw",
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 100,
    textAlign: "center",
  },
  base: {
    width: {
      default: 800,
      "@media (max-width: 800px)": "100%",
      "@media (min-width: 1540px)": 1366,
    },
  },
  img: {
    width: 29,
    height: "auto",
  },
});
