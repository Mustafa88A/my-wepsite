import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <div className="bg-[#f4cf48] text-black flex justify-between ">
      <img
        className="imge-nav"
        src="https://cdn-icons-png.flaticon.com/128/2412/2412869.png"
        alt=""
      />
      <nav className="w-[50%] md:w-[30%] md:text-sm  ">
        <ul className="navbar-links">
          <li>
            <Link to="#About" smooth>
              01. About{" "}
            </Link>
          </li>

          <li>
            <Link to="#Skills" smooth>
              02. Skills{" "}
            </Link>
          </li>

          <li>
            <Link to="#Cards" smooth>
              03. My work{" "}
            </Link>
          </li>

          <li>
            <Link to="#Contact" smooth>
              04. Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
