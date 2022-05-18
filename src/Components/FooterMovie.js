import '../Styles/FooterMovie.css'
import React from 'react';
import axios from 'axios';

export default function FooterMovie ({ idFilme }){
    const [image, setImage] = React.useState('');
    const [title, setTitle] = React.useState('');
    
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
    promise.then( response => {
        setImage(response.data.posterURL);
        setTitle(response.data.title);
    }) 

    return (
        <div className="footerMovie">
            <div className='canvaImg'>
                <img width={'100%'} src={image} />
            </div>

            <div className="movieDescription">
                <div>
                    {title}
                </div>
            </div>
        </div>
    )
}