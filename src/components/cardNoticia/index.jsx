'use client'

const cardNoticia = ({noticia}) =>{

    return(
        <section>
            <h2>{noticia.titulo}</h2>
            <img src={noticia.img} alt={noticia.titulo} />
            <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
        </section>
    );

};

export default cardNoticia