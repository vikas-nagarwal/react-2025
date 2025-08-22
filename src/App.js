import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./pages/footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="Home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
