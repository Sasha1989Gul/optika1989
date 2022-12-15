import './App.css';
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

export default App;
