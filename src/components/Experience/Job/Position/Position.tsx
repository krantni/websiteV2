import * as React from 'react';
import styles from './Position.module.css';
import imagePaths from 'constants/imagePaths';
import { ReactComponent as Arrow } from 'images/downArrow.svg';
import AnimateHeight from 'react-animate-height';

export interface PositionProps {
  position: IPosition;
  positionIndex: number;
}

export interface IPosition {
  title: string;
  startDate: string;
  endDate: string;
  intro: string;
  descriptions: string[];
  technologies: string[];
}

const Position: React.SFC<PositionProps> = props => {
  const { position, positionIndex } = props;
  const [showDesc, toggleShowDesc] = React.useState(false);
  return (
    <div className={styles.container} onClick={() => toggleShowDesc(!showDesc)}>
      <div className={styles.positionHeading}>
        <div className={styles.arrow}>
          <Arrow className={showDesc ? styles.rotateDown : styles.rotateUp} />
        </div>
        <div>
          <div>{position.title}</div>
          <span className={styles.positionsDate}>
            {position.startDate} - {position.endDate}
          </span>
        </div>
        {position.technologies && (
          <div>
            {position.technologies.map((tech, index) => {
              const imagePath = imagePaths[tech];
              return (
                <img
                  key={positionIndex + index}
                  className={styles.techImages}
                  src={require(`../../../../${imagePath}`)}
                />
              );
            })}
          </div>
        )}
      </div>
      <AnimateHeight duration={500} height={showDesc ? 'auto' : 0}>
        <ul className={styles.descList}>
          {position.descriptions.map((desc, index) => {
            return <li key={`desc${index}`}>{desc}</li>;
          })}
        </ul>
      </AnimateHeight>
    </div>
  );
};

export default Position;
