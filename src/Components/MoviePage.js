import '../Styles/MoviePage.css';
import FooterMovie from './FooterMovie';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Session () {
    return (
        <div className='session'>
            <h2>Quinta-feira - 24/06/2021</h2>
            <div className='boxHourSession'>
                <div className='hourSession'>
                    <span>17:00</span>
                </div>
                <div className='hourSession'>
                    <span>17:00</span>
                </div>
            </div>
        </div>
    )
}

export default function MoviePage (){

    const {idFilme} = useParams();
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
    promise.then( response => {
        console.log(response.data)
    }) 


    return (
        <main>
            <div className="boxSession">

                <h1><span>Selecione o Horário</span></h1>

                <Session />

            </div>

            <FooterMovie idFilme={idFilme}/>
        </main>
    )
}