import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Nav from './components/Nav';
import './App.scss';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <>
      <Nav />
      <div className={`container ${theme}`}>
        <h1 className={`title ${theme}`}>Theme Switcher</h1>
        <button className={`button ${theme}`} onClick={() => changeTheme(theme)}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </>
  );
}

export default App;
