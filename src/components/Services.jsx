import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CloudIcon,
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
		href: '/web-design',
		icon: GlobeAltIcon
	},
	{
		name: 'Cloud Solutions',
		subtitle: 'Upgrade your infrastructure to the latests',
		description:
			<ul className='list-disc text-left'>
				<li>AWS, Azure, GCP</li>
				<li>Solutions Architecture</li>
				<li>Cloud Migrations</li>
				<li>Cost Optimization</li>
			</ul>,
		href: '/cloud-solutions',
		icon: CloudIcon
	},
	{
		name: 'Devops',
		subtitle: 'Deliver faster, cheaper, safer, better',
		description:
			<ul className='list-disc text-left'>
				<li>CICD Implementation</li>
				<li>Secret Management and DevSecOps</li>
				<li>Microservices based Architectures</li>
				<li>IaC and Infrastructure Management</li>
			</ul>,
		href: '/devops',
		icon: RocketLaunchIcon
	},
]




function Services({ setCurrent }) {


	return (
		<div className="w-full h-fit bg-white font-oxygen overflow-hidden lg:pl-10 lg:pr-10 pl-3 pr-3">
			<div className="container mx-auto">
				<div>
					<div className='flex flex-row w-full lg:justify-center items-center mb-16 gap-4'>
						<div className='w-3 h-10 bg-logo-second' />
						<div className="text-logo text-4xl font-bold font-oxygen">Our Services</div>
					</div>
					<div
						className="grid h-full z-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10"
					>
						{services.map((service) => (
							<ServiceCard
								name={service.name}
								subtitle={service.subtitle}
								iconS={<service.icon className='w-1/4 h-auto text-logo-main' />}
								description={service.description}
								href={service.href}
								setCurrent={setCurrent}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;