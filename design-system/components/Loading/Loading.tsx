import React from 'react';
import styles from './Loading.module.css';
import Typography from '../Typography/Typography';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <img src='/Spinner.svg' alt="spinner" title="spinner" className={styles.spinner} />
      <Typography variant='caption'>Loading</Typography>
    </div>
  );
};

export default Loading;