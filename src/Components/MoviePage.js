import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FooterMovie from './FooterMovie';
import styled from 'styled-components';



function SessionComp ({weekDay, date, showtime}) {
    
    function ShowTime ({hour, idSession}){
        return (
            <Link to={`/assentos/${idSession}`}>
                <HourSession>
                    <span>{hour}</span>
                </HourSession>
            </Link>
        )
    }

    return (
        <Session>
            <h2>{`${weekDay} - ${date}`}</h2>
            <BoxHourSession>
                {showtime.map( item => <ShowTime key={item.id} idSession={item.id} hour={item.name} /> )}
            </BoxHourSession>
        </Session>
    )
}

export default function MoviePage (){
    const [sessions, setSessions] = React.useState([]);
    const [sessionsData, setSessionsData] = React.useState([]);

    const {idFilme} = useParams();
    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then( response => {
        setSessions(response.data.days);
        setSessionsData(response.data);
    });
    }, [])

    return (
        <Container>
            <BoxSession>

                <h1><span>Selecione o Horário</span></h1>

                {sessions.length === 0 ? 'Carregando sessões...' :
                sessions.map( item => <SessionComp key={item.id}
                    date={item.date}
                    weekDay={item.weekday}
                    showtime={item.showtimes}
                />)
                }

            </BoxSession>
            <FooterMovie idFilme={idFilme} title={sessionsData.title} imgSrc={sessionsData.posterURL} />
        </Container>
    )
}



// & CSS STYLED-COMPONENTS 

const Container = styled.div`
    margin-top: 68px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 140px;
`

const BoxSession = styled.div`
    display: flex; flex-direction: column;
    h1 {
        font-size: 24px;
        color: #293845;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`

const Session = styled.div`
    display: flex; flex-direction: column;
    gap: 25px;
    border: 1px solid #29384584;
    border-radius: 5px;
    padding: 10px;
    margin: 0px 15px 15px 15px;
    h2 {
    font-size: 20px;
    color: #293845;
    }
`

const BoxHourSession = styled.div `
    display: flex;
    gap: 0px 10px;
    flex-wrap: wrap;
`

const HourSession = styled.div`
    background-color: #E8833A;
    width: 83px; height: 43px;
    display: flex; justify-content: center; align-items: center;
    border-radius: 5px;
    color: white;
    font-size: 19px;
    cursor: pointer;
    &:hover{
        background-color: #b46730;
    }
`