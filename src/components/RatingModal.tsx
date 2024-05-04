import Underline from './Underline'

type RatingModalProps = {
   close2: () => void
   setPoints: (v: { points1: number; points2: number }) => void
   name1?: string
   name2?: string
   points1: number
   points2: number
}

const RatingModal = ({ close2, name1, name2, points1, points2, setPoints }: RatingModalProps) => {
   function submitHandler(e: React.FormEvent) {
      e.preventDefault()
      const fd = new FormData(e.currentTarget as HTMLFormElement)
      console.log([...fd.entries()])
      const name = fd.get('rating-name')!
      const duration = +(fd.get('rating-duration') || 1)
      const intensity = +fd.get('rating-intensity')!
      const tenderness = +fd.get('rating-tenderness')!
      console.log(name, duration, intensity, tenderness)
      const points = (intensity + tenderness) * duration/60
      switch(name){
         case name1:
            setPoints({points2, points1: points + points1})
            break
         case name2:
            setPoints({ points1, points2: points + points2 })
            break
      }
      (e.currentTarget as HTMLFormElement).reset()
      close2()

   }

   return (
      <>
         <button
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors'
            onClick={close2}
         >
            <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-6 w-6'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
               />
            </svg>
         </button>
         <form
            onSubmit={submitHandler}
            className='flex flex-col gap-4'
            method='POST'
         >
            <header className='flex justify-center flex-col items-center gap-4'>
               <h2 className='font-semibold'>Sei kritisch beim Rating!</h2>
               <Underline />
            </header>
            <div className='form-control grid gap-2'>
               <label
                  htmlFor='rating-name'
                  className='text-emerald-700 font-bold'
               >
                  Grabbler
               </label>
               <select name='rating-name' id='rating-name' className='border-2'>
                  <option value={name1 || 'Romeo'}>{name1 || 'Romeo'}</option>
                  <option value={name2 || 'Juliet'}>{name2 || 'Juliet'}</option>
               </select>
            </div>
            <div className='form-control grid gap-2'>
               <label
                  htmlFor='rating-duration'
                  className='text-emerald-700 font-bold'
               >
                  Dauer in Minuten
               </label>
               <input
                  type='number'
                  name='rating-duration'
                  id='rating-duration'
                  className="border-2"
                  step={1}
                  min={0}

               />
            </div>
            <div className='form-control grid gap-2'>
               <label
                  htmlFor='rating-intensity'
                  className='text-emerald-700 font-bold'
               >
                  Intensität
               </label>
               <input
                  type='range'
                  name='rating-intensity'
                  id='rating-intensity'
                  min='0'
                  max={10}
                  step={1}
               />
            </div>
            <div className='form-control grid gap-2'>
               <label
                  htmlFor='rating-tenderness'
                  className='text-emerald-700 font-bold'
               >
                  Zärtlichkeit
               </label>
               <input
                  type='range'
                  name='rating-tenderness'
                  id='rating-tenderness'
                  min='0'
                  max={10}
                  step={1}
               />
            </div>
            <input
               className='
               bg-primary text-text rounded-lg px-4 py-2
               hover:bg-accent transition-all
            '
               type='submit'
               value='Bewertung abschicken!'
            />
         </form>
      </>
   )
}

export default RatingModal
