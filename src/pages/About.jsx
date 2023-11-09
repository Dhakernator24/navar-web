import React, { useEffect, useState } from 'react';
import david from '../assets/david.jpg'
import solutions_aws from '../assets/solutions_aws.png'

export default function About({ className }) {

    const paraStyle = ''

    return (
        <div className={`${className} min-h-[calc(100vh-80px)]`}>
            <div className='font-oxygen text-logo flex flex-col w-full'>
                <div className='bg-logo-secLight w-full h-fit py-10 px-40 border-b-[4px] border-logo'>
                    <h1 className='lg:text-4xl text-2xl font-bold'>OUR STORY</h1>
                    <h2 className='lg:text-2xl text-xl font-light'>Crafting Software Solutions with Heart and Expertise</h2>
                </div>

                <div className='text-logo text-lg px-40 py-20'>
                    <p className={`${paraStyle}`}>
                        Founded in the heart of Augusta County, Virginia, Navar Solutions emerged from a vision to bridge the technological gap for small and midsize businesses in our community. What began as a modest venture in a garage has evolved into a dynamic force in the software solutions industry. Our journey is rooted in a deep commitment to delivering high-quality software and website solutions tailored to the unique needs of local enterprises.
                    </p>
                    <p className={`${paraStyle}`}>
                        With a steadfast belief in the transformative power of technology, we set out to empower businesses in Augusta County and beyond. Our mission is clear: to bring the benefits of cutting-edge software and digital presence to a more rural area, fostering growth and innovation in the local business landscape.
                    </p>
                    <p className={`${paraStyle}`}>
                        At Navar Solutions, we understand that the foundation of any successful partnership lies in unwavering dedication to quality, integrity, and client satisfaction. As we continue to serve the vibrant community that we call home, we remain open to the possibilities that the future holds. While our roots may be firmly planted in local soil, our aspirations reach far beyond, aspiring to extend our expertise and solutions to larger projects and corporations in the ever-evolving digital landscape.
                    </p>
                    <p className={`${paraStyle}`}>
                        Join us on this journey of innovation, where every line of code and pixel on the screen is meticulously crafted to elevate your business. Together, let's write the next chapter in the story of Navar Solutions.
                    </p>
                </div>

                {/* <div className='h-[1px] self-center w-[70%] bg-logo' /> */}


                <div className='flex flex-col mb-20 px-40 w-full gap-10'>
                    <div className='flex flex-row w-full gap-3 items-center'>
                        <div className='bg-logo-second w-2 h-10' />
                        <h3 className='text-3xl text-logo font-bold mb-0'>About David</h3>
                    </div>

                    <div className='flex flex-row w-full items-start justify-between flex-grow gap-5'>


                        <div className='flex flex-col shrink w-[60%] h-fit text-lg'>
                            <p className={`${paraStyle}`}>
                                David is the founder of Navar Solutions, he brings extensive expertise and dedication to software engineering. He holds a Bachelor's degree in Software Engineering from the prestigious Universidad Politécnica de Madrid. With over two years of experience as a seasoned DevOps engineer and website developer/designer, David excels in his field. As an AWS Solutions Architect Associate Certified professional, he provides clients with unparalleled expertise. Fluent in both Spanish and English, David approaches his work with unwavering diligence and a commitment to quality. His focus on delivering exceptional solutions is central to Navar Solutions' success.
                            </p>
                            {/* <p className={`${paraStyle}`}>
                                David, the founder and driving force behind Navar Solutions, brings a wealth of expertise and dedication to the field of software engineering. Born and raised in Madrid, Spain, he embarked on his academic journey at the prestigious Universidad Politécnica de Madrid, earning a Bachelor's degree in Software Engineering. At the age of 22, driven by a relentless pursuit of excellence, David made a pivotal decision to relocate to the United States, ultimately finding his calling in Augusta County, Virginia.
                            </p>
                            <p className={`${paraStyle}`}>
                                David's affinity for Augusta County was sparked during a transformative exchange program in his junior year of high school, where he immersed himself in the local community, leaving an indelible mark on his path. His deep-seated connection to the area motivated him to establish Navar Solutions, a testament to his unwavering commitment to the community he holds dear. With over two years of experience as a seasoned DevOps engineer and website developer and designer, David has honed his skills to a level of unparalleled proficiency. As an AWS Solutions Architect Associate Certified professional, he exemplifies a commitment to mastery in his field, providing clients with a level of expertise that is second to none.
                            </p>
                            <p className={`${paraStyle}`}>
                                Fluent in both Spanish and English, David approaches his work with an unyielding work ethic and an uncompromising dedication to quality. He considers no job complete until the client's satisfaction stands at an unequivocal 100%. With every project, David's singular focus remains on delivering solutions of exceptional caliber, a hallmark of his character and the cornerstone of Navar Solutions' success.
                            </p> */}
                        </div>
                        <div className='flex flex-col w-[40%] flex-grow items-center gap-10'>
                            <div className='h-[300px] w-[300px] bg-logo bg-cover bg-center rounded-full flex items-end justify-end'
                                style={{ backgroundImage: `url(${david})` }} >
                                <img src={solutions_aws} className='h-[110px] mr-5 w-[110px] bg-cover bg-center rounded-full' />
                            </div>

                        </div>


                    </div>
                </div>


            </div>

        </div >
    );

}