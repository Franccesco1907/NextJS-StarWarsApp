import styles from './Header.module.css';
import { HeaderProps } from './HeaderTypes';

const Header = ({ children, peopleId, setPeople }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {
        peopleId !== 0 ?
          (<div className={styles.image_container} onClick={() => { setPeople(0) }}>
            <img src='/left-arrow.svg' alt="left-arrow" title="left-arrow" className={styles.left_arrow} />
          </div>) : null
      }
      <p className={styles.title}>
        {children}
      </p>
    </header>
  );
};

export default Header;