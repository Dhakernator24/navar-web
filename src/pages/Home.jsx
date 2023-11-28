import React, { useEffect, useState } from 'react';
import ImageHero from '../components/ImageHero';
import Services from '../components/Services';
import Intro from '../components/Intro';
import NavbarTail from '../Navigation/NavBar';
import Team from '../components/Team';

function Home({className, setCurrent}) {

	return (
		<div className={`${className} bg-white h-fit w-screen`}>
			<ImageHero setCurrent={setCurrent} />
			<Intro/>
			<div className='h-[1px] bg-logo w-1/2 mx-auto my-16 lg:my-32'/>
			<Services setCurrent={setCurrent}/>
			<div className='h-[1px] bg-logo w-1/2 mx-auto my-16 lg:my-32'/>
			<Team/>
		</div>
	)

}

export default Home;