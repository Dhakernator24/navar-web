import React, { useEffect, useState } from 'react';
import webDesign from '../assets/web-design.jpg';
import { Link } from 'react-router-dom';

export default function Webdev({ className, setCurrent }) {

    const web_services = [
        {
            title: "Responsive Design",
            text: "In an era where users access websites from various devices, having a responsive design is non-negotiable. Our websites are meticulously crafted to adapt seamlessly to desktops, tablets, and mobile phones, providing an optimal viewing experience for every visitor.",
        },
        {
            title: "Custom Development",
            text: "We recognize that your business has distinct needs. Our custom development solutions are tailored to fit your specific requirements. Whether it's an e-commerce platform, a content management system, or a unique web application, we have the expertise to bring your vision to life.",
        },
        {
            title: "SEO Integration",
            text: "A stunning website is only effective if it can be found. Our team integrates robust SEO strategies into every project, ensuring that your website ranks prominently on search engine results pages. This drives organic traffic, enhancing your online visibility and ultimately, your bottom line.",
        },
        {
            title: "Branding & Identity",
            text: "Consistency is key to a memorable brand. We collaborate closely with you to ensure that your website seamlessly integrates with your brand's identity. From color schemes to typography, every element is carefully curated to create a cohesive and compelling online presence.",
        }
    ]

    return (
        <div className={`${className} min-h-[calc(100vh-80px)] h-full w-full`}>
            <div className='font-oxygen text-logo flex flex-col w-full'>
                <div className='bg-logo-secLight w-full pl-20 py-10 h-fit border-b-[4px] border-logo'>
                    <h1 className='text-4xl font-bold'>WEB DESIGN & CUSTOM WEBSITES</h1>
                    <h2 className='text-2xl font-extralight'>Empowering Small and Midsize Businesses Online</h2>
                </div>


                <div className='w-full h-full mt-10 px-20 flex flex-row gap-10'>
                    <img src={webDesign} className='w-[400px] h-fit' />

                    <div className='flex flex-col justify-center items-start flex-grow'>
                        <h3 className='text-xl'>Why Choose Our Web Design Services? </h3>
                        <p className='text-base'>In the digital age, a captivating online presence is crucial for businesses of all sizes. At Navar, we understand the unique challenges faced by small and midsize businesses. Our specialized web design services are crafted to not only showcase your brand but also drive growth and engagement.</p>

                    </div>

                </div>



                <div className='flex flex-row w-full mt-20 pl-20 justify-start items-center'>
                    <div className='w-3 h-8 bg-logo-second' />
                    <h3 className='text-xl ml-4 mb-0 font-bold'>Our Comprehensive Web Design Services</h3>
                </div>
                <ul className='flex flex-col gap-8 mt-6 pl-16 mx-12 w-full'>
                    {web_services.map((elem, index) => {
                        return <li className='flex flex-col w-3/4'>
                            <h4 className='text-lg underline decoration-2 decoration-logo'>{elem.title}</h4>
                            <p className='text-base'>{elem.text}</p>
                        </li>
                    })}
                </ul>
                <div className='flex flex-col pl-20 mt-20'>
                    <div className='flex flex-row w-full justify-start items-center'>
                        <div className='w-3 h-8 bg-logo-second' />
                        <h3 className='text-xl ml-4 mb-0 font-bold'>Explore Our Portfolio</h3>
                    </div>
                    <div className='pl-6 flex flex-col mt-8'>
                        <p className='text-base'>Browse through our recent web design projects for small and midsize businesses. Each project showcases our commitment to excellence and innovation in web design.</p>
                        <a
                            href='/our-work'
                            className='group no-underline w-fit'
                            onClick={() => setCurrent('our-work')}>
                            <p className='text-logo mb-0 font-bold transition-all duration-300'>See our work!</p>
                            <div className='h-[5px] bg-logo-second group-hover:w-full w-[20%] transition-all duration-300' />
                        </a>
                    </div>


                </div>

                <div className='flex flex-col pl-20 my-20'>
                    <div className='flex flex-row w-full justify-start items-center'>
                        <div className='w-3 h-8 bg-logo-second' />
                        <h3 className='text-xl ml-4 mb-0 font-bold'>Ready to Elevate Your Online Presence?</h3>
                    </div>
                    <div className='pl-6 flex flex-col mt-8'>
                        <p className='text-base'>Contact our team today to discuss your web design and custom website needs. We're passionate about helping businesses like yours thrive in the digital landscape.</p>
                        <a
                            href='/contact'
                            className='group no-underline w-fit'
                            onClick={() => setCurrent('contact')}>
                            <p className='text-logo mb-0 font-bold transition-all duration-300'>Let's Talk!</p>
                            <div className='h-[5px] bg-logo-second group-hover:w-full w-[20%] transition-all duration-300' />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );

}