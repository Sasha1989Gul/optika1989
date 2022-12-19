import { Form } from "react-router-dom";

function MyInformation() {
    return (
      <div >
        <header className="App-header">
          <h2>Информация обо мне </h2>
          <p>ФИО: Гулевский Александр Владимирович </p>
          <p>Телефон: +7 952 592 29 ** </p>
          <p>email: 89optika </p>
          <p>Город проживания: Липецк </p>
          <p>Опыт работы: 15 лет </p>
          <p>Навыки: повар 4-го р-да, кондитер 4-го р-да, спасатель 3-го класса, обвальщик мяса и птицы, съемщик на картонном производстве </p>
          <p>Фото: <img src="foto.jpg" /> </p>
        </header>
      </div>
    );
  }

  class Form extends Comment {
    state ={
      inputText: '',
    }

hendleInputChenge = ({ target: { value }}) => {
  this.setState({
    inhutText: value,
  })
}

render() {
  const{inputText} = this.state;
  return(
    <form>
      <label>
        ФИО: 
        <input tupe="text" name="name" value={inputText} />
      </label>
      <br/>
      <label>
      Телефон: 
        <input tupe="text" name="name" value={inputText} />
        <br/>
      </label>
      <br/>
      <label>
      email: 
        <input tupe="text" name="name" value={inputText} />
        <br/>
      </label>
      <br/>
      <button>Сброс</button>
    </form>
  )
}
  }
  
  export { MyInformation, Form };