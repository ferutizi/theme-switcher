import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import nav from './Nav.module.scss';

const Nav = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`${nav.nav__container} ${nav[theme]}`}>
            <p className={`${nav.section} ${nav[theme]}`}>section 1</p>
            <p className={`${nav.section} ${nav[theme]}`}>section 2</p>
            <p className={`${nav.section} ${nav[theme]}`}>section 3</p>
            <p className={`${nav.section} ${nav[theme]}`}>section 4</p>
            <button className={`${nav.button} ${nav[theme]}`}>home</button>
        </div>
    )
}

export default Nav;