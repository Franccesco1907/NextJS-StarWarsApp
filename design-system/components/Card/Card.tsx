import React from 'react';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';

interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ onClick, title, description }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card_container}>
        <Typography variant='heading'>{title}</Typography>
        <Typography variant='body'>{description}</Typography>
      </div>
      <div className={styles.svg}>
        <svg width={7.41} height={12}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;