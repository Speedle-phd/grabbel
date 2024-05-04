import heart from '../assets/img/heart.png';
import { LoversProps } from './Lovers';



const Chart = ({ name1, name2 }: LoversProps) => {
   return (
      <div className='mt-4 relative'>
         <span className='absolute bottom-[-10px] left-[-30px] text-secondary uppercase font-bold'>
            {name1 || 'Romeo'}
         </span>
         <span className='absolute bottom-[-10px] right-[-30px] text-primary uppercase font-bold'>
            {name2 || 'Juliet'}
         </span>
         <h2 className='text-xl font-semibold mb-4 text-center uppercase'>
            Grabbel-Stand
         </h2>
         <div className='rounded-full aspect-square w-60 bg-white percent relative'>
            <div
               className='absolute inset-12 rounded-full
               glass flex items-center justify-center
            '
            >
               <img src={heart} alt='heart' width={'100px'} />
            </div>
         </div>
      </div>
   )
}



export default Chart
