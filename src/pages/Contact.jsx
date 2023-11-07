import React, { useEffect, useState } from 'react';
import Formulary from '../components/Formulary';
import ContactCard from '../components/ContactCard';

function Contact() {

  return (
    <div className='min-h-[calc(100vh-304px)] mt-[80px] w-full'>
      <div className='font-oxygen text-logo flex flex-col w-full'>
        <div className='bg-logo-secLight flex flex-col justify-center items-center w-full h-fit py-10 pl-20 '>
          <h1 className='lg:text-4xl text-2xl font-bold'>CONTACT US</h1>
          <h2 className='lg:text-2xl text-xl font-light'>We're Here to Listen and Assist You</h2>
        </div>
        <div className='flex md:flex-row flex-col h-full w-full md:items-stretch bg-logo-white border-y-[4px] border-logo'>
          <ContactCard />
          <Formulary />
        </div>


      </div>
    </div>

  );

}

export default Contact;