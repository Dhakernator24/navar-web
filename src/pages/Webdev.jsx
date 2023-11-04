import React, { useEffect, useState } from 'react';
import image_good from '../assets/web_page_image.jpg';

export default function Webdev({ className }) {

    return (
        <div className={`${className} min-h-[calc(100vh-80px)] h-full w-full`}>
            <div className='font-oxygen text-logo flex flex-col pl-32 w-full pt-32'>
                <h1 className='text-4xl font-bold'>Get your Web Site done profesionally</h1>
                <h2 className='text-2xl'>At affordable and custom prices for you and your business</h2>
                <p className='text-base'>We started Navar Solutions to provide high quality and profesional software to medium and small businesess at affordable prices.
                We believe that your company has every right to be announced to the public in </p>
                <div className='w-full'>
                    example
                </div>
            </div>

        </div>
    );

}