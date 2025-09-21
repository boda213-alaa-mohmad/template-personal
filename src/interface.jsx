import "./css/header.css";
import "./css/interface.css";

// Don't forget accessbility
export default function Interface() {
  return (
    <section className="hero">
      {/* <div></div> */}

      <div className="hero-content">
        <h3 className="hero-subtitle">Creative Designer</h3>
        <h1>Transforming Ideas Into Beautiful Experiences</h1>
        <p className="subtitle">
          I craft digital experiences that captivate, engage, and inspire
          through thoughtful design and innovative solutions
        </p>
        <button className="cta-button">Explore My Work</button>
      </div>

      {/* <div></div> */}
    </section>
  );
}
