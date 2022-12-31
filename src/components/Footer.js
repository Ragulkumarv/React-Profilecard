import twitter from "./images/Twitter Icon.svg";
import facebook from "./images/Facebook Icon.svg";
import instagram from "./images/Instagram Icon.svg";
import linkedin from "./images/Linkedin Icon.svg";
import github from "./images/GitHub Icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footerWrap">
        <img src={twitter} alt="Twitter" />
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={linkedin} alt="Linkedin" />
        <img src={github} alt="GitHub" />
      </div>
    </footer>
  );
}
