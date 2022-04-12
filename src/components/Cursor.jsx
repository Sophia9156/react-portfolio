import { useContext, useEffect, useState } from 'react';
import styles from './scss/cursor.module.scss';
import { Context } from '../store/store';

export default function Cursor() {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  })

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setPosition({
        left: e.clientX - 30,
        top: e.clientY - 30
      })
    })
  }, []);

  const context = useContext(Context);

  return (
    <div 
    className={`
      ${styles.cursor} 
      ${context.active ? styles.active : null}
      ${context.fadeout ? styles.fadeout : null}
    `}
    style={{left: position.left, top: position.top}}
    ></div>
  )
}