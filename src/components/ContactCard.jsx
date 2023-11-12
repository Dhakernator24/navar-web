


export default function ContactCard(){

  return (
    <div className="self-stretch px-5 py-10 bg-logo lg:w-[40%] border-0 w-full justify-self-center lg:justify-self-start flex flex-col items-center lg:items-start justify-center lg:justify-start text-white font-oxygen [text-align:center] lg:text-right">
      <div className="w-full text-3xl font-bold">CONTACT INFORMATION</div>

      <div className="w-full text-xl mt-3 font-normal">Phone Number</div>
      <a className="no-underline w-full text-lg mt-1 font-bold" href="tel:5404701142"><span className=" text-white decoration-logo underline underline-offset-4">+1 (540) 470-1142</span></a>

      <div className="w-full text-xl mt-3 font-normal">Email</div>
      <a  href='mailto:contact@navarsolutions.com' className="no-underline w-full text-lg mt-1 font-bold"><span className=" text-white decoration-logo underline-offset-4 underline">contact@navarsolutions.com</span></a>

      <div className=""></div>
    </div>


  )
}