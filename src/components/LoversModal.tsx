

type LoversModalProps = {
   setValue: (value: { name1: string; name2: string }) => void
   setPoints: (value: { points1: number; points2: number }) => void
   close: () => void
}

import { useRef } from "react"
import Underline from "./Underline"

const LoversModal = ({ setPoints, setValue, close }: LoversModalProps) => {
   const name1Ref = useRef<HTMLInputElement>(null)
   const name2Ref = useRef<HTMLInputElement>(null)

   function submitHandler(e: React.FormEvent) {
      e.preventDefault()
      const name1 = name1Ref.current?.value
      const name2 = name2Ref.current?.value

      if (!name1 || !name2) return
      setValue({ name1, name2 })
      setPoints({ points1: 0, points2: 0 })
      localStorage.setItem('points', JSON.stringify({ points1: 0, points2: 0 }))
      localStorage.setItem('lovers', JSON.stringify({ name1, name2 }))
      e.currentTarget.closest('dialog')?.close()
   }

   return (
      <>
         {/* LoversForm */}
         <button
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors'
            onClick={close}
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
            className='flex flex-col items-center gap-4'
            method='POST'
         >
            <h2 className='text-xl font-bold text-pretty text-center'>
               Gib hier die Namen der Grabbler ein:
            </h2>
            <Underline />
            <div className='form-control grid'>
               <label htmlFor='name1'>Grabbelherausforderer 1</label>
               <input
                  ref={name1Ref}
                  className='border-2 rounded-sm px-4 py-2'
                  type='text'
                  id='name1'
                  name='name1'
               />
            </div>
            <div className='form-control grid'>
               <label htmlFor='name2'>Grabbelherausforderer 2</label>
               <input
                  ref={name2Ref}
                  className='border-2 rounded-sm px-4 py-2'
                  type='text'
                  id='name2'
                  name='name2'
               />
            </div>
            <input
               className='
               bg-primary text-text rounded-lg px-4 py-2
               hover:bg-accent transition-all
            '
               type='submit'
               value='Speichern'
            />
         </form>
      </>
   )
}

export default LoversModal
