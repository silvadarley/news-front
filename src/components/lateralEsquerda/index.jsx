'use client'
import CardNoticia from '../cardNoticia';
import truncteWithElipses from '@/app/libs/truncteWithElipses';
import './style.css'



export const lateralEsquerda =() => {

    const noticia = {
        img: 'https://www.estadao.com.br/resizer/v2/XRXN6JC5IJFQNDOF5ABSKMYEV4.jpg?quality=80&auth=8352ada20572085bc3574f94c7bf15f7eae6e110f5262185525bed48694f4137&width=380',
        tituli: 'Estado Islâmico K: o grupo extremista que reivindica o atentado em casa de shows em Moscou',
        texto: 'O grupo Estado Islâmico-Khorasan é um braço afegão do grupo terrorista. Autoridades dos EUA tinham recebido informações sobre a presença do EI-K na Rússia e avisaram o governo de Vladimir Putin. Neste sábado (23) completa cinco anos desde que o Estado Islâmico perdeu seu último território na Síria.',
        createdAt: new Date()
    }

    noticia.texto = truncteWithElipses(noticia.texto, 200);

    return (
        <div className='noticia-esquerda'>
            <h2 className='titulo'>Mais Pupolar</h2>
            <CardNoticia noticia={noticia}/>
        </div>
    )
};

export default lateralEsquerda;