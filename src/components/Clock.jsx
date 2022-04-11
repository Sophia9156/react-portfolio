import { useEffect, useMemo, useState } from 'react';
import styles from './scss/clock.module.scss';

export default function Clock() {
  const date = useMemo(() => {
    return new Date()
  }, []);
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  function modifyNumber(time) {
    if(parseInt(time) < 10){
      return "0" + time;
    }
    return time;
  }

  const [time, setTime] = useState(date);
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 100)

    if(date.getDay() === 0){
      setBgColor('rgb(253, 29, 29)');
    } else if(date.getDay() === 6){
      setBgColor('rgb(58,75,180)');
    } else {
      setBgColor('rgb(195, 0, 255)');
    }
  }, [date])
  

  return (
    <aside className={styles.clockWrap}>
      <p className={styles.calendar}>
        <span className={styles.day1}>{`${date.getFullYear()} ${month[date.getMonth()]} ${date.getDate()}`}</span>
        <span 
        className={styles.day2}
        style={{backgroundColor: bgColor}}
        >{day[date.getDay()]}</span>
      </p>
      <p className={styles.clock}>{`${modifyNumber(time.getHours())} : ${modifyNumber(time.getMinutes())} : ${modifyNumber(time.getSeconds())}`}</p>
    </aside>
  )
}