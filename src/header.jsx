import { useEffect, useState } from "react";
import "./header.css";
import { Links } from "./links";

//which better () => or count++

export function Header() {
  let [toggleBtn, setToggleBtn] = useState(false);
  function handleClick() {
    setToggleBtn(!toggleBtn);
  }

  function handleResize() {
    if (this.window.innerWidth > 767) {
      setToggleBtn(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //removing
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h2>Personal Shape</h2>
      </div>
      <ul className="listItem">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portofilo</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div onClick={handleClick} className="mobile-toggle" id="mobileToggle">
        {toggleBtn ? (
          <span className="close">❌</span>
        ) : (
          <>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </>
        )}
      </div>
      <Links isOpen={toggleBtn} />
    </header>
  );
}
