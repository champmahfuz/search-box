import React, { useRef } from 'react';
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import styles from './Contact.module.css';
import Navigation from '../Shared/Navigation/Navigation';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    // email js start
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm
            ('service_fiaz5ja',
                'template_56xs827',
                form.current,
                'CUBHEWCvobZUtjk5k')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset('');
        // document.getElementById('messagesent').setAttributes('disabled', 'disabled');

        // ${"#messagesent"}.attr()
    };
    // email js end

    return (
        <>
            <Navigation />
            <Container className="my-5">
                <form ref={form} onSubmit={sendEmail} action="">
                    <div className={`${styles.contactContainer}`}>
                        <div className={`${styles.contactBox}`}>
                            <div className={`${styles.left1}`}></div>
                            <div className={`${styles.right1}`}>
                                <h2>Contact Us</h2>
                                <input type="text" className={`${styles.field}`} placeholder="Your Name " name="name" />
                                <input type="email" className={`${styles.field}`} placeholder="Your Email " name="email" />
                                <input type="text" className={`${styles.field}`} placeholder="Phone" name="phone" />
                                <textarea placeholder="Message" name="subject" className={`${styles.field}`}></textarea>
                                <button className={`${styles.btn1}`} id='messagesent' disabled={'disabled'}>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;