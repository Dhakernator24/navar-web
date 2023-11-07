import { useState } from "react";


export default function ProjectComp({ name, description, href, img, index }) {

  const [showDesc, setShowDesc] = useState(false)


  return (
    <>
      {/* deskstop */}
      <div index={index} className="hidden lg:flex flex-col gap-4 items-center">
        <h4 className="text-2xl font-oxygen font-bold text-logo">{name}</h4>
        <a
          href={href}
          style={{
            backgroundImage: `url(${img})`
          }}
          className="relative bg-cover no-underline aspect-video xl:w-[1000px] 2xl:w-[1200px] w-[800px]">
          <div className="group flex items-end justify-end absolute bottom-0 left-0 w-full h-full">
            <div className="group-hover:h-[50%] border-t-[2px] group-hover:border-logo-second flex justify-center items-center bg-black w-full h-0 overflow-hidden transition-all duration-300">
              <p className="text-white text-center text-lg font-oxygen p-10 overflow-hidden">{description}</p>
            </div>
          </div>
        </a>
      </div>

      {/* mobile */}
      <div index={index} className="lg:hidden flex flex-col gap-4 items-start">
        <h4 className="w-full text-center text-xl font-oxygen font-bold text-logo">{name}</h4>
        <div
          style={{
            backgroundImage: `url(${img})`
          }}
          className="relative bg-cover no-underline aspect-video w-full">
          <div className="group flex items-end justify-end absolute bottom-0 left-0 w-full h-full"
            onClick={() => setShowDesc(!showDesc)}>
            <div className={`${showDesc ? 'h-[50%] border-logo-second' : 'h-0'} border-t-[2px] flex flex-col justify-center items-start pl-20 bg-black w-full h-0 overflow-hidden transition-all duration-300`}>
              <p className="text-white text-lg font-oxygen overflow-hidden">{description}</p>
              <a href={href} className="w-fit blockfont-oxygen  no-underline text-center
							text-sm font-bold py-3 px-2 border-[2px] border-logo-second text-logo-white [background-color:transparent] hover:border-logo-secLight hover:text-logo hover:bg-logo-secLight transition-all duration-300"
              >Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}