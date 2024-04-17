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
    // Add your styles for header
  },
  sidebar: {
    gridArea: "sidebar",
    // Add your styles for sidebar
  },
  content: {
    gridArea: "content",
    // Add your styles for content
  },
  footer: {
    gridArea: "footer",
    // Add your styles for footer
  },
});

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  sidebar,
  content,
  footer,
}) => {
  return (
    <div {...stylex.props(stylesLayout.gridContainer)}>
      <header {...stylex.props(stylesLayout.header)}>{header}</header>
      <aside {...stylex.props(stylesLayout.sidebar)}>{sidebar}</aside>
      <main {...stylex.props(stylesLayout.content)}>{content}</main>
      <footer {...stylex.props(stylesLayout.footer)}>{footer}</footer>
    </div>
  );
};
export default Layout;

// <Layout
//     header={<div>Header Content</div>}
//     sidebar={<div>Sidebar Content</div>}
//     content={<div>Main Content</div>}
//     footer={<div>Footer Content</div>}
// />

//
// const styleApp = stylex.create({
//   text: {
//     color: "#4b51b7",
//     alignItems: "center",
//     borderColor: "#4a86c7",
//     borderRadius: 8,
//     borderStyle: "solid",
//     borderWidth: 2,
//     display: "flex",
//     flexBasis: 0,
//     flexGrow: 1,
//     height: "auto",
//     justifyContent: "center",
//     marginEnd: 29,
//     marginStart: 29,
//     paddingEnd: 8,
//     paddingStart: 8,
//     maxWidth: "29vw",
//     backgroundColor: "rbg(106,115,123)",
//     paddingTop: 100,
//     textAlign: "center",
//   },
//   base: {
//     width: {
//       default: 800,
//       "@media (max-width: 800px)": "100%",
//       "@media (min-width: 1540px)": 1366,
//     },
//   },
//   img: {
//     width: 29,
//     height: "auto",
//   },
// });
