import { useState } from 'react';
import './App.scss';

function App() {
  const  [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    console.log(theme)
  }

  return (
    <>
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
