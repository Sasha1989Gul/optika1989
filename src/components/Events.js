import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

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
    const {eventId} = useParams()  
    
    // const {account, login, } = useAuth()  

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
            <Link to="/events">Вернуться к списку</Link>
        </div>
    )
}

export { List, Page }
