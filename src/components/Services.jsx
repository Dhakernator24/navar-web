import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CodeBracketIcon,
	RocketLaunchIcon
} from '@heroicons/react/24/outline'
import ServiceCard from './ServiceCard';


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
			<div className="container mx-auto">
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
							<ServiceCard
								name={service.name}
								subtitle={service.subtitle}
								iconS={<service.icon className='w-1/4 h-auto text-logo-main'/>}
								description={service.description}
								href={service.href}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;