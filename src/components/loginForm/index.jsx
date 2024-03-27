'use client'
import axios from 'axios';
import {useRouter} from 'next/navigation';

import { useState } from "react";

const loginForm = () => {
    const router = useRouter();

    const [formulario, setFormulario] = useState(
        {
            email: '',
            senha: ''
        }
    )

    const aoSubmeter = async (e) => {
        e.preventDefault();
        try{
            const result = await axios.post('http://localhost:8080/login', formulario);
            alert(result.data.message);
            router.push('/admin/noticia/criar');
        } catch (error){
            alert(error.response.data.message);
        }
        console.log('submetido: ', formulario);
    }

    const aoAlterarValores = (e) =>{
        const {name, value} = e.target
        setFormulario({
            /*
            Adicionando o operador de espalhamento (...formulario), estou garantindo que todas 
            as propriedades do estado anterior sejam incluídas no novo estado, e sobrescrevendo 
            a propriedade correspondente com o novo valor.
            */
            ...formulario,
            [name]:value
            //verificar.
            /*senha: value // Adicionando a propriedade "senha" ao objeto*/
            //[senha]: value // Desta maneira o navegador retorna um erro
        })
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="email">E-mail.: </label>
                <input 
                    type="text" 
                    name="email"
                    onChange={aoAlterarValores}
                />
            </div>

            <div>
                <label htmlFor="senha">Senha.: </label>
                <input 
                    type="password" 
                    name="senha"
                    onChange={aoAlterarValores}
                />
            </div>

            <button type="submit">Enviar</button>

        </form>
    );
};

export default loginForm;