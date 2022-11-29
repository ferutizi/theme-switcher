import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import styles from './Nav.scss';

const Nav = () => {
    const { theme } = useContext(ThemeContext);
    console.log(styles)
    return(
        <div className="nav__container">
            <p className={`${styles.section} ${styles[theme]}`}>seccion 1</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 2</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 3</p>
            <p className={`${styles.section} ${styles[theme]}`}>section 4</p>
            <button>home</button>
        </div>
    )
}

export default Nav;