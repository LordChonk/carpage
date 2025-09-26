import React, {useState} from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import Startsida from "./pages/Startsida";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import SälgDinBil from "./pages/SaljDinBil";
import Lager from "./pages/Lager";

function App(){
  const [menuOpen, setMenuOpen] =useState(false);

  const handleLinkClick = () => setMenuOpen(false);
  
  return (
  <div>
    {/* Navbar */}
    <header className="navbar">
      <h1 className="logo">Carpage placeholder</h1>

    {/* Mobile Navbar */}
    <button
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
      >
        {menuOpen ? "\u00D7" : "\u2630"} {/*hamburger button unicode */}
      </button>


      <nav className={menuOpen ? "open" : ""}>
        <NavLink
        to="/"
        onClick={handleLinkClick} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        >
          START
          </NavLink>

         <NavLink
        to="/om-oss" onClick={handleLinkClick}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        >
          OM OSS
          </NavLink>

         <NavLink
        to="/kontakt" onClick={handleLinkClick}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        >
          KONTAKT
          </NavLink>

           <NavLink
        to="/sälgdinbil" onClick={handleLinkClick}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        >
          SÄLJ DIN BIL
          </NavLink>

           <NavLink
        to="/lager" onClick={handleLinkClick}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        >
          FORDON I LAGER
          </NavLink>
      </nav>
    </header>

    {/* Content */}
    <main className="content">
      <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/sälgdinbil" element={<SälgDinBil />} />
          <Route path="/lager" element={<Lager />} />
        </Routes>
    </main>

    {/* Footer */}
    <footer className="footer">
      <p>© {new Date().getFullYear()} name placeholder. All rights reserved</p>
    </footer>
  </div>
  );
}

export default App;