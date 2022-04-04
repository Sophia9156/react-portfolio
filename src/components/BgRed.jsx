import styles from './scss/bgRed.module.scss';

export default function BgRed({color}) {
  return (
    <div className={styles.bgWrap}>
      <div className={styles.bg}></div>
    </div>
  )
}