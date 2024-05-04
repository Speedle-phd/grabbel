import hearts from '../assets/img/hearts.png'

export type LoversProps = {
   name1?: string
   name2?: string
}

const Lovers = ({ name1, name2 }: LoversProps) => {

   return (
      <>
         <h2 className='relative font-medium'>
            <figure className='absolute w-20 z-[-1] right-[-60px] top-[-30px]'>
               <img src={hearts} alt='hearts' className='w-full h-full' />
            </figure>
            Lovers names are:
         </h2>
         <p className='text-l font-semibold mt-6 italic'>
            {name1 || "Romeo"} <span className="mx-2 text-secondary">&</span> {name2 || "Juliet"}
         </p>
      </>
   )
}

export default Lovers
