'use client';

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faXmark } from '@fortawesome/free-solid-svg-icons';

import './style.css';


const menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter();
    return (
        <>
            <nav className='menu fixed-nav'>
                <button onClick={
                    () => setMenuLateral(!menuLateral)
                }>
                    {/* MENU */}
                    <FontAwesomeIcon icon={faBars} size="2x" color='#333' />
                </button>
                <div className='logo-container'>
                    <div className='marca'>
                        <FontAwesomeIcon icon={faMugHot} size='2x'/> Logo
                    </div>
                </div>
                <button className='login' onClick={() => router.push('/login')}>LOGIN</button>
            </nav>

            {menuLateral &&
                <div className='menu_lateral'>
                    <div className='fechar' onClick={
                        () => setMenuLateral(!menuLateral)
                    }>
                        <FontAwesomeIcon icon={faXmark} size='2x' />
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