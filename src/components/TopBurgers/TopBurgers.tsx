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
      <div className={styles.header}>
        <span className={styles.topBurgers}>Top Burgers</span>
      </div>
      <div className={styles.intro}>
        Ever have a burger and I think: "This is the best burger I've ever had"? I do all
        the time, so now I've decided to keep track. Here's my list of the best burgers
        I've ever had. Feel free to send me a tweet if you think you've had some burgers
        that are better!
      </div>
      {burgers &&
        burgers.sort(sortByBurgerRank).map((burger, index) => {
          return <BurgerElement burger={burger} key={burger.name} index={index + 1} />;
        })}
    </>
  );
};

export default Experience;
