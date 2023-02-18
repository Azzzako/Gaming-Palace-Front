import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getUser, postByMail } from "../../Redux/Actions/actions";
import styles from "./LandingPage.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ConfirmData } from "../ConfirmData/ConfirmData";

function LandingPage() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <div id={styles.background}>
      <ConfirmData/>
      <div id={styles.container}>{/* <h1>Welcome to Gaming Palace</h1> */}</div>
      <Link to="/home">
        <button id={styles.button}>Start!</button>
      </Link>
    </div>
  );
}

export default LandingPage;
