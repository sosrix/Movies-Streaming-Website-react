import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./pages/container";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1>Stream It! Movies & Anime platform</h1>
      </div>

      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
