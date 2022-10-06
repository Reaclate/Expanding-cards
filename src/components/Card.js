import React, {useState} from "react";
import logo from "../assets/images/logo.png";

function handleClick() {
  document.getElementById("img1").style.transform = "scale(1.5)";
  document.getElementById("img1").style.transition = "transform 0.25s ease";
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
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
