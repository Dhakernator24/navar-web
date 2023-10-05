import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CodeBracketIcon,
	RocketLaunchIcon
} from '@heroicons/react/24/outline'


const services = [


	{
		name: 'Website Design',
		subtitle: 'Reach out with a fully customized website',
		description:
			<ul className='list-disc text-left'>
				<li>Specifically for your business</li>
				<li>Active suport and upgrades over time</li>
				<li>SEO best practices</li>
				<li>Many more!</li>
			</ul>,
		href: '/web',
		icon: GlobeAltIcon
	},
	{
		name: 'Software Solutions',
		subtitle: 'We develop, your life becomes easier',
		description:
			<ul className='list-disc text-left'>
				<li>Web and Mobile Aplications</li>
				<li>Software Architecture</li>
				<li>Automation tools</li>
				<li>Security</li>
			</ul>,
		href: '/sofware', 
		icon: CodeBracketIcon
	},
	{
		name: 'Devops',
		subtitle: 'Deliver faster, cheaper, better',
		description:
			<ul className='list-disc text-left'>
				<li>CICD Implementation</li>
				<li>Cloud Solutions and Migrations</li>
				<li>Microservices based Architectures</li>
				<li>IaC and Infrastructure Management</li>
			</ul>,
	href: '/devops', 
	icon: RocketLaunchIcon 
},
]




function Services() {


	return (
		<div className="w-full h-full bg-white font-oxygen p-10">
			<div className="container px-4 mx-auto">
				<div>
					<div className="text-center my-10">
						<h1 className="font-oxygen text-4xl text-logo-main">
							Our Services
						</h1>
					</div>
					<div
						className="grid z-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-evenly gap-10 pt-10"
					>
						{services.map((service) => (
							<div
								className="rounded-lg bg-logo-white text-center border-[1px] border-logo-second font-oxygen w-full hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
							>
								<div className="w-full pt-3 pb-2 border-b border-logo-second">
									<h2 className="font-bold text-3xl text-logo-main">
										{service.name}
									</h2>
									<p className="text-logo-light text-sm ">
										{service.subtitle}
									</p>
								</div>
								<div className="flex flex-col justify-center items-center">
									<div className="flex flex-col justify-center items-center py-5">
										<service.icon className='w-1/4 h-auto text-logo-main' />
									</div>
									<div className="leading-8 mb-10 text-lg text-logo-main">
										{service.description}
										<div className="w-full mt-10 px-6">
											<a
												href={service.href}
												className="w-full block bg-logo-main text-logo-second no-underline font-medium 
												text-xl py-4 rounded-xl hover:shadow-lg hover:text-logo-main transition duration-200 ease-in-out hover:bg-logo-secLight"
											>Learn More</a
											>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;