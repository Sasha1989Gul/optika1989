import React from "react";

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

  class Form extends React.Component {
    state ={
      inputText: '',
      inputPassword: '',
    }

hendleInputChenge = ({ target: { value }}) => {
  this.setState({
    inputText: value,
    inputPassword: value,
  })
};



render() {
  const{inputText, inputPassword} = this.state;
  return(
    <form>
      <label>
        ФИО: 
        <input tupe="text" name="name" onChange={this.hendleInputChenge} value={inputText} />
      </label>
      <br/>
      <label>
      Телефон: 
        <input tupe="password" name="nam" onChange={this.hendleInputChenge} value={inputPassword} />
        <br/>
      </label>
      <br/>
      <label>
      email: 
        <input tupe="text" name="na" onChange={this.hendleInputChenge} value={inputText} />
        <br/>
      </label>
      <br/>
      <button>Сброс</button>
    </form>
  )
}
  }
  
  export { MyInformation, Form };