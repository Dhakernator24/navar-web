import IntroCard from "./IntroCard.jsx";

const columns = [
	{
		title: 'Who we are',
		description: 'Led by David Navarro, a driven entrepreneur and accomplished DevOps Engineer, as well as an AWS Solutions Architect, Navar is fervently committed to providing both small and large enterprises with high-caliber, cost-effective solutions tailored to foster growth and modernization.',
	},
  {
		title: 'What we do',
		description: 'We excel in the development of tailored software solutions, recognizing the paramount significance of your business to you. Consequently, it holds equal importance to us. Our primary objective is to assist you in effectively conveying your core values and business mission to the public, employing the highest standards of excellence.',
	},
  {
		title: 'Our principles',
		description: 'We maintain the steadfast belief that websites and other software solutions should be accessible to all, irrespective of one\'s technological proficiency. We are committed to ensuring that every business, regardless of its scale or industry, has access to cost-effective, cutting-edge technology solutions.',
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