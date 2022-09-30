import React, { useState } from 'react';

const ContactMe = () => {

    const [textValue, setTextValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [objectValue, setObjectValue] = useState("")

    return (
        <div id='4'>
            
            <div id="contact">l
            <h2 className='ad'><span>Contacto</span></h2>
                <article>
                <br />
                <a href="mailto:julianmarincordoba19@gmail.com"><label for="checkcontact" className="contactbutton"><div className="mail"></div></label><input id="checkcontact" type="button"  /></a>

                        <form action="" method="post" className="contactform">
                            <p className="input_wrapper"><input type="text" name="contact_nom" value={textValue} onChange={e=>setTextValue(e.target.value)} id="contact_nom" /><label for="contact_nom">Nombre</label></p>
                            <p className="input_wrapper"><input type="text" name="contact_email" value={emailValue} onChange={e=>setEmailValue(e.target.value)} id="contact_email" /><label for="contact_email">Email</label></p>
                            <p className="input_wrapper"><input type="text" name="contact_sujet" value={objectValue} onChange={e=>setObjectValue(e.target.value)} id="contact_sujet" /><label for="contact_sujet">Asunto</label></p>
                            <p className="textarea_wrapper"><textarea name="contact_message" id="contact_message"></textarea></p>
                            <p className="submit_wrapper"><input type="submit" value="ENVIAR" /></p>
                        </form>
                </article>
            </div>
        </div>
    );
};

export default ContactMe;