import image_good from '../assets/web_page_image.jpg';


function ImageHero() {


	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image_good})`
			}}
			className="my-[80px] h-3/5 w-auto max-w-max mx-auto bg-cover 
			bg-center bg-no-repeat text-white">
			<div className="flex h-full w-full justify-start items-end lg:pl-20 md:pl-5 sm:pl-0 pb-28">
				<div 
				// style={{
				// 	background: `radial-gradient(circle, rgba(0,40,63,1) 30%, rgba(159,174,183,1) 100%)`
				// }}
				className="text-center rounded-md p-2">
					<h1 className="text-7xl text-logo-white font-oxygen font-light mb-4">Software Specialists</h1>
					<p className="text-2xl text-logo-white font-oxygen">Your business matters</p>
				</div>
			</div>
		</div>
	)
}

export default ImageHero;