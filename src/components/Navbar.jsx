import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center bg-primary">
      <div className="bg-[#f4cf48] dark:text-black flex justify-between w-[89%]">
        <img
          className="imge-nav"
          src="https://cdn-icons-png.flaticon.com/128/2412/2412869.png"
          alt=""
        />

        {/* Hamburger Icon */}
        <button className="block md:hidden text-black" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={` md:text-base md:w-[30%] w-full h-52 md:h-20  absolute md:static top-20 left-0 bg-[#f4cf48] z-10 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="navbar-links flex flex-col gap-7  text-[18px] md:flex-row">
            <li>
              <Link to="#About" smooth onClick={() => setMenuOpen(false)}>
                01. About
              </Link>
            </li>
            <li>
              <Link to="#Skills" smooth onClick={() => setMenuOpen(false)}>
                02. Skills
              </Link>
            </li>
            <li>
              <Link to="#Cards" smooth onClick={() => setMenuOpen(false)}>
                03. My work
              </Link>
            </li>
            <li>
              <Link to="#Contact" smooth onClick={() => setMenuOpen(false)}>
                04. Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
