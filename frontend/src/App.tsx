import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
