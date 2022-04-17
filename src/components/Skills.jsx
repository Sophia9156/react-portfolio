import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './scss/skills.module.scss';

export default function Skills() {
  const skillDetailRef = useRef();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState('scale(0.3) translate(10rem, -20rem)');

  const getData = useCallback(() => {
    fetch('../data.json')
    .then(res => res.json())
    .then(res => setData(res.skills));
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(skillDetailRef.current.offsetTop + 1000 < window.scrollY && skillDetailRef.current.offsetTop + 1050 >= window.scrollY){
        setHeight('scale(0.4) translate(15rem, -17rem)');
      } else if (skillDetailRef.current.offsetTop + 1050  < window.scrollY && skillDetailRef.current.offsetTop + 1100 >= window.scrollY) {
        setHeight('scale(0.5) translate(17rem, -15rem)');
      } else if (skillDetailRef.current.offsetTop + 1100 < window.scrollY && skillDetailRef.current.offsetTop + 1150 >= window.scrollY) {
        setHeight('scale(0.7) translate(15rem, -10rem)');
      } else if (skillDetailRef.current.offsetTop + 1150 < window.scrollY && skillDetailRef.current.offsetTop + 1200 >= window.scrollY) {
        setHeight('scale(0.9) translate(10rem, -5rem)');
      } else if (skillDetailRef.current.offsetTop + 1200 < window.scrollY) {
        setHeight('scale(1) translate(0, 0)');
      }
    }, [])
  })

  return (
    <section className={styles.skillsWrap}>
      <ul className={styles.skillContainer}>
        {
          data?.map((item, idx) => (
            <li 
            key={item.name}
            className={idx === index ? styles.active : null}
            onClick={() => setIndex(idx)}>
              <img src={item.thumb} alt="skill" />
            </li>
          ))
        }
      </ul>
      <ul 
      className={styles.skillsDetail}
      ref={skillDetailRef}
      style={{transform: height}}>
        <li>{data[index]?.detail}</li>
      </ul>
    </section>
  )
}