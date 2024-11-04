import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Home.css";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/home" className={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={styles.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.active}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.active}>
            About
          </NavLink>
        </li>
      </ul>
      <div className={styles.header}>
        World's one-stop portal for pet-lovers
      </div>
    </>
  );
};

export default Home;
