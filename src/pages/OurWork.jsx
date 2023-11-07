import React, { useEffect, useState } from 'react';
import ProjectComp from '../components/ProjectComp';

import kostianis_img from '../assets/kostianis.png'

export default function OurWork({ className }) {

    const projects = [
        {
            name: 'Kostianis Productions',
            description: 'Full Website design, coding and deployment for the video production house Kostianis Productions',
            href: 'https://kostianisproductions.com',
            img: kostianis_img
        }
    ]

    return (
        <div className={`${className} w-full min-h-[calc(100vh-80px)]`}>
            <div className='flex flex-col w-full h-fit font-oxygen text-logo pb-20'>
                <div className='h-fit w-full lg:py-10 py-6 lg:text-left text-center flex flex-col border-b-[4px] border-logo bg-logo-secLight'>
                    <h1 className='lg:text-4xl text-2xl font-bold'>EXPLORE OUR PREVIOUS PROJECTS</h1>
                    <h2 className='lg:text-2xl text-xl font-light'>We feel proud of our past and confident of our future.</h2>
                </div>
                <div className='flex flex-col w-full my-20'>
                    {projects.map((project, index) => (
                        <ProjectComp
                            index={index}
                            name={project.name}
                            description={project.description}
                            href={project.href}
                            img={project.img} />
                    ))}
                </div>

            </div>
        </div>
    );

}