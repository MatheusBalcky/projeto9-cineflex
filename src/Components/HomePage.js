import '../Styles/HomePage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieComponent ({imageUrl, idMovie}){
    return (
        <Link to={`sessoes/${idMovie}`}>
            <li className='movieItem'>
                <img width={'100%'} src={imageUrl} alt="movie-tal" />
            </li>
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
        
        <main>
            <div className='boxMenuMovies'>
                <h1><span>Selecione o Filme</span></h1>
                
                <ul className="listMovies">
                    { image.length === 0 ?
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
                    :
                    image[0].map((item, index) =>
                    <MovieComponent key={index} imageUrl={item.posterURL} idMovie ={item.id}/>  )}
                </ul>
                
            </div>

        </main>
    )
}