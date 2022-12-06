import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p> */}
<h1>Hello, React</h1>

<div className="class_info">

	    <p>ФИО: Гулевский А.В.</p>
      <p>Тел.: 952 592 20 30</p>
      <p>Эл. почта: 89optika@mail.ru</p>
    
</div>

<img src="react.png" />

<div className="class_name">

<p>Город: Липецк</p>
<p>Страна: Россия</p>
<p>Количесто жителей:  496,45 тыс.</p>
<p>Город: Липецк</p>
<img src="Lipetsk.png" />
<p>Страна: Россия</p>
<img src="russia.jpg" />

</div>
        
      </header>
    </div>
  );
}

export default App;
