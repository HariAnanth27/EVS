import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div className="head">
      <div className="my-head-flex">
        <a href="http://localhost:3000/">
          <img className="image" src="./images/logo.png" alt="logo" />
        </a>
        <h1>Electronic Voting System</h1>
        <a href="http://localhost:3000/" className="my-head">
          Sundaram Election Software
        </a>
      </div>
    </div>
  );
}
