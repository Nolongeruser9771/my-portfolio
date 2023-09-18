import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import NotFound from "./default_pages/not-found";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="home" element={<Layout children={<Home />} />} />
        <Route path="about" element={<Layout children={<About />} />} />
        <Route path="contact" element={<Layout children={<Contact />} />} />
        <Route path="projects" element={<Layout children={<Projects />} />} />
      </Routes>
    </div>
  );
}

export default App;
