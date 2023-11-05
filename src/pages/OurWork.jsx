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
        <div className={`${className} bg-logo-light/30 w-full min-h-[calc(100vh-80px)]`}>
            <div className='flex flex-col w-full h-fit font-oxygen text-logo pl-20 py-20'>
                <h1 className='text-4xl font-bold underline decoration-logo-second underline-offset-[10px] decoration-4'>Some of our past projects</h1>
                <div className='flex flex-col w-full my-20'>
                {projects.map((project,index) => (
                    <ProjectComp 
                    index={index}
                    name={project.name} 
                    description={project.description}
                    href={project.href}
                    img={project.img}/>
                ))}
                </div>
                
            </div>
        </div>
    );

}