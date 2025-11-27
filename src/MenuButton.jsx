import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      
      <button 
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px 15px",
          background: "#222",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ☰ Menu
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "10px",
            background: "#333",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link to="/" onClick={() => setOpen(false)} style={{ color: "white" }}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} style={{ color: "white" }}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)} style={{ color: "white" }}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} style={{ color: "white" }}>Contact</Link>
          <Link to="/weather" onClick={() => setOpen(false)} style={{ color: "withe" }}>Weather</Link>
        </div>
      )}
    </div>
  );
}
