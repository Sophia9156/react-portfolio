import { useEffect, useRef, useState } from 'react';
import styles from './scss/textBtn.module.scss';

export default function TextBtn() {
  const textBox = useRef();
  const [circlePosition, setCirclePosition] = useState({
    left: 0,
    top: 0
  })

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if(e.clientX > textBox.current.offsetWidth + 500) {
        setCirclePosition({left: textBox.current.offsetWidth - 100, top: e.clientY - 500})
      } else if(e.clientX < textBox.current.offsetLeft + 400) {
        setCirclePosition({left: textBox.current.offsetLeft - 100, top: e.clientY - 500})
      } else {
        setCirclePosition({left: e.clientX - 500, top: e.clientY - 500})
      }
    })
  }, [])

  return (
    <>
    <section className={styles.textWrap}>
      <h2>
        <span className={styles.aboutLink}>
          <b>A</b><b>B</b><b>O</b><b>U</b><b>T</b>
        </span>
        <span className={styles.clickLink}>Click here!</span>
        <span className={styles.worksLink}>
          <b>W</b><b>O</b><b>R</b><b>K</b><b>S</b>
        </span>
        <div 
        ref={textBox}
        className={styles.textBg}>
          <div 
          className={`${styles.textBox} ${styles.textBox1}`}
          style={{left: circlePosition.left, top: circlePosition.top}}></div>
          <div 
          className={`${styles.textBox} ${styles.textBox2}`}
          style={{left: circlePosition.left, top: circlePosition.top}}></div>
          <div 
          className={`${styles.textBox} ${styles.textBox3}`}
          style={{left: circlePosition.left, top: circlePosition.top}}></div>
        </div>
      </h2>
    </section>
    <section className={styles.animationTextWrap}>
      <p className={styles.animationEn}>Hello there!</p>
      <p className={styles.animationKo}>안녕하세요 :)</p>
      <p className={styles.animationJp}>こんにちは。</p>
    </section>
    </>
  )
}