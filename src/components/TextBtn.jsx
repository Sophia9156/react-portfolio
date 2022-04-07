import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './scss/textBtn.module.scss';

export default function TextBtn() {
  const textBox = useRef();
  const [circlePosition, setCirclePosition] = useState({
    left: 0,
    top: 0
  })
  const [isLinkOpen, setIsLinkOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if(e.clientX > textBox.current.offsetWidth + 500) {
        setCirclePosition({left: textBox.current.offsetWidth - 100, top: e.clientY - 500})
      } else if(e.clientX < textBox.current.offsetLeft + 400) {
        setCirclePosition({left: textBox.current.offsetLeft - 100, top: e.clientY - 500})
      } else {
        setCirclePosition({left: e.clientX - 700, top: e.clientY - 400})
      }
    })
  }, [])

  return (
    <>
    <section className={`${styles.textWrap} ${isLinkOpen ? styles.active : null}`}>
      <h2>
        <span>
          <Link to="/about" className={styles.aboutLink}>
            <b>A</b><b>B</b><b>O</b><b>U</b><b>T</b>
          </Link>
        </span>
        <span 
        className={styles.clickLink} 
        onClick={() => setIsLinkOpen(!isLinkOpen)}>Click here!</span>
        <span>
          <Link to="/works" className={styles.worksLink}>
            <b>W</b><b>O</b><b>R</b><b>K</b><b>S</b>
          </Link>
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
      <p className={styles.animationEn}
      style={isLinkOpen ? {transform: 'translateX(200%)'} : {transform: 'translateX(-200%)'}}>Hello there!</p>
      <p className={styles.animationKo}
      style={isLinkOpen ? {transform: 'translateX(-200%)'} : {transform: 'translateX(200%)'}}>안녕하세요 :)</p>
      <p className={styles.animationJp}
      style={isLinkOpen ? {transform: 'translateX(200%)'} : {transform: 'translateX(-200%)'}}>こんにちは。</p>
    </section>
    </>
  )
}