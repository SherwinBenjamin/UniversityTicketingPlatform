import { Mail } from 'lucide-react';


interface ContactCardProps {
    title:string;
    description:string;
    mail:string;
}

function ContactCard({title, description, mail}: ContactCardProps) {
  return (
    <div className='bg-[#070717] mx-auto  '>
        <a href={`mailto:${mail}`} >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[10rem] border-2 rounded-[0.3rem] hover:scale-[1.02] transition-all duration-500 ease-in-out shadow-md shadow-white">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold font-['montserrat'] text-[1.2rem]  text-slate-100 flex gap-x-2 ">
           <Mail/> {title}
          </h3>
          <div className="text-[1rem] font-['montserrat'] !m-0 py-[0.5rem] font-medium  ">
            <span className="text-slate-100    ">
             {description}
            </span>
          </div>
       
        </div>
        </a>
       
    </div>
  )
}

export default ContactCard