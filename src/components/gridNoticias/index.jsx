'use client'
import CardNoticia from '../cardNoticia';
import './style.css';
// import CardNoticia from '@components/CardNoticia';

const gridNoticias = ({noticias}) =>{
    return(
        <div className='grid-noticia'>
        {noticias.map(noticia => (
            <CardNoticia key={noticia.id} noticia={noticia}/>
        ))}
        </div>
    );
};

export default gridNoticias;