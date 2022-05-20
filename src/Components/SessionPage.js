import styled from 'styled-components';
import FooterMovie from './FooterMovie';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';

function SeatComponent (){
    return(
        <>
        </>
    )
}

export default function SessionPage (){
    const [movie, setMovie] = React.useState([]);
    const [weekDay, setWeekDay] = React.useState('');
    const [hour, setHour] = React.useState('');
    const [seats, setSeats] =  React.useState([]);

    const sessionId = useParams();
    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.idSessao}/seats`);
        promise.then( response => {
            setHour(response.data.name);
            setWeekDay(response.data.day.weekday);
            setMovie(response.data.movie);
            setSeats(response.data.seats);
            console.log(response.data.seats)
        })
    },[]);

    const [colorSeat, setColorSeat] =  React.useState('');

    return (
        <Container>
            <BoxSession>
                <h1><span>Selecione o(s) assento(s)</span></h1>
                <ContainerSeats>

                    { seats.map( item =>{
                    return item.isAvailable ? 
                    <SeatAvailable key={item.id} className={colorSeat} onClick={()=> setColorSeat('selected')}>
                        <span>{item.name}</span>
                    </SeatAvailable>
                    :
                    <SeatUnavailable key={item.id}>
                        <span>{item.name}</span>
                    </SeatUnavailable>
                    } )}

                </ContainerSeats>

                <ContainerLegends>
                    <SeatLegend>
                        <SeatSelected/>
                        <span>Selecionado</span>
                    </SeatLegend>

                    <SeatLegend>
                        <SeatAvailable/>
                        <span>Disponível</span>
                    </SeatLegend>

                    <SeatLegend>
                        <SeatUnavailable/>
                        <span>Indisponivel</span>
                    </SeatLegend>
                </ContainerLegends>
                
            </BoxSession>

            <FooterMovie title={movie.title} imgSrc={movie.posterURL}
            weekDay={weekDay} hour={hour}/>

        </Container>

    )
}

// & CSS  STYLED-COMPONENTS

const Container = styled.div`
    margin-top: 68px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 140px;
    display: flex; justify-content: center; align-items: center;
`

const BoxSession = styled.div`
    display: flex; flex-direction: column;
    max-width: 380px;
    h1 {
        font-size: 24px;
        color: #293845;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`

const ContainerSeats = styled.div`
    display: flex; justify-content: center; align-items: center;
    gap: 9px;
    flex-wrap: wrap;
    .selected{
        background-color: #8DD7CF;
    }
`

const SeatAvailable = styled.div`
    display: flex; justify-content: center; align-items: center;
    background-color: #C3CFD9;
    padding: 5px;
    border-radius: 19px;
    border: 1px solid #8c959c;
    width: 15px; height: 15px;
    span{
        line-height: 0px;
        font-size: 0.8em;
    }
`

const SeatSelected = styled.div`
    display: flex; justify-content: center; align-items: center;
    background-color: #8DD7CF;
    padding: 5px;
    border-radius: 19px;
    border: 1px solid #45BDB0;
    width: 15px; height: 15px;
    span{
        line-height: 0px;
        font-size: 0.8em;
    }
`

const SeatUnavailable = styled.div`
    display: flex; justify-content: center; align-items: center;   
    background-color: #FBE192;
    padding: 5px;
    border-radius: 19px;
    border: 1px solid #F7C52B;
    width: 15px; height: 15px;
    span{
        line-height: 0px;
        font-size: 0.8em;
    }
`

const ContainerLegends = styled.div`
    margin-top: 20px;
    display: flex; justify-content: space-evenly;
`

const SeatLegend = styled.div`
    display: flex; flex-direction: column; justify-content: center ; align-items: center;
    gap: 5px;
    span{
        font-size: 13px;
    }
`

