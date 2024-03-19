'use client'
import axios from 'axios';
import { useState } from "react";

const cadastroNoticiaForm = () => {

    const [titulo, setTitulo] = useState('');
    const [img, setImg] = useState('');
    const [texto, setTexto] = useState('');
    const [categoria, setCategoria] = useState('');

    const aoSubmeter = async (e) => {
        e.preventDefault()
        try{
            const formulario ={
                titulo,
                img,
                texto,
                categoria
            }
            const result = await axios.post('http://localhost:8080/noticias', formulario)
            alert('nova notícia cadastrada');
            return Router.push('/home')
        } catch (error){
            alert(error.response.data.message)
        }
    
        console.log('submeteu: ', titulo, img, texto);
    };

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;

        if (name === 'titulo') {
            setTitulo(value);
        }

        if (name === 'img') {
            setImg(value);
        }

        if (name === 'texto') {
            setTexto(value);
        }

        if (name === 'categoria') {
            setCategoria(value);
        }

        console.log('alterou: ', titulo, img, texto);
    };

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="titulo">Titulo.:</label>
                <input type="text" name="titulo" onChange={aoAlterarValores}></input>
            </div>

            <div>
                <label htmlFor="imagem">Imagem.:</label>
                <input type="text" name="img" onChange={aoAlterarValores}></input>
            </div>

            <div>
                <label htmlFor="texto">Texto.:</label>
                <input type="text" name="texto" onChange={aoAlterarValores}></input>
            </div>

            <div>
                <label htmlFor="texto">Categoria.:</label>
                <select name="categoria" onChange={aoAlterarValores}>
                    <option value="produto">Produto</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="rh">RH</option>
                    <option value="vendas">Vendas</option>
                </select>
            </div>

            <button type="submit">Criar notícia</button>

        </form>
    );
};

export default cadastroNoticiaForm;