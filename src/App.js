import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend"; // ✅ fixed path
import Application from "./pages/Application"; // ✅ fixed path
import Website from "./pages/Website"; // ✅ fixed path
import Term_condition from "./pages/Term-condition";
import Usestate from "./pages/Usestate"; // ✅ fixed path
import Useefact from "./pages/Useeffect "; // ✅ fixed path

import "./App.css";

export default function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/service", element: <Service /> },
    { path: "/Frontend", element: <Frontend /> },
    { path: "/Application", element: <Application /> },
    { path: "/Website", element: <Website /> },
    { path: "/term-condition", element: <Term_condition /> },
    { path: "/Usestate", element: <Usestate /> },
    { path: "/Useefact", element: <Useefact /> },
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
