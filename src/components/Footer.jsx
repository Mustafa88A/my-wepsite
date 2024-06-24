import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const call_me =
  "md:border-2 md:border-black md:rounded-2xl md:w-44 h-12 flex justify-center md:justify-around items-center dark:border-b-2 dark:border-primary ";
const p = "hidden md:block ";
function Footer() {
  return (
    <div className="md:w-[100%] ">
      <div className="flex gap-2 items-center md:justify-center md:h-[70px]    ">
        <a
          href="https://www.linkedin.com/in/mustafa-ahmed-3202522b9"
          target="_blank"
        >
          <div className={call_me}>
            <p className={p}>linkdin </p>
            <FaLinkedin className="w-10 h-10  " />
          </div>
        </a>

        <a href="https://github.com/Mustafa88A" target="_blank">
          <div className={call_me}>
            <p className={p}>githap</p>
            <FaGithub className="w-10 h-10" />
          </div>
        </a>
        <a href="https://www.instagram.com/d8_m_/" target="_blank">
          <div className={call_me}>
            <p className={p}>instgram</p>
            <FaInstagramSquare className="w-10 h-10" />
          </div>
        </a>
      </div>
    </div>
  );
}
export default Footer;
