import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div id='2' className='neon-back'>
            <h1 contenteditable spellcheck="false">Sobre Mi</h1>
            </div>
        <div className='wrapper'>
            <div className='card front-face'>
            <img className='profile' src='../img/pic.jpg' alt="" />
            </div>
            <div className='card back-face'>
            <div className='info'>
            <h2 className='logo'>Julian <span>Marin Córdoba</span></h2>
                <br />
                <div className='descrip'><h3>Tengo 22 años y soy nacido en Bogotá, Colombia.</h3>
                <br />
                    <p> Me gusta el desarrollo web desde que conocí las criptomonedas y en un futuro no muy lejano me gustaría aprender Solidity para desarrollar
                    sobre la tecnología blockchain y complementarlo junto al desarollo web. </p>
                <br />
                    <h4>Siento una fuerte autoexigencia por el diseño web puesto que pienso que es la parte más importante de todo un proyecto web.</h4>
                <br />
                    <p>También me gusta la tecnología y aprender de sistemas operativos. Pues me gustaría seguir aprendiendo sobre Kali Linux y poder combinar mis conocimientos.</p> 
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default AboutMe;