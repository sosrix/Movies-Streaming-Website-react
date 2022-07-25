import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./pages/routes";
import Header from "./pages/header/header";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/browse";
import Watch from "./pages/watch/watch";
import Footer from "./pages/footer/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.WATCH} element={<Watch />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
