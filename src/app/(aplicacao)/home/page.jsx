'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Noticia from '../../../components/noticia';
import LateralEsquerda from '../../../components/lateralEsquerda';
import LateralDireita from '../../../components/lateralDireita';
import './style.css';



// const noticias = [
//     {
//         id: 1,
//         titulo: 'Noticia 1',
//         img: 'https://via.placeholder.com/150',
//         texto: 'Texto da <b>noticia 1</b>'
//     },
//     {
//         id: 2,
//         titulo: 'Noticia 2',
//         img: 'https://via.placeholder.com/150',
//         texto: 'Texto da <b>noticia 2</b>'
//     },
//     {
//         id: 3,
//         titulo: 'Noticia 3',
//         img: 'https://via.placeholder.com/150',
//         texto: 'Texto da <b>noticia 3</b>'
//     },
//]

const homePage = () => {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias');
            setNoticias(result.data);
        } catch (error) {
            alert(error.response.data.message);
        }

    }

    useEffect(() => {
        getNoticias();
    }, []);
    return (
        <div className='grid-home'>
            <LateralEsquerda/>
            <div style={{ background: '#000', color: '#fff' }}>
                <h1 style={{ padding: '10px, 0', textAlign: 'center' }}>Home</h1>
                {
                    noticias.map(noticia =>
                        <Noticia key={noticia.id} noticia={noticia} />
                    )
                }
            </div>
            <LateralDireita/>
        </div>
    );
};

export default homePage;