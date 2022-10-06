import React from "react";
import logo from "../assets/images/logo.png";

function handleClick(id) {
  document.getElementById(id).style.transform = "scale(2)";
  document.getElementById(id).style.transition = "transform 0.25s ease";
}

export default function Card() {
  return (
    <div className="container text-center mt-3">
      <div className="mt-5 bg-dark">
        <div class="border-0">
          <img
            src={logo}
            alt="img1"
            id="img1"
            onClick={handleClick.bind(this, "img1")}
          />
        </div>
        <div class="mt-5 border-0">
          <img
            src={logo}
            alt="img2"
            id="img2"
            onClick={handleClick.bind(this, "img2")}
          />
        </div>
      </div>
    </div>
  );
}
