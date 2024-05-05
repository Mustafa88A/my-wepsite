import linkdin from "../img/linkedin .png";
import githap from "../img/fullgithub.png";
import instgram from "../img/instagram.png";
const call_me =
  "md:border-2 md:border-black md:rounded-2xl md:w-44 h-12 flex justify-center md:justify-around items-center  ";
const p = "hidden md:block";
function Footer() {
  return (
    <div className="  ">
      <div className="flex gap-2 items-end   ">
        <a
          href="https://www.linkedin.com/in/mustafa-ahmed-3202522b9"
          target="_blank"
        >
          <div className={call_me}>
            <p className={p}>linkdin </p>
            <img className="w-10" src={linkdin} alt="" />
          </div>
        </a>

        <a href="https://github.com/Mustafa88A" target="_blank">
          <div className={call_me}>
            <p className={p}>githap</p>
            <img className="w-10" src={githap} alt="" />
          </div>
        </a>
        <a href="https://www.instagram.com/d8_m_/" target="_blank">
          <div className={call_me}>
            <p className={p}>instgram</p>
            <img className="w-10" src={instgram} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}
export default Footer;
