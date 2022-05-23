import styled from 'styled-components';
import FooterMovie from './FooterMovie';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const seats = [];

function Seat ({ name, isAvailable }){
    const [click, setClick] = useState(false)

    function clickSeat (seat){
        let teste = seats.indexOf(seat);
        if(teste === -1){
            seats.push(seat)
            setClick(!click)
        } else {
            seats.splice(teste, 1);
            setClick(!click);
        }
        console.log(seats, ' o array');

    }


    if (isAvailable){
        return (
        <SeatToChose
        isAvailable={isAvailable}
        onClick={ () => clickSeat(name)}
        isClicked={click}>

            <span>{name}</span>

        </SeatToChose>
        )

    } else {
        return (
            <SeatUnavailable>
                <span>{name}</span>
            </SeatUnavailable>
        )
    }
   
}


export default function SessionPage (){
    const [movie, setMovie] = useState([]);
    const [weekDay, setWeekDay] = useState('');
    const [hour, setHour] = useState('');
    const [seats, setSeats] =  useState([]);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');

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


    function bookSeats(event){
        event.preventDefault();
        if (seats.length === 0){
            alert('Você deve escolher no mínimo um assento')
        }
        return (
            console.log(seats, )
        )
    }

    return (
        <Container>
            <BoxSession>
                <h1><span>Selecione o(s) assento(s)</span></h1>
                <ContainerSeats>

                    { seats.map( (item, index) =>{
                    return <Seat isAvailable={item.isAvailable} key={item.id} name={item.name}/>
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

                <FormContainer onSubmit={bookSeats} >
                    <div>
                        <label for="name">Nome do comprador:</label>
                        <input type="text" id='name' placeholder='Digite seu nome...'
                        value={name} onChange={ e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="cpf">CPF do comprador: </label>
                        <input type="number" id='cpf' placeholder='Digite seu CPF...' minLength={"9"}
                        value={cpf} onChange={ e => setCpf(e.target.value)}/>
                    </div>
                    <Link to={'/sucesso'}><button>Reservar Assento(s)</button></Link>
                </FormContainer>
                
            </BoxSession>

            <FooterMovie title={movie.title} imgSrc={movie.posterURL}
            weekDay={weekDay} hour={hour}/>

        </Container>
    )
}

// & CSS  STYLED-COMPONENTS

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 10px;
    div{
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    input{
        padding: 10px;
    }
    Link button{
        padding: 10px;
        width: 50%;
    }
`


const SeatToChose = styled.div`
    display: flex; justify-content: center; align-items: center;
    background-color: ${ props => props.isClicked ? '#8DD7CF':'#C3CFD9'} ;
    padding: 5px;
    border-radius: 19px;
    border: 1px solid ${ props => props.isClicked ? '#45BDB0':'#808F9D'};
    width: 15px; height: 15px;
    cursor: pointer;
    span{
        line-height: 0px;
        font-size: 0.8em;
    }
`

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
    background-color:  #C3CFD9;
    padding: 5px;
    border-radius: 19px;
    border: 1px solid #808F9D;
    width: 15px; height: 15px;
    cursor: pointer;
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

