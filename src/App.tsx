import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page from "./Pages/Page.tsx";
import NewPage from "./Pages/NewPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page title={" ⓣ🅈ⓟⒺ "} GoTo={Link} />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
