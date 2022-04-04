import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './scss/header.module.scss';

export default function Header() {
  const [showingSubMenu, setShowingSubMenu] = useState(false);
  const [showingMainMenu, setShowingMainMenu] = useState(false);
  return (
    <header>
      <nav className={`${styles.subMenu} ${showingSubMenu ? styles.active : null}`}>
        <a href="https://github.com/Sophia9156" target="_blank" rel="noreferrer">Github</a>
        <a href="https://babycoder05.tistory.com/" target="_blank" rel="noreferrer">Blog</a>
      </nav>
      <h1 onClick={() => setShowingSubMenu(!showingSubMenu)}>
        <img src="./img/parrot.png" alt="logo" />
      </h1>
      <nav className={`${styles.mainMenu} ${showingMainMenu ? styles.active : null}`}>
        <div className={styles.mainMenuTop}>
          <Link to="/" className={styles.homeBtn}>HOME</Link>
          <Link to="/about" className={styles.aboutBtn}>ABOUT</Link>
          <Link to="/works" className={styles.worksBtn}>WORKS</Link>
        </div>
        <div className={styles.mainMenuBottom}>
          <a href="https://github.com/Sophia9156" target="_blank" rel="noreferrer">Github</a>
          <a href="https://babycoder05.tistory.com/" target="_blank" rel="noreferrer">Blog</a>
        </div>
      </nav>
      <div className={styles.language}>
        <span className={styles.active}>KO</span>
        <i></i>
        <span>EN</span>
      </div>
      <div 
      className={`${styles.burger} ${showingMainMenu ? styles.active : null}`} 
      onClick={() => setShowingMainMenu(!showingMainMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}