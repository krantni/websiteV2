import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './LoadingSpinner';

const TradingBlock = () => {

  const [isLoading] = React.useState<boolean>(true);

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
        </>
      )}
    </div>
  )
}

export default TradingBlock;