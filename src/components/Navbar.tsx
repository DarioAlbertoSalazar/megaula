import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <p>Megaula</p> 
        <Link to="/">Inicio</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/high-school">High-School</Link>
        <Link to="/college">College</Link>
        <Link to="/college-career">College-Career</Link>
        <Link to="/simulator">Simulator</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
