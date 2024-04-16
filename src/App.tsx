import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DarkModeProvider } from "./Components/Mode/DarkModeContext.tsx";
import Mode from "./Components/Mode/Mode.tsx";
import Page from "./Pages/Page.tsx";
import NewPage from "./Pages/NewPage.tsx";
import AnotherNewPage from "./Pages/AnotherNewPage.tsx";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router basename="/">
        <Mode />
        <Page title={" ⓣ🅈ⓟⒺ "} GoTo={Link} />
        <Routes>
          <Route path="/" element={<Page title={" ⓣ🅈ⓟⒺ "} GoTo={Link} />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/another-new-page" element={<AnotherNewPage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
