import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuButton from "./MenuButton";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Weather from "./Pages/Weather";
import Flags from "./Pages/Flags";

export default function App() {
  return (
    <BrowserRouter>
      <MenuButton />

      <div style={{ paddingTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/flags" element={<Flags />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
