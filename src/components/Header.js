import Me from "./images/Me.JPEG";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Me} alt="Prof" className="Prof-Img" />
      </nav>
    </header>
  );
}
