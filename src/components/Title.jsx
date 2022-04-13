import styles from './scss/title.module.scss';

export default function Title({text, space}) {
  return (
    <aside 
    className={styles.title}
    style={{letterSpacing: space}}>
      {text}
    </aside>
  )
}