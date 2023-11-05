import { useState } from "react";


export default function ProjectComp({ name, description, href, img, index }) {


  return (
    <div index={index} className="hidden lg:flex flex-col gap-4 items-start">
      <h4 className="text-2xl font-oxygen text-logo">{name}</h4>
      <a
        href={href}
        style={{
          backgroundImage: `url(${img})`
        }}
        className="relative bg-cover no-underline aspect-video w-[80vw]">
          <div className="group absolute top-0 left-0 w-full h-full">
            <div className="group-hover:w-full group-hover:bg-logo-secLight/90 w-0 h-full overflow-hidden transition-all duration-500">
              <p className="text-logo text-xl font-oxygen p-10 whitespace-nowrap overflow-hidden">{description}</p>
            </div>
          </div>
      </a>
    </div>
  )
}