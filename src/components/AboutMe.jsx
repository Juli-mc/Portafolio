import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div id="2" className="neon-back">
        <h1 contenteditable spellcheck="false">
          Sobre Mi
        </h1>
      </div>
      <div className="wrapper">
        <div className="card front-face">
          <img className="profile" src="../img/pic.jpg" alt="" />
        </div>
        <div className="card back-face">
          <div className="info">
            <h2 className="logo">
              Julian <span>Marin Córdoba</span>
            </h2>
            <br />
            <div className="descrip">
              <h3>Tengo 22 años y soy nacido en Bogotá, Colombia.</h3>
              <br />
              <p>
                {" "}
                Mi nombre es Julián, vivo en Bogotá, Colombia. Tengo Concimiento
                en desarrollo de aplicaciones web con React, HTML CSS Y JS. He
                construido varias aplicaciones y diseños web, como se puede ver
                en mi curriculum.{" "}
              </p>
              <br />
              <h4>
                Estoy listo para aplicar mis conocimentos en la industria del
                desarrollo web y satisfacer las necesidades del contratador.{" "}
              </h4>
              <br />
              <p>
                Siento una fuerte autoexigencia por el diseño web puesto que
                pienso que es una de las partes más importante de todo un
                proyecto web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
