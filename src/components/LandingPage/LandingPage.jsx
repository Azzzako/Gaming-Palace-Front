import React from "react";
import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";

function LandingPage() {
  return (
    <div id={styles.background}>
      <div id={styles.container}>{/* <h1>Welcome to Gaming Palace</h1> */}</div>
      <Link to="/home">
        <button id={styles.button}>Start!</button>
      </Link>
    </div>
  );
}

export default LandingPage;
