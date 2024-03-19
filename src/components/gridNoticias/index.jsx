'use client'
import CardNoticia from '../cardNoticia';
// import CardNoticia from '@components/CardNoticia';

const gridNoticias = ({noticias}) =>{
    return(
        <div>
        {noticias.map(noticia => (
            <CardNoticia key={noticia.id} noticia={noticia}/>
        ))}
        </div>
    );
};

export default gridNoticias;