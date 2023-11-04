import david from '../assets/david.jpg'


function Team() {


  return (
    <div className="container mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-logo text-4xl font-bold font-oxygen mb-10">Meet the Team</div>
        <div className="flex w-full flex-row justify-start gap-20 items-center">
          <div className='h-[300px] bg-logo w-[300px] bg-cover bg-center rounded-full'
          style={{backgroundImage:`url(${david})`}}/>
          
          <div className="flex flex-col justify-start items-start">
            <div className="text-logo text-3xl font-semibold font-oxygen">DAVID NAVARRO</div>
            <div className="text-logo text-xl font-oxygen">CEO</div>
            <div className="text-logo-light text-xl font-oxygen">Founder of Navar, Software Engineer</div>
          </div>
          
        </div>

      </div>

    </div>
  )
}


export default Team;