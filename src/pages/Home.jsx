import React, { useEffect, useState } from 'react';
import ImageHero from '../components/ImageHero';
import Services from '../components/Services';

function Home() {

	return (
		<div className='bg-white h-screen w-screen'>
			<ImageHero />
			<Services />
		</div>

	)

}

export default Home;