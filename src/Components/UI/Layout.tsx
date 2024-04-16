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
    <div {...stylex.props(stylesLayout.gridContainer)}>
      <header {...stylex.props(stylesLayout.header)}>Test Header</header>
      <aside {...stylex.props(stylesLayout.sidebar)}>Sidebar Test</aside>
      <main {...stylex.props(stylesLayout.content)}>{children}</main>
      <footer {...stylex.props(stylesLayout.footer)}>Test Footer</footer>
    </div>
  );
};

export default Layout;
