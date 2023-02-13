import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getUser } from "../../Redux/Actions/actions";
import styles from "./LandingPage.module.css";

function LandingPage() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts())
    dispatch(getUser())
  },[])

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
