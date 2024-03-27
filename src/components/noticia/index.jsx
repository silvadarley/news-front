'use client'

import './style.css'

const noticia = (props) => {
    return (
        <div className='noticia'>
            <div className='imagem' style={{backgroundImage: `url("${props.noticia.img}")`}}/>
            <div className='publicado-em'>
                {new Date(props.noticia.createdAt).toLocaleDateString('pt-br')}
            </div>
            <div className='titulo'>{props.noticia.titulo}</div>
            {/* <img src={props.noticia.img} alt="noticia" /> */}
            <div className='texto' dangerouslySetInnerHTML={{__html: props.noticia.texto}} />
            
        </div>
    );
};

export default noticia;
