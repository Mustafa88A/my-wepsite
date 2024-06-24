import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <div className="flex justify-center bg-primary">
      <div className="bg-[#f4cf48] dark:text-black flex justify-between w-[89%]  ">
        <img
          className="imge-nav"
          src="https://cdn-icons-png.flaticon.com/128/2412/2412869.png"
          alt=""
        />

        <nav className="text-xs w-[50%] md:w-[30%] md:text-base  ">
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
    </div>
  );
}
export default Navbar;
