'use client';

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link';

import './style.css';


const menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter();
    return (
        <>
            <nav className='menu'>
                <button onClick={
                    () => setMenuLateral(!menuLateral)
                }>
                    MENU
                </button>

                <div>LOGO</div>
                <button onClick={() => router.push('/login')}>LOGIN</button>
            </nav>

            {menuLateral &&
                <div className='menu_lateral'>
                    <div className='fechar' onClick={
                        () => setMenuLateral(!menuLateral)
                    }>
                        X
                    </div>

                    <ul>
                        <li>
                            <a href='/home'>
                                Home
                            </a>
                        </li>

                        <li>
                            <a href='/noticias/produto'>
                                Produto
                            </a>
                        </li>

                        <li>
                            <a href='/noticias/tecnologia'>
                                Tecnologia
                            </a>
                        </li>

                        <li>
                            <a href='/noticias/rh'>
                                RH
                            </a>
                        </li>

                        <li>
                            <a href='/noticias/vendas'>
                                Vendas
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </>

    );
};

export default menu;