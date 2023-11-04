import image_good from '../assets/web_page_image.jpg';

//rgba(191, 244, 229, 0.25)
function ImageHero() {


	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0, 40, 63, 0.4), rgba(0, 0, 0, 0.6)), url(${image_good})`
			}}
			className="flex shadow-2xl my-[80px] h-[calc(100vh-80px)] w-auto bg-cover 
			bg-center bg-no-repeat text-white">
			<div className="flex h-full w-full self-center lg:pl-20 md:pl-5 sm:pl-0">
				<div className='flex flex-col justify-center items-center gap-20'>
					<div
						// style={{
						// 	background: `radial-gradient(circle, rgba(0,40,63,1) 30%, rgba(159,174,183,1) 100%)`
						// }}
						className="text-center rounded-md p-2">
						<h1 className="text-7xl text-logo-white font-oxygen font-light mb-4">
							<span className='text-logo-second'>S</span>oftware <span className='text-logo-second'>S</span>pecialists</h1>
						<p className="text-2xl text-logo-white font-oxygen">Your business matters</p>
					</div>
					<a
						href='/contact'
						className="w-3/5 block bg-logo-main font-oxygen text-logo-white no-underline font-medium text-center
							text-xl py-4 rounded-sm border-[2px] border-logo-secLight hover:shadow-lg hover:text-logo-black hover:scale-105 transition duration-300 ease-in-out hover:bg-logo-secLight"
					>Contact Us!
					</a>
				</div>
			</div>
		</div>
	)
}

export default ImageHero;