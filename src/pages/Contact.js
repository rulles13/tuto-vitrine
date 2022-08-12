import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue Laplace</p>
                            <p>64200 Biarritz</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <p>00/99.33.66</p>
                        </div>
                    </div>
                    <div className="email">
                        <h4>email</h4>
                        <p>fsagency@gmail.com</p>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>S. gillon - 2022</p>
                    </div>
                </div>
            <Buttons left={"/projet-4"} />
            </div>
        </main>
    );
};

export default Contact;