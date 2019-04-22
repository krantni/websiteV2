import * as React from 'react';
import { Burger } from './Burger/Burger';
import BurgerElement from './Burger';
import styles from './TopBurgers.module.css';

import jsonData from 'data/data.json';

const Experience = () => {
  const [burgers, setBurgers] = React.useState<Burger[] | null>([]);

  React.useEffect(() => {
    setBurgers(JSON.parse(JSON.stringify(jsonData)).burgers);
    //   fetch('https://angular-b6d9c.firebaseio.com/burgers.json')
    //     .then(results => results.json())
    //     .then((data: Job[]) => {
    //       setBurgers(data);
    //     });
  }, []);

  const sortByBurgerRank = (a: Burger, b: Burger) => {
    // tslint:disable: radix
    const rankA = parseInt(a.rank);
    const rankB = parseInt(b.rank);
    if (rankA < rankB) {
      return -1;
    }
    if (rankA > rankB) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      <div className={styles.topBurgers}>Top Burgers</div>
      {burgers &&
        burgers.sort(sortByBurgerRank).map((burger, index) => {
          return <BurgerElement burger={burger} key={burger.name} index={index + 1} />;
        })}
    </>
  );
};

export default Experience;
