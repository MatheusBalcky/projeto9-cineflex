import '../Styles/HomePage.css';
import axios from 'axios';
import React, { useEffect } from 'react';

function MovieComponent ({imageUrl}){
    return (
        <li className='movieItem'>
            <img width={'100%'} src={imageUrl} alt="movie-tal" />
        </li>
    )
}

export default function HomePage (){

    const [image, setImage] = React.useState([]);

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then( (response) => {
            setImage([response.data])
        });

    }, []);

    return (
        
        <main>
            {console.log(image)}
            <div className='boxMenuMovies'>
                <h1><span>Selecione o Filme</span></h1>
                
                <ul className="listMovies">
                    { image.length === 0 ?  'Carregando' : image[0].map((item, index) =>
                    <MovieComponent key={index} imageUrl={item.posterURL}/>
                    )}
                </ul>
                
            </div>

        </main>
    )
}