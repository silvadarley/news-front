'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import GridNoticias from "@/components/gridNoticias";

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
//     }]


const noticiasPage = ({params}) =>{

    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/noticias?categoria=${params.categoria}`);
            setNoticias(result.data);
        }catch(error){
            alert(error.response.data.message);
        }
    }

    useEffect(()=>{
        getNoticias();
    }, []);

    return(
        <div>
            <h1>{params.categoria.toUpperCase()}</h1>
            <GridNoticias noticias={noticias}/>
        </div>
    );
};

export default noticiasPage;