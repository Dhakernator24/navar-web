import { Link } from 'react-router-dom';
import image_good from '../assets/web_page_image.jpg';

//rgba(191, 244, 229, 0.25)
function ImageHero({setCurrent}) {


	return (
		<div
			style={{
				backgroundImage: `linear-gradient(to right, rgba(0, 40, 63, 0.8), rgba(0, 40, 63, 0.2)), url(${image_good})`
			}}
			className="flex shadow-2xl my-[80px] h-[calc(100vh-80px)] w-auto bg-cover 
			bg-center bg-no-repeat text-white">
			<div className="flex h-full w-full self-center lg:pl-16 md:pl-5 sm:pl-0">
				<div className='flex flex-col justify-center items-start gap-10'>
					<div
						// style={{
						// 	background: `radial-gradient(circle, rgba(0,40,63,1) 30%, rgba(159,174,183,1) 100%)`
						// }}
						className="">
						<h1 className="text-7xl font-light text-logo-white font-oxygen mb-4">
							<span className='text-logo-second'>S</span>oftware <span className='text-logo-second'>S</span>pecialists</h1>
						<p className="text-2xl text-logo-white font-oxygen">Your business matters</p>
					</div>
					<a
						onClick={() => setCurrent("contact")}
						href='/contact'
						className="w-[200px] blockfont-oxygen  no-underline text-center
							text-xl font-bold py-4 border-[1px] border-logo-white text-logo-white [background-color:transparent] hover:border-logo-secLight hover:text-logo hover:bg-logo-secLight transition-all duration-300"
					>Contact Us!
					</a>
				</div>
			</div>
		</div>
	)
}

export default ImageHero;