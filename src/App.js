import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend"; // ✅ fixed path

import "./App.css";

export default function App() {
   const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/frontend", element: <Frontend /> },
  { path: "*", element: <NoPage /> }
];

  return (
    <BrowserRouter>
      <Navbar />
          
        <Routes>
          {routes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}
