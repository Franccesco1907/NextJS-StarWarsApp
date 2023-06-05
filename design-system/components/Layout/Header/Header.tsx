import styles from './Header.module.css';
import { HeaderProps } from './HeaderTypes';

const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.title} {...props}>
        {children}
      </p>
    </header>
  );
};

export default Header;