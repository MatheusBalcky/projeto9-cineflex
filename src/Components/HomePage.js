import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';

function MovieComponent ({imageUrl, idMovie}){
    return (
        <Link to={`sessoes/${idMovie}`}>
            <MovieItem>
                <img width={'100%'} src={imageUrl} alt="movie-tal" />
            </MovieItem>
        </Link>
        
    )
}

export default function HomePage (){

    const [image, setImage] = React.useState([]);

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then( (response) => {
            setImage([response.data])
        })
    }, []);

    return (
        
        <Container>
            <BoxMenuMovies>
                <h1><span>Selecione o Filme</span></h1>
                
                <ListMovies>
                    { image.length === 0 ?
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
                    :
                    image[0].map((item, index) =>
                    <MovieComponent key={index} imageUrl={item.posterURL} idMovie ={item.id}/>  )}
                </ListMovies>
                
            </BoxMenuMovies>
        </Container>
    )
}


// & CSS STYLED-COMPONENTS

const Container = styled.div`
    margin-top: 68px;
    margin-left: 5px;
    margin-right: 5px;
`

const BoxMenuMovies = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
    font-size: 24px;
    color: #293845;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

const ListMovies = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const MovieItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 145px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.333);
    &:hover { background-color: rgb(238, 238, 238); }
`