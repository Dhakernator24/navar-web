import React, { useEffect, useState } from 'react';
import Formulary from '../components/Formulary';
import ContactCard from '../components/ContactCard';

function Contact() {

  return (
    <div className='min-h-[calc(100vh-80px)] mt-[80px] w-full flex flex-col font-oxygen text-logo'>
      <div className='flex flex-col text-center lg:text-left bg-logo-secLight w-full lg:pl-16 py-10 h-fit border-b-[4px] border-logo'>
        <h1 className='lg:text-4xl text-2xl font-bold'>CONTACT US</h1>
        <h2 className='lg:text-2xl text-xl font-light'>We're Here to Listen and Assist You</h2>
      </div>
      <div className='flex flex-1 md:flex-row flex-col w-full bg-logo-white border-logo'>
        <ContactCard />
        <Formulary />
      </div>
    </div>

  );

}

export default Contact;