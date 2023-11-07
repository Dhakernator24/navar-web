import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CodeBracketIcon,
	RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

function ServiceCard({ name, subtitle, description, iconS, href, setCurrent }) {

	return (
		<div
			className="flex flex-col h-full bg-logo-white text-center border-[1px] border-logo-second font-oxygen w-full lg:hover:shadow-2xl transition duration-200 ease-in"
		>
			<div className="w-full pt-3 pb-2 border-b border-logo-second">
				<h2 className="font-bold text-3xl text-logo-main">
					{name}
				</h2>
				<p className="text-logo-light text-sm ">
					{subtitle}
				</p>
			</div>
			<div className="w-full flex flex-col h-full justify-between items-center">
				<div className='w-full px-2 flex flex-col justify-start'>
					<div className="flex flex-col justify-between items-center pt-5">
						{iconS}
					</div>
					<div className="leading-8 mt-4 text-lg text-logo-main">
						{description}
					</div>
				</div>

				<div className="w-full h-fit py-8 px-6">
					<a
						href={href}
						onClick={() => setCurrent('services')}
						className="w-full block bg-logo-main text-logo-second no-underline font-medium 
												text-xl py-4 hover:shadow-lg hover:text-logo-main transition duration-200 ease-in-out hover:bg-logo-secLight"
					>Learn More
					</a>
				</div>
			</div>
		</div>
	)
}
export default ServiceCard;
