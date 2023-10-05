

function IntroCard({title, description}){

  return (
    <div className="flex flex-col w-full justify-center text-center font-oxygen 2xl:px-20 xl:px-20 md:px-10 grow">
      <div className="text-4xl text-logo font-bold grow">{title}</div>
      <div className="text-xl text-logo-light pt-10">{description}</div>
    </div>
  )
}

export default IntroCard;