import * as React from 'react';
import styles from './Burger.module.css';

export interface Burger {
  name: string;
  resturant: string;
  website: string;
  city: string;
  state: string;
  ingredients: string;
  rank: string;
}
export interface BurgerProps {
  burger: Burger;
  index: number;
}

const Burger: React.SFC<BurgerProps> = props => {
  const { burger, index } = props;
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.burgerName}>
          <span className={styles.number}>{index}. </span>
          {burger.name}
        </div>
        <div className={styles.marginLeft}>
          <div className={styles.resturant}>
            <a href={burger.website} target="_blank">
              {burger.resturant} -{' '}
              <span>
                {burger.city}, {burger.state}
              </span>
            </a>
          </div>
          <div className={styles.ingredients}>{burger.ingredients}</div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
