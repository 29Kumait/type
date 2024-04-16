import React from "react";
import * as stylex from "@stylexjs/stylex";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DarkModeProvider } from "./Components/Mode/DarkModeContext.tsx";
import Mode from "./Components/Mode/Mode.tsx";
import Page from "./Pages/Page.tsx";
import NewPage from "./Pages/NewPage.tsx";
import AnotherNewPage from "./Pages/AnotherNewPage.tsx";
import Layout from "./Components/UI/Layout.tsx";

const styles = stylex.create({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
  },
  modeButton: {
    position: "fixed",
    top: 29,
    right: 29,
  },
  content: {
    marginTop: "29px",
    width: "100%",
  },
});

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <div {...stylex.props(styles.appContainer)}>
            <div {...stylex.props(styles.modeButton)}>
              <div {...stylex.props(styles.content)}>
                <Mode />
                <Routes>
                  <Route
                    path="/"
                    element={<Page title={"  Ⓒ🅅"} GoTo={Link} />}
                  />
                  <Route path="/new-page" element={<NewPage />} />
                  <Route
                    path="/another-new-page"
                    element={<AnotherNewPage />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
