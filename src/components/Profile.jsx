import styles from './scss/profile.module.scss';

export default function Profile() {
  return (
    <section className={styles.profile}>
      <figure className={styles.profileImg}>
        <img src="./img/selfie.png" alt="profile" />
        <span className={styles.circleRed}></span>
        <span className={styles.circleBlue}></span>
        <span className={styles.circleYellow}></span>
      </figure>
      <article className={styles.profileName}>
        <h3>이 수 현</h3>
        <p className={styles.profileResume}>
          <a className={styles.resume} href="https://charm-zenith-cf4.notion.site/d4478485801f4c2ba9b9b9704f9ee118" target="_blank" rel="noreferrer">
            이력서
            <span className={styles.materialIconsOutlined}>
              file_download
            </span>
          </a>
        </p>
        <p className={styles.scrollDown}>Scroll Down</p>
      </article>
    </section>
  )
}