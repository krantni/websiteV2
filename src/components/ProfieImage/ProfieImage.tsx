import * as React from 'react';
import styles from './ProfieImage.module.css';

import me from '../../images/me.png';

const ProfieImage = () => {
  return (
    <div className={styles.imageHolder}>
      <img className={styles.profileImage} src={me} />
    </div>
  );
};

export default ProfieImage;
