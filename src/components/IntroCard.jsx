

function IntroCard({title, description}){

  return (
    <div className="flex flex-col w-full justify-center text-center font-oxygen md:px-2 px-4 grow">
      <div className="text-2xl lg:text-4xl text-logo font-bold grow">{title}</div>
      <div className="texg-lg lg:text-xl text-logo-black font-extralight pt-10 ">{description}</div>
    </div>
  )
}

export default IntroCard;