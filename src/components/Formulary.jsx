import React, { useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


export default function Formulary() {

  const [isSent, setIsSent] = useState(() => {
    const storedValue = sessionStorage.getItem('isSent');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    sessionStorage.setItem('isSent', isSent);
  }, [isSent]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [formOk, setFormOk] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleFormChange = (isOk) => {
    setFormOk(isOk)
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/, '');
    setPhone(value);
    setPhoneValid(validatePhone(value));
  };

  const handleNameChange = (event) => {
    setFirstName(event.target.value)
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  };

  const send = () => {
    setIsSent(true)
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // console.log(formData);

    // Submit form data to a specific URL
    const url = 'https://nocodeform.io/f/654f1741d39a01f7246e849c';
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/javascript',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission response:', data);
        // Handle response as needed
        send()
        handleFormChange(true)
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Handle error as needed
        handleFormChange(false)
      });
  };

  //COMMON STYLES

  const titleStyles = 'mb-3 block text-base font-oxygen text-black'
  const boxStyles = 'w-full border-[2px] border-[#e0e0e0] bg-white py-3 px-6 text-base font-oxygen text-[#6B7280] outline-none focus:border-logo-second focus:shadow-md'




  return (
    <>
      {!isSent &&
        <div className="w-full lg:w-[60%] flex flex-col px-12 pt-10 pb-12">
          <div className='text-lg [text-align:center] lg:text-left mb-10 font-oxygen font-semibold text-black'>
            Or if you prefer we will contact you:
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className="flex flex-row gap-3">
              <div className="w-full sm:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="fName"
                    className={`${titleStyles}`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleNameChange}
                    required
                    className={`${boxStyles}`}
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="lName"
                    className={`${titleStyles}`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                    className={`${boxStyles}`}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className={`${titleStyles}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={`${boxStyles} ${!emailValid && 'border-red-500'
                  }`}
                value={email}
                onChange={handleEmailChange}
                required
              />
              {!emailValid && (
                <p className="text-red-500 font-oxygen text-xs mt-1">Please enter a valid email</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className={`${titleStyles}`}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder='Phone Number'
                className={`${boxStyles} ${!emailValid && 'border-red-500'
                  }`}
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              {!phoneValid && (
                <p className="text-red-500 font-oxygen text-xs mt-1">
                  Please enter a valid 10-digit phone number
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='msg'
                className={`${titleStyles}`}>
                What can we help you with?
              </label>
              <textarea
                type="text"
                id='msg'
                placeholder='Brief description (optional)'
                className={`${boxStyles}`}
                value={message}
                onChange={handleMessageChange}
                rows="5"
              />
            </div>
            {!formOk && <div className='text-red-700 font-oxygen text-xl'>
              Something went wrong, please try again later
            </div>
            }
            <button
              className="font-oxygen font-semibold border-[3px] text-base  py-3 px-8 text-center border-logo hover:bg-logo-secLight hover:text-logo outline-none
                   bg-logo text-logo-second transition-all duration-300 lg:place-self-start place-self-center"
              type='submit'
            >
              Submit
            </button>

          </form>
        </div >
        ||
        <div className='text-4xl text-black font-oxygen font-extrabold my-auto pl-10 w-[60%]'>Thank you we will contact you soon</div>
      }

    </>

  )
}