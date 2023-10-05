import image_good from '../assets/web_page_image.jpg';


function ImageHero() {


	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image_good})`
			}}
			className="relative h-1/2 w-auto max-w-max mx-auto bg-cover 
			bg-center bg-no-repeat text-white bg-gradient-to-r from-black-250 to-black-250 shadow-2xl
			min-h-min">
			<div className="absolute inset-0 flex items-center justify-center pb-20">
				<div className="text-center">
					<h1 className="text-7xl font-oxygen font-light mb-4">Software Consultants</h1>
					<p className="text-2xl font-oxygen">Ready to take your business to the next level?</p>
				</div>
			</div>
		</div>
	)
}

export default ImageHero;