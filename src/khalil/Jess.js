import React from "react";
import "./Jess.css";

function Jess() {
  return (
    <section className="outerContainer">
      <iframe
        title="just iframe"
        width="900"
        height="455"
        src="https://www.youtube.com/embed/ePzhdkG2ZxQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default Jess;

