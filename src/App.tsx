import {useState} from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import Startsida from "./pages/Startsida";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import SälgDinBil from "./pages/SaljDinBil";
import Lager from "./pages/Lager";
import {FaInstagram} from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
function App(){
  const [menuOpen, setMenuOpen] =useState(false);

  const handleLinkClick = () => setMenuOpen(false);
  
  return (
  <div>
    {/* Navbar */}
    <header className="navbar">
      <NavLink to="/" className="logo-button">
      <img src="/logo.jpeg" alt="Logo" />
      </NavLink>

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

     <div className="footer-row" >
     <div className="footer-col"> 
        <h1>KONTAKTUPPGIFTER</h1>
        <address>
          <a
          href="https://maps.app.goo.gl/i8wuyeWUhZtqd5ep7"
          target="_blank"
          rel="noopener noferrer"
          style={{ textDecoration: 'none' }}>
          <FaLocationPin/> Hyvelgatan 37 <br /> 
          741 71 Knivsta 
          </a> {/*add pin */}
        </address><br/>
        <FaPhone/> <a href="tel:0720093648"
        style={{textDecoration: 'none'}}>072-0093648</a>
        
      </div>

      <div className="footer-col">
        <h1>ÖPPETTIDER</h1>
        <h3>Mån-Sön: Endast tidsbokning</h3>
    </div>
  </div>

<div className="social-icons"> {/* länk till instagram konto mellan "", tex. href="https://instagram.com/konto"*/}
<a
                    href="" 
                    target="_blank"
                    rel="noopener noreferrer">
    <FaInstagram/> 
    </a>
    <a
    href="https://www.tiktok.com/@vkperformancese?_r=1&_t=ZN-919Mq8Pd8yM"
    target="_blank"
    rel="noopener noreferrer"
    >
    <FaTiktok/>
    </a>
    <a 
    href="https://wa.me/46720093648"
    target="_blank"
    style={{textDecoration: 'none'}}
    rel="noopener noreferrer"><FaWhatsapp/></a>
</div>

      <h3>© {new Date().getFullYear()} VK Perfomance. Hemsidan skapad av Adrian Hjert</h3>
    </footer>
  </div>
  );
}

export default App;