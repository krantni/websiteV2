import * as React from 'react';
import styles from './ProfileImage.module.css';

import me from '../../images/me.png';

const ProfileImage = () => {
  return (
    <div className={styles.imageHolder}>
      <img className={styles.profileImage} src={me} />
    </div>
  );
};

export default ProfileImage;
