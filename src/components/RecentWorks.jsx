import React from 'react';

const RecentWorks = () => {
    return (
        <div>
             <div id='3' className='neon-back'>
            <h1 contenteditable spellcheck="false">Mis últimos proyectos</h1>
            </div>
            <br />
            <div className='elements'>
            <div className='container'>
                <div className='card'>
                    <div className='box'>
                        <div className='content'>
                            <h3>Rick y Morty API</h3>
                            <p>Aplicación de búsqueda y filtración basado en una API pública del universo de Rick y Morty.</p>
                            <a href="https://coruscating-cannoli-81b6e5.netlify.app/">Conoce más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <div className='box'>
                        <div className='content'>
                            <h3>CRUD Con elementos</h3>
                            <p>Aplicación para Crear, Renombrar, Actualizar y Eliminar (CRUD) elementos, en este caso usuarios, en una API pública.</p>
                            <a href="https://cerulean-selkie-6d01ce.netlify.app">Conoce más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <div className='box'>
                        <div className='content'>
                            <h3>Ecommerce</h3>
                            <p>Aplicación desarrollada para dar funcionalidad a un sistema de login, token ID, carrito de compras y las principales funciones de un Ecommerce.</p>
                            <a href="https://incomparable-palmier-d17e2a.netlify.app">Conoce más</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RecentWorks;