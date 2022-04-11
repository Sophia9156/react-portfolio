import styles from './scss/title.module.scss';

export default function Title({text}) {
  return (
    <aside className={styles.title}>
      {text}
    </aside>
  )
}