import './App.css';
import { Bibliography } from './practice/Bibliography'
import { Zenit } from './practice/Zenit'
import { Zenit2 } from './practice/Zenit'
import { Zenit3 } from './practice/Zenit'
import { APet } from './practice/APet'
import { FavoriteMusicAlbum } from './homework_6/FavoriteMusicAlbum'
import { MyInformation, Form } from './homework_6/MyInformation'

function App() {
  return (
    <div>
      <Bibliography></Bibliography>
      <Zenit></Zenit>
      <Zenit2></Zenit2>
      <Zenit3></Zenit3>
      <APet></APet>
      <FavoriteMusicAlbum></FavoriteMusicAlbum>
      <MyInformation></MyInformation>
    </div>
  );
}

export default App;

//--Events--
/*import './App.css';

import { List, Page } from './components/Events'
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      
      <main>
        <Routes>
          <Route 
            path='/events' 
            element={<List />} 
          />
          
          <Route 
            path='/events/:eventId' 
            element={<Page/>} 
          />

          <Route 
            path='/' 
            element={<Navigate to="/events" replace={true} />} 
          />
        </Routes>
      </main>
    </div>
  )  
}

export default App*/