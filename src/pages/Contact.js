import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';


function Contact() {
    return (
      <div>
      <Navbar />
      <div className="container">
      <ContactForm />
      </div>
      <Footer />
      </div>
    );
  }
  
  export default Contact;