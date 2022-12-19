/*import { render } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import React from "react"
import { increaseLike } from '../redux/events'

import './Events.css'

const List = () => {

    const events = useSelector((state) => state.events.data)

    return (
        <div>
            <h1>Event List</h1>
            <div className="EventList">
                {events.map(item => (
                    <Link to={`/events/${item.id}`} key={item.id}>
                        <div className="EventItem">
                            <img src={item.img} alt={item.title} />
                            <h2>{item.title} ({item.year})</h2>
                            <p><strong>Время</strong> {item.time} мин</p>
                            <p><strong>Возраст</strong> {item.rating}</p>
                            <p><strong>Страна</strong> {item.country}</p>
                            <p><strong>Режиссер</strong> {item.director}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const Page = () => {
    const dispatch = useDispatch()
    const { eventId } = useParams()

    const event = useSelector((state) =>
        state.events.data.find(item => item.id == eventId))

    return (
        <div>
            <h1>Event Page</h1>
            <div className="EventItem">
                <h1>{eventId}</h1>
                <img src={event.img} alt={event.title} />
                <h2>{event.title} ({event.year})</h2>
                <p><strong>Время</strong> {event.time} мин</p>
                <p><strong>Возраст</strong> {event.rating}</p>
                <p><strong>Страна</strong> {event.country}</p>
                <p><strong>Режиссер</strong> {event.director}</p>
                <p>{event.description}</p>
                <p>
                    <strong>Likes</strong> {event.likes}
                    <button onClick={e => dispatch(increaseLike({ id: eventId }))}>Like</button>
                </p>
            </div>
            <div className='Link'>
                <Link to="/events">Вернуться к списку</Link>
            </div>
        </div>
    )
}


class loginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            coment: ''
        };
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeComent = this.onChangeComent.bind(this);
        this.onChangeSubmit = this.onChangeSubmit.bind(this);
    }

    onSubmit(event) {
        alert('${this.state.login} , Спасибо за коментарий');
        event.preventDefault();
    }
    onChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    onChangeComent(event) {
        this.setState({ coment: event.target.value });
    }
    render() {
        return (
            <from onSubmit={this.onSubmit}>
                <p><label>Логин: <input type='text' name='login' onChange={this.onChangeLogin} value={this.state.onChangeLogin}></input></label></p>
                <p><label>Коментарий: <input type='coment' name='coment' onChange={this.onChangeComent} value={this.state.coment}></input></label></p>
                <p><input type='submit' value='Submit'></input></p>
            </from>
        )
    }
}

export { List, Page, loginForm }*/
