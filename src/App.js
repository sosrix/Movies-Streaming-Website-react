import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1>Stream It! Movies & Anime platform</h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
