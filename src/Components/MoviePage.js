import '../Styles/MoviePage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import FooterMovie from './FooterMovie';



function Session ({weekDay, date, showtime}) {
    function ShowTime ({hour}){
        return (
            <div className='hourSession'>
                <span>{hour}</span>
            </div>
        )
    }
    return (
        <div className='session'>
            <h2>{`${weekDay} - ${date}`}</h2>
            <div className='boxHourSession'>
                {showtime.map( item => <ShowTime key={item.id} hour={item.name} /> )}
            </div>
        </div>
    )
}

export default function MoviePage (){
    const [sessions, setSessions] = React.useState([]);

    const {idFilme} = useParams();
    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then( response => {
        setSessions(response.data.days)
    });
    }, [])
    
    console.log(sessions);

    return (
        <main>
            <div className="boxSession">

                <h1><span>Selecione o Horário</span></h1>

                {sessions.length === 0 ? 'Carregando sessões...' :
                sessions.map( item => <Session key={item.id}
                    date={item.date}
                    weekDay={item.weekday}
                    showtime={item.showtimes}
                />)
                }

            </div>

            <FooterMovie idFilme={idFilme}/>
        </main>
    )
}