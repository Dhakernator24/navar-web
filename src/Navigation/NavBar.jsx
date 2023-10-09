import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../assets/navarIconNoBg.png';
import flag from '../assets/bandera-usa.png'
import { Link } from 'react-router-dom';



const products = [

  { name: 'Website Design', description: 'Get a fully operational profesional website for your business', href: '#', icon: GlobeAltIcon },
  { name: 'Software Solutions', description: 'Come to us with a problem, we will give you an automated software solution for it', href: '#', icon: CodeBracketIcon },
  { name: 'Devops', description: 'Manange your infrastucture, CICD, Deployments, Security, etc. Following the best practises', href: '#', icon: RocketLaunchIcon },
]

const navBarElements = [

  { name: 'Home', href: 'navar-web/', current: 'home'},
  { name: 'Services' },
  { name: 'About Us', href: 'navar-web/about', current: 'about' },
  { name: 'Our Work', href: 'navar-web/work', current: 'work' },
  { name: 'Contact', href: 'navar-web/contact', current: 'contact' },
  //{ name: 'Reviews', href: 'reviews'},
]
const callsToAction = [


  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [current, setCurrent] = useState("home");

  return (
    <div className="bg-white fixed top-0 w-full">
      <nav className="sticky top-0 mx-auto text-logo-main flex items-center justify-between h-auto px-3 lg:px-8" aria-label="Global">
        {
          //logo
        }
        <div className="flex 2xl:justify-center 2xl:pr-48 lg:flex-1">
          <Link to="/navar-web" className="">
            <img className="h-16 w-42" src={logo} alt="" />
          </Link>
        </div>
        {
          //Mobile version
        }
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {
          //navBar elements
        }
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          {
            //navBar DropDown
          }
          {navBarElements.map(item => {
            if (item.name == 'Services') {
              return <Popover className="relative group">
                <Popover.Button className=" py-4 focus:outline-none">
                  <div className="transition ease-in-out duration-500 font-oxygen flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                    <span className="text-base font-oxygen text-logo-main font-semibold leading-6 no-underline "> Services </span>
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </div>
                  <div className='max-w-0 bg-logo-second mt-2 h-1 group-hover:max-w-full group-focus:max-w-0 transition-all duration-50' />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-0 w-screen max-w-md 
                  overflow-hidden rounded-3xl bg-logo-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group/pop relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-logo-secLight"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-logo-light group-hover/pop:text-logo-main" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold no-underline text-logo-main group-hover:text-logo-main">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group/bpop flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 no-underline
                         text-gray-900 hover:bg-logo-light hover:text-logo-main"
                        >
                          <item.icon className="h-5 w-5 flex-none text-logo-light group-hover/bpop:text-logo-secLight" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            } else {
              return <Link to={item.href} onClick={() => setCurrent(item.current)} className='group transition duration-300 py-4 no-underline' >
                <span className="text-base font-oxygen text-logo-main font-semibold leading-6 no-underline "> {item.name} </span>
                {current == item.current && 
                <div className='bg-logo-second mt-2 h-1 max-w-full'/> || 
                <div className='max-w-0 bg-logo-second mt-2 h-1 group-hover:max-w-full transition-all duration-50' />}
              </Link>
            }
          }
          )}



        </Popover.Group>

        <Link to='/es/'className="no-underline hidden 2xl:pl-48 lg:flex font-semibold items-center justify-between 2xl:justify-center lg:flex-1 lg:justify-end">
            <span className='font-oxygen text-logo no-underline'>ENG</span>
            <img className="h-6 w-12 mx-2" src={flag} alt="" />
        </Link>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
