import React, { useEffect, useState } from "react";
import dogImage from "../assets/Images/dogs.jpg";
import catImage from "../assets/Images/cats.jpg";
import styles from "./Home.module.css";

const Home = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              href="/"
              className={currentPath === "/" ? styles.active : styles.link}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/pets"
              className={currentPath === "/pets" ? styles.active : styles.link}
            >
              View Pets
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={currentPath === "/about" ? styles.active : styles.link}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={currentPath === "/contact" ? styles.active : styles.link}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div className={styles.header}>
        World's one-stop portal for pet-lovers
      </div>

      <section className={styles.section}>
        <h2>Shop by Pet</h2>
        <div className={styles.petContainer}>
          <div className={styles.petItem}>
            <img src={dogImage} alt="Dog" className={styles.titleImg} />
            <h2>Dogs</h2>
            <p>Find the perfect dog for your family, from small breeds to large breeds. Our selection includes puppies, trained dogs, and much more!</p>
            <button className={styles.button}>View All Dogs</button>
          </div>

          <div className={styles.petItem}>
            <img src={catImage} alt="Cat" className={styles.titleImg} />
            <h2>Cats</h2>
            <p>Explore a variety of cats, from playful kittens to mature felines. Discover the ideal companion for your home.</p>
            <button className={styles.button}>View All Cats</button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Our top picks</h2>
        <p>Check out our special offers on pet food, toys, and accessories. Save on all essentials for your pets!</p>
        <button className={styles.button}>Explore Sales</button>
      </section>
    </>
  );
};

export default Home;
