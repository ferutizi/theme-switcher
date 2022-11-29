import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`${styles.nav__container} ${styles[theme]}`}>
            <p className={`${styles.section} ${styles[theme]}`}>section 1</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 2</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 3</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 4</p>
            <button>home</button>
        </div>
    )
}

export default Nav;