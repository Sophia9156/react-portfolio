import { useState } from 'react';
import styles from './scss/contact.module.scss';

export default function Contact() {
  const [showing, setShowing] = useState(false);

  return (
    <div 
    className={styles.contactWrap}
    onClick={() => setShowing(!showing)}
    >
      <div className={styles.contact}>
        <span className={`${styles.contactIcon} ${styles.materialIconsOutlined}`}>
          contact_phone
        </span>
        <ul 
        className={`${styles.contactBox} ${showing ? styles.active : null}`}>
          <li>
            <dt>Mobile</dt>
            <dd>010 7231 9799</dd>
          </li>
          <li>
            <dt>Email</dt>
            <dd><a href="mailto:suhyun9156@gmail.com">suhyun9156@gmail.com</a></dd>
          </li>
        </ul>
      </div>
    </div>
  )
}