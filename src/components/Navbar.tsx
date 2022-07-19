import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <img src="" alt="" />
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
