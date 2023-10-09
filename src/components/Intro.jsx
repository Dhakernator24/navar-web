import IntroCard from "./IntroCard.jsx";

const columns = [
	{
		title: 'Who we are',
		description: 'Led by Devops Engineer and AWS Solutions Architect young entrepeneur David Navarro. Navar is \
    dedicated to deliver high quality and low cost solutions to small and large business looking to grow and update',
	},
  {
		title: 'What we do',
		description: 'We specialize in building software for you, because we know your business is important to you, \
    therefore it is important to us. We want to help you transmit your values and your mission as a business to the\
     public in the best way possible',
	},
  {
		title: 'Our principles',
		description: 'We believe that websites and other software solutions should be available for anyone, no matter the technology background. \
    All businesses should have affordable and state of the art technology regardless of its size or niche',
	},
]

function Intro(){

  return (
    <div className="mx-auto grid grid-cols-1 2xl:max-w-[2000px] md:grid-cols-1 lg:grid-cols-3 items-start justify-evenly gap-5 pt-20">
      {columns.map((col) => (
        <IntroCard title={col.title} description={col.description}/>
      ))}
    </div>
  )
}

export default Intro;