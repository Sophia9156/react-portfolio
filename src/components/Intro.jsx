import styles from './scss/intro.module.scss';

export default function Intro() {
  return (
    <div class={styles.intro}>
      <div className={styles.box}>
        <div className={styles.bg}></div>
        <p className={`${styles.text} ${styles.sq1}`}>안녕하세요!</p>
        <p className={`${styles.text} ${styles.sq2}`}>이수현 입니다.</p>
        <p className={`${styles.text} ${styles.sq3}`}>제 포트폴리오에 관심 가져주셔서 감사합니다.</p>
        <p className={`${styles.text} ${styles.sq4}`}>시작합니다!</p>
        <button className={styles.skip}>SKIP</button>
      </div>
    </div>
  )
}