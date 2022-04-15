import React, {createContext, useState} from 'react';
import {Name} from "./components/Name";
import sun from './images/sun.png';
import moon from './images/moon.png';


interface BackgroundContext {
    background: string;
    setBackground: () => void;
}


export const App = () =>  {
    const backgroundContext = createContext<BackgroundContext | null>(null);
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

  return (
      <>
          <backgroundContext.Provider value={{background: theme, setBackground: toggleTheme}} >
              <div className="application" id={theme}>
                  <Name/>
                  <img onClick={toggleTheme} src={theme === 'light' ? sun : moon} alt="nooo"/>
                  <label>{theme === 'light' ? 'light mode' : 'dark mode'}</label>
              </div>
          </backgroundContext.Provider>
      </>

  );
}

