/*import './App.css';
import { Bibliography } from './practice/Bibliography'
import { Zenit } from './practice/Zenit'
import { Zenit2 } from './practice/Zenit'
import { Zenit3 } from './practice/Zenit'
import { APet } from './practice/APet'
import { FavoriteMusicAlbum } from './homework_6/FavoriteMusicAlbum'


function App() {
  return (
    <div>
      <Bibliography></Bibliography>
      <Zenit></Zenit>
      <Zenit2></Zenit2>
      <Zenit3></Zenit3>
      <APet></APet>

      <FavoriteMusicAlbum>Название альбома: The Massacre </FavoriteMusicAlbum>
      <FavoriteMusicAlbum>Название исполнителя: 50 Cent </FavoriteMusicAlbum>
      <FavoriteMusicAlbum>Год издания: 1 января 2004 </FavoriteMusicAlbum>
      <FavoriteMusicAlbum>Издатель: Curtis James Jackson III </FavoriteMusicAlbum>
      <FavoriteMusicAlbum>Обложка альбома: <img src="50cent.jpg" /> </FavoriteMusicAlbum>
    </div>
  );
}

export default App;*/
import './App.css';

import { List, Page } from './components/Events'
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      {/* <nav>
        <Link to="/form">Form</Link>
        <Link to="/form/view">Form View</Link>
      </nav> */}
      
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

export default App