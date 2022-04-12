import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from './scss/header.module.scss';
import { Context } from '../store/store';

export default function Header() {
  const [showingSubMenu, setShowingSubMenu] = useState(false);
  const [showingMainMenu, setShowingMainMenu] = useState(false);

  const context = useContext(Context);

  return (
    <header>
      <nav className={`${styles.subMenu} ${showingSubMenu ? styles.active : null}`}>
        <a href="https://github.com/Sophia9156" target="_blank" rel="noreferrer">Github</a>
        <a href="https://babycoder05.tistory.com/" target="_blank" rel="noreferrer">Blog</a>
      </nav>
      <h1 
      onClick={() => setShowingSubMenu(!showingSubMenu)}
      onMouseEnter={() => context.active = true}
      onMouseLeave={() => context.active = false}>
        <img src="./img/parrot.png" alt="logo" />
      </h1>
      <nav className={`${styles.mainMenu} ${showingMainMenu ? styles.active : null}`}>
        <div className={styles.mainMenuTop}>
          <Link 
          to="/" 
          className={styles.homeBtn}
          onClick={() => showingMainMenu(false)}
          >HOME</Link>
          <Link 
          to="/about" 
          className={styles.aboutBtn}
          onClick={() => showingMainMenu(false)}
          >ABOUT</Link>
          <Link 
          to="/works" 
          className={styles.worksBtn}
          onClick={() => showingMainMenu(false)}
          >WORKS</Link>
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
      onClick={() => setShowingMainMenu(!showingMainMenu)}
      onMouseEnter={() => context.active = true}
      onMouseLeave={() => context.active = false}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}