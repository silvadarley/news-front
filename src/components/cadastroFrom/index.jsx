'use client'
import axios from 'axios';
import {useRouter} from 'next/navigation';
import { useState } from 'react';


const cadastroForm = () =>{
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    console.log('1')
    const aoSubmeter = async (e) =>{
        e.preventDefault();
        console.log('2')
        //todo enviar para a base de dados
        try{
            console.log('3')
            const formulario = {
                nome,
                email,
                senha
            }

            const result = await axios.post('http://localhost:8080/usuarios', formulario);
           
            alert(result.data.message); 
            console.log(data)
            router.push('/usuarios')
        } catch (error){
            // console.log(data)
            alert(error.response.data.message)
            // alert('deu um erro!')
        }
        console.log('Submetendo: ', nome, email, senha);
     }

    const aoAlterarValores = (e) =>{
        const {name, value} = e.target
        switch(name){
            case 'nome':
                setNome(value);
                break
            case 'email':
                setEmail(value);
                break
            case 'senha':
                setSenha(value);
                break
            // default:{
            //     return console.log('Algo deu derrado!');
            // }
        }
    }

    return(
        <form onSubmit= {aoSubmeter}>
            <div>
                <label htmlFor="nome">Nome.:</label>
                <input 
                    type="text" 
                    name="nome" 
                    onChange={aoAlterarValores}
                    placeholder='Nome Sobrenome'
                />
            </div>

            <div>
                <label htmlFor="email" >E-mail.:</label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={aoAlterarValores}
                    placeholder='email@email.com'
                />
            </div>

            <div>
                <label htmlFor="senha" >Senha.:</label>
                <input 
                    type="password" 
                    name="senha" 
                    onChange={aoAlterarValores}
                    placeholder='*******'
                
                />
            </div>

            <button type="submit">Enviar</button>
            
        </form>
    );
};

export default cadastroForm;