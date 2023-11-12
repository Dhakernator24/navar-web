import React, { useEffect, useState } from 'react';
import webDesign from '../assets/web-design.jpg';
import { Link } from 'react-router-dom';
import aws from '../assets/AWS.png'
import azure from '../assets/Azure.png'
import gcp from '../assets/GCP.png'
import { HiOutlineCloud } from 'react-icons/hi2'
import { BsCpu, BsCurrencyDollar } from 'react-icons/bs'
import { SlRocket } from 'react-icons/sl'
import { BsBuildingGear } from 'react-icons/bs'
import { IoInfiniteOutline } from 'react-icons/io5'
import { TfiLock } from 'react-icons/tfi'
import { GrTest } from 'react-icons/gr'
import { TbHeartRateMonitor, TbTestPipe } from 'react-icons/tb'


export default function Devops({ className, setCurrent }) {

    const reasons = [
        {
            title: "Experienced Professionals",
            text: "Our team comprises seasoned DevOps experts with a proven track record of delivering successful projects for diverse industries.",
        },
        {
            title: "Tailored Solutions",
            text: "We understand that every business is unique. Our consulting services are customized to align with your specific goals, challenges, and industry requirements.",
        },
        {
            title: "Proven Methodologies",
            text: "We follow industry best practices and methodologies to ensure the highest quality of service delivery.",
        },
        {
            title: "End-to-End Support",
            text: "From assessment and strategy development to implementation and ongoing support, we're with you every step of the way.",
        },
    ]

    const iconStyle = 'w-20 h-20 md:w-14 md:h-14 lg:w-10 lg:h-10'
    const web_services = [
        {
            title: "Continuous Integration and Continuous Deployment (CI/CD)",
            text: "Implementing CI/CD pipelines is essential for accelerating your software development lifecycle. Our experts will work closely with your team to design and deploy robust CI/CD pipelines, ensuring rapid and reliable code delivery.",
            icon: <SlRocket className={iconStyle} />
        },
        {
            title: "Infrastructure as Code (IaC)",
            text: "Efficiently manage your infrastructure with Infrastructure as Code. We help you leverage leading tools and best practices to automate the provisioning and configuration of your resources, ensuring scalability and consistency.",
            icon: <BsBuildingGear className={iconStyle} />
        },
        {
            title: "DevSecOps",
            text: "Security is paramount in today's digital landscape. Our DevSecOps approach integrates security practices seamlessly into your development and operations workflows, safeguarding your applications and infrastructure from vulnerabilities.",
            icon: <TfiLock className={iconStyle} />
        },
        {
            title: "Cloud Adoption and Optimization",
            text: "Embrace the power of cloud computing with confidence. Our consultants will guide you through the process of migrating, optimizing, and managing your workloads on leading cloud platforms, ensuring scalability, cost-effectiveness, and high availability.",
            icon: <HiOutlineCloud className={iconStyle} />
        },
        {
            title: "Automated Testing and Quality Assurance",
            text: "Achieve higher quality software through automated testing strategies. We help you implement robust testing frameworks and methodologies to identify and rectify issues early in the development process.",
            icon: <TbTestPipe className={`${iconStyle}`} />
        },
        {
            title: "Performance Optimization",
            text: "Ensure your applications and infrastructure perform at their best. Our experts analyze and fine-tune your systems to maximize performance, delivering a seamless experience for your end-users.",
            icon: < BsCpu className={iconStyle} />
        },
        {
            title: "Monitoring and Incident Response",
            text: "Proactively manage your applications and infrastructure with comprehensive monitoring solutions. We set up monitoring tools and implement incident response strategies to identify and address issues in real-time.",
            icon: <TbHeartRateMonitor className={iconStyle} />
        },
        {
            title: "Compliance and Regulatory Adherence",
            text: "Stay compliant with industry standards and regulations. We provide guidance and implement processes to ensure your DevOps practices align with relevant compliance requirements.",
            icon: <IoInfiniteOutline className={iconStyle} />
        },
    ]

    return (
        <div className={`${className} min-h-[calc(100vh-80px)] h-full w-full`}>
            <div className='font-oxygen text-logo flex flex-col w-full'>
                <div className='flex flex-col text-center lg:text-left bg-logo-secLight w-full lg:pl-16 py-10 h-fit border-b-[4px] border-logo'>
                    <h1 className='text-4xl font-bold'>DEVOPS CONSULTING</h1>
                    <h2 className='text-2xl font-extralight'>Your Trusted Partner for DevOps Excellence</h2>
                </div>


                <div className='w-full text-center h-fit px-3 lg:px-16 my-10 md:my-20 font-bold text-base md:text-xl'>
                    At Navar Solutions, we specialize in providing comprehensive DevOps solutions and consulting services tailored to meet the unique needs of your organization.
                </div>


                <div className='w-full pl-3 lg:pl-8 pr-3 lg:pr-0 mb-20'>

                    <div className='flex flex-row w-full justify-start items-center'>
                        <div className='w-3 h-8 bg-logo-second' />
                        <h3 className='text-xl ml-4 mb-0 font-bold'>Our DevOps Expertise</h3>
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

                    <div className='pl-8 font-bold mt-6'>
                        At Navar Solutions, we don't just deliver solutions; we build lasting partnerships. Our commitment to your success goes beyond the project, as we continue to evolve with your business and adapt to your changing needs. When you choose Navar Solutions, you're choosing a trusted ally in your journey towards DevOps excellence.
                    </div>

                    <div className='flex flex-row w-full justify-start items-center mt-20'>
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