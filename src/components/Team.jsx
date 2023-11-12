import david from '../assets/david.jpg'


function Team() {


  return (
    <div className="container mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-row w-full justify-center items-center mb-16 gap-4'>
          <div className='w-3 h-10 bg-logo-second' />
          <div className="text-logo text-4xl font-bold font-oxygen">Meet the Founder</div>
        </div>
        
        <div className="flex w-full md:flex-row flex-col justify-center gap-20 items-center">
          <div className='h-[300px] bg-logo w-[300px] bg-cover bg-center rounded-full'
            style={{ backgroundImage: `url(${david})` }} />

          <div className="flex flex-col justify-start items-center md:items-start">
            <div className="text-logo text-3xl font-semibold font-oxygen ">DAVID NAVARRO</div>
            <div className="text-logo text-xl font-oxygen">CEO</div>
            <div className="text-logo-light text-xl font-oxygen">Founder of Navar, Software Engineer</div>
            <a href='/about' className='no-underline group flex flex-col cursor-pointer'>
              <div className='text-logo font-bold text-xl mt-4'>OUR STORY</div>
              <div className='w-full lg:w-[20%] bg-logo-second group-hover:w-full h-1 transition-all duration-300' />
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}


export default Team;