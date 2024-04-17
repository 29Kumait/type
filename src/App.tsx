import React from "react";
import stylex from "@stylexjs/stylex";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DarkModeProvider } from "./Components/Mode/DarkModeContext.tsx";
import Mode from "./Components/Mode/Mode.tsx";
import Page from "./Pages/Page.tsx";
import NewPage from "./Pages/NewPage.tsx";
import AnotherNewPage from "./Pages/AnotherNewPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <DarkModeProvider>
        <div {...stylex.props(styles.root, styles.container)}>
          <Mode />
          <Routes>
            <Route path="/" element={<Page title={"Ⓒ🅅"} GoTo={Link} />} />
            <Route path="/new-page" element={<NewPage />} />
            <Route path="/another-new-page" element={<AnotherNewPage />} />
          </Routes>
        </div>
      </DarkModeProvider>
    </Router>
  );
};

const styles = stylex.create({
  root: {
    margin: "0 auto",
    padding: "0",
    width: "100%",
    maxWidth: "100vw",
    textAlign: "center",
    fontFamily:
      ' "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;',
    lineHeight: 1.5,
    fontWeight: 400,
  },

  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    marginHorizontal: "auto",
    maxWidth: 1344,
    padding: "0 48px",
    width: "100%",
    "@media (max-width: 648px)": {
      padding: "0 24px",
    },
  },
});
export default App;
