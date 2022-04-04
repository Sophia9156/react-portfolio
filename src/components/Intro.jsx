import { useState } from 'react';
import styles from './scss/intro.module.scss';

export default function Intro() {
  const [showing, setShowing] = useState(true);

  setTimeout(() => {
    setShowing(false)
  }, 9500)

  return (
    <div 
    className={styles.intro}
    style={showing ? {display: 'block'} : {display: 'none'}}
    >
      <div className={styles.box}>
        <div className={styles.bg}></div>
        <p className={`${styles.text} ${styles.sq1}`}>안녕하세요!</p>
        <p className={`${styles.text} ${styles.sq2}`}>이수현 입니다.</p>
        <p className={`${styles.text} ${styles.sq3}`}>제 포트폴리오에 관심 가져주셔서 감사합니다.</p>
        <p className={`${styles.text} ${styles.sq4}`}>시작합니다!</p>
        <button 
        className={styles.skip}
        onClick={() => setShowing(false)}
        >SKIP</button>
      </div>
    </div>
  )
}