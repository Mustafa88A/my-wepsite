import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <div id="hadar">
      <img
        className="imge-nav"
        src="https://cdn-icons-png.flaticon.com/128/2412/2412869.png"
        alt=""
      />
      <nav className="navbar md:text-sm md:flex-col">
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
