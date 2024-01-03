import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import './App.css'
import RowPost from './Components/RowPost/RowPost';
import { action, comedy,horror ,documentaries, originals, romance } from './urls';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;