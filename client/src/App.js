import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Exhibitors from "./pages/Exhibitors";
import Home from "./pages/Home";
import Visitors from "./pages/Visitors";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/visitors" element={<Visitors />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
