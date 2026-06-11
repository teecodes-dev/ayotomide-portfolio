import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";

import Spotlight from "./components/Spotlight";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      
      <Spotlight />

      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
