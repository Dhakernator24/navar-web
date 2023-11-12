import React, { useEffect, useState } from 'react';
import building from '../assets/buildings.jpg'
import { Link } from 'react-router-dom';
import aws from '../assets/AWS.png'
import azure from '../assets/Azure.png'
import gcp from '../assets/GCP.png'
import { HiOutlineCloud } from 'react-icons/hi2'
import { BsCpu, BsCurrencyDollar } from 'react-icons/bs'
import { FaAws } from 'react-icons/fa'
import { MdMoveDown } from 'react-icons/md'
import { IoInfiniteOutline } from 'react-icons/io5'
import { TfiLock } from 'react-icons/tfi'

export default function Cloud({ className, setCurrent }) {


    const reasons = [
        {
            title: "Expertise",
            text: "Our team comprises certified cloud professionals with extensive experience in designing, optimizing, and managing cloud environments, with a particular emphasis on AWS.",
        },
        {
            title: "Customized Solutions",
            text: "We understand that every business is unique. Our solutions are tailored to meet your specific requirements and align with your strategic goals.",
        },
        {
            title: "Proven Track Record",
            text: "Navar Solutions has a track record of successfully delivering cloud solutions to businesses of all sizes, from startups to enterprises.",
        },
        {
            title: "Continuous Support",
            text: "We provide ongoing support and monitoring to ensure your cloud environment remains optimized, secure, and aligned with your business needs.",
        },
    ]

    const iconStyle = 'w-20 h-20 md:w-14 md:h-14 lg:w-10 lg:h-10'

    const web_services = [
        {
            title: "Cloud Architecture",
            text: "Our expert architects design robust and scalable cloud infrastructures that form the backbone of your digital transformation journey. With specialized expertise in AWS, Azure, and GCP, we ensure that your cloud environment is secure, reliable, and optimized for performance.",
            icon: <HiOutlineCloud className={iconStyle} />
        },
        {
            title: "Computing Optimization",
            text: "Maximize the potential of your cloud investment with Navar Solutions. Our team of seasoned professionals, including AWS Solutions Architect Associate Certified experts, analyzes your existing cloud infrastructure, identifies inefficiencies, and implements strategic optimizations to enhance overall efficiency and reduce costs.",
            icon: <BsCpu className={iconStyle} />
        },
        {
            title: "Cost Optimization",
            text: "At Navar Solutions, we understand the importance of cost-effectiveness in cloud operations. Leveraging our deep knowledge of AWS, Azure, and GCP, we meticulously assess your cloud expenditure and implement cost-saving strategies without compromising performance or security.",
            icon: <BsCurrencyDollar className={iconStyle} />
        },
        {
            title: "Solutions Architecture",
            text: "Leverage our deep expertise in cloud technology to architect solutions that align with your business objectives. Our solutions are designed to drive innovation, improve agility, and enhance your competitive edge in the market, with a particular focus on AWS. We hold a distinguished Solutions Architect Associate Certification, further affirming our commitment to delivering excellence in cloud architecture.",
            icon: <FaAws className={iconStyle} />
        },
        {
            title: "Cloud Migrations",
            text: "Embark on a seamless journey to the cloud with Navar Solutions. Our proven migration methodology, including AWS-certified experts, ensures a smooth transition of your applications and data, minimizing downtime and ensuring continuity of operations.",
            icon: <MdMoveDown className={iconStyle} />
        },
        {
            title: "DevOps in the Cloud",
            text: "Accelerate your software development and deployment cycles with our DevOps expertise in the cloud. We implement best practices and automation tools to streamline processes, improve collaboration, and enhance overall agility across AWS, Azure, and GCP.",
            icon: <IoInfiniteOutline className={iconStyle} />
        },
        {
            title: "Cloud Security",
            text: "Protect your digital assets with our robust cloud security solutions. With a focus on AWS, Azure, and GCP, we employ industry-leading practices and technologies to safeguard your data, applications, and infrastructure from evolving threats.",
            icon: <TfiLock className={iconStyle} />
        },
    ]

    return (
        <div className={`${className} min-h-[calc(100vh-80px)] h-full w-full`}>
            <div className='font-oxygen text-logo flex flex-col w-full'>
                <div className='flex flex-col text-center lg:text-left bg-logo-secLight w-full lg:pl-16 py-10 h-fit border-b-[4px] border-logo'>
                    <h1 className='text-4xl font-bold'>CLOUD SOLUTIONS</h1>
                    <h2 className='text-2xl font-extralight'>Empowering Businesses with Agile, Scalable, and Secure Cloud Solutions</h2>
                </div>

                <div className='h-fit flex flex-row justify-evenly items-center my-4 lg:mt-12'>
                    <img src={aws} className='w-[80px] md:w-[100px] lg:w-[200] h-auto' />
                    <img src={azure} className='w-[150px] md:w-[200px] lg:w-[200] h-auto -mr-5' />
                    <img src={gcp} className='w-[100px] md:w-[150px] lg:w-[200] h-auto' />
                </div>

                <div className='w-full pl-3 lg:pl-8 pr-3 lg:pr-0 mb-20'>
                    <div className='flex flex-row w-full justify-start items-center'>
                        <div className='w-3 h-8 bg-logo-second' />
                        <h3 className='text-xl ml-4 mb-0 font-bold'>Our Cloud Services Offering</h3>
                    </div>
                    <ul className='flex flex-col justify-center mt-6 pl-0 md:px-12 lg:px-12 w-full divide-y-logo divide-y-2'>
                        {web_services.map((elem, index) => {
                            return <li className='flex flex-col md:flex-row justify-center items-center lg:w-3/4 h-full gap-5 py-4'>
                                {elem.icon}
                                <div className='flex flex-col w-full h-full [text-align:center] md:text-left'>
                                    <h4 className='text-lg font-bold pb-3'>{elem.title}</h4>
                                    <p className='text-base'>{elem.text}</p>
                                </div>

                            </li>
                        })}
                    </ul>
                    <div className='flex flex-col justify-center items-start flex-grow'>
                        <div className='flex flex-row w-full mb-4 justify-start items-center'>
                            <div className='w-3 h-8 bg-logo-second' />
                            <h3 className='text-xl ml-4 mb-0 font-bold'>Why Choose Navar Solutions?</h3>
                        </div>
                        <div className='flex flex-row'>
                            {/* <img src={building} className='mt-2 h-[100px] w-auto shadow-lg object-cover flex-grow' /> */}
                            <ul className='flex flex-col w-full'>
                                {reasons.map((elem, index) => {
                                    return <li className='flex flex-col  w-full'>
                                        <h4 className='text-lg font-bold'>{elem.title}</h4>
                                        <p className='text-base'>{elem.text}</p>
                                    </li>
                                })}
                            </ul>
                        </div>

                    </div>

                    <div className='pl-8 font-bold pt-10'>
                        Partner with Navar Solutions for unparalleled expertise in cloud solutions.
                    </div>

                    <div className='flex flex-row w-full justify-start items-center mt-20'>
                        <div className='w-3 h-8 bg-logo-second' />
                        <h3 className='text-xl ml-4 mb-0 font-bold'>Get in Touch for Expert Cloud Solutions</h3>
                    </div>
                    <div className='pl-6 flex flex-col mt-8'>
                        <p className='text-base'>Contact us today to schedule a consultation and embark on your journey to a more efficient, scalable, and secure cloud environment.</p>
                        <a
                            href='/contact'
                            className='group no-underline w-fit'
                            onClick={() => setCurrent('contact')}>
                            <p className='text-logo mb-0 font-bold text-xl transition-all duration-300'>LET'S TALK!</p>
                            <div className='h-[5px] bg-logo-second group-hover:w-full w-[20%] transition-all duration-300' />
                        </a>
                    </div>
                </div>




                   

            </div>

        </div>
    );

}