import { useState } from "react";
import Form from "../../component/form/Form"

export default function Contact() {
    const [isVisible, setVisible] = useState(false);

    const handlevisible = (value) => {
        setVisible(value);
    };
    const toggleContact = () => {
        if (isVisible) {
            handlevisible(false);
            contact.classList.toggle('visible');
        } else {
            handlevisible(true);
            contact.classList.toggle('visible');
        }
    };

    const contactButton = document.getElementById('contact-link');
    const contact = document.getElementById('contact-container');
    contactButton.addEventListener('click', toggleContact);

    return (
        <div id="contact-container" className="contact-container">
            <Form />
            <div className="contact-infos">
                <p><i className="fa-solid fa-house"></i> 42 rue de la bonne bouffe, 59200 Tourcoing</p>
                <p><i className="fa-solid fa-phone"></i> 03.27.00.00.00 - 06.06.06.06.06</p>
                <iframe className="contact-map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.10944152363!2d3.1480728172760815!3d50.736459005276224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1675326091205!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}