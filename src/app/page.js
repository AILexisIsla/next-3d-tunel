import Image from "next/image";

export default function Home() {
  return (
    <body>
      <nav>
        <div className="nav-items">
          <a href="#">Work</a>
          <a href="#">Archive</a>
        </div>
        <div className="logo">
          <a href="#">Tunel vision</a>
        </div>
        <div className="nav-items">
          <a href="#">Info</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <footer>
        <p>Watch showreel</p>
        <p>Lanzado 2024</p>
      </footer>

      <div className="container">
        <div className="overlay"></div>
        <div className="sliders"></div>
      </div>
    </body>
  );
}
