


export default function ContactCard(){

  return (
    <div className="py-10 px-4 m-2 rounded-md bg-logo grow md:w-[400px] w-[350px] flex flex-col items-start justify-start text-white font-oxygen">
      <div className="w-full text-[24px] font-semibold">Contact Information </div>

      <div className="w-full text-[16px] mt-3 font-normal">Phone Number</div>
      <a className="no-underline w-full text-[14px] mt-1 font-light" href="tel:5404701142"><span className=" text-white decoration-logo underline underline-offset-4">+1 (540) 470-1142</span></a>

      <div className="w-full text-[16px] mt-3 font-normal">Email</div>
      <a  href='mailto:contact@navarsolutions.com' className="no-underline w-full text-[14px] mt-1 font-light"><span className=" text-white decoration-logo underline-offset-4 underline">contact@navarsolutions.com</span></a>

      <div className=""></div>
    </div>


  )
}