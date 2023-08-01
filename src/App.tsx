// import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';
// import ThemeButton from './components/Button';

function App() {
  // const getFirstMode = () => {
  //   return window.matchMedia('(prefers-color-scheme: dark').matches;
  // };

  // const [theme, setTheme] = useState(getFirstMode());

  // const changeTheme = () => {
  //   setTheme(!theme);
  // };

  // useEffect(() => {
  //   window.matchMedia('(prefers-color-scheme: dark)')
  //     .addEventListener('change', (event) => {
  //       setTheme(event.matches);
  //     });
  // }, []);

  return (
    <div /*className={ theme ? 'dark-mode' : 'light-mode' }*/>
      {/* <ThemeButton state={ theme } event={ changeTheme } /> */}
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  );
}

export default App;
