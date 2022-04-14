import { useEffect, useState, useContext } from 'react';
import styles from './scss/topBtn.module.scss';
import { Context } from '../store/store';

export default function TopBtn() {
  const [showing, setShowing] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > window.innerHeight * 0.8){
        setShowing(true);
      } else {
        setShowing(false);
      }
    })
  }, [])

  return (
    <div 
    className={`${styles.goToTop} ${showing ? styles.active : null}`}
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }}
    onMouseEnter={() => context.active = true}
    onMouseLeave={() => context.active = false}
    >
      <span className={`${styles.arrow} ${styles.materialIconsOutlined}`}>
        arrow_circle_up
      </span>
    </div>
  )
}