import * as React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.name}>Nick Krantz</div>
    </div>
  );
};

export default Header;
