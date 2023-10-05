import React, { useEffect, useState } from 'react';
import ImageHero from '../components/ImageHero';
import Services from '../components/Services';
import Intro from '../components/Intro';
import NavbarTail from '../Navigation/NavBarTail';

function Home() {

	return (
		<div className='bg-white h-screen w-screen'>
			<ImageHero />
			<Intro/>
			<div className='h-[1px] bg-logo w-1/2 mx-auto mt-32'/>
			<Services />
		</div>

	)

}

export default Home;