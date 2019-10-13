import * as React from 'components/TradingBlock/components/LoadingSpinner/node_modules/react';
import styles from './LoadingSpinner.module.css';
import Spinner from './loading.svg';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={Spinner} alt="Spinner" />
    </div>
  );
};

export default LoadingSpinner;
