import * as React from 'react';
import styles from './Position.module.css';
import imagePaths from '../../../../constants/imagePaths';

export interface PositionProps {
  position: IPosition;
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
  const { position } = props;
  const [showDesc, toggleShowDesc] = React.useState(false);

  return (
    <div>
      <div>{position.title}</div>
      <div className={styles.positionsDate}>
        {position.startDate} - {position.endDate}
      </div>
      {position.technologies.map(tech => {
        const imagePath = imagePaths[tech];
        return <img height={50} width={50} src={require(`../../../../${imagePath}`)} />;
      })}
      <div onClick={() => toggleShowDesc(!showDesc)}>Description</div>
      <div className={showDesc ? styles.showDesc : styles.hideDesc}>
        <ul className={styles.descList}>
          {position.descriptions.map((desc, index) => {
            return <li key={`desc${index}`}>{desc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Position;
