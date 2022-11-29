import { useState } from 'react';

function App() {
  const  [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    console.log(theme)
  }

  return (
    <>
      <div className='container'>
        <h1 className={theme}>Theme Switcher</h1>
        <button onClick={() => changeTheme(theme)}>{theme === 'dark' ? 'light' : 'dark'}</button>
      </div>
    </>
  );
}

export default App;
