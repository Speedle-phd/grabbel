import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Lovers from './components/Lovers'
import LoversModal from './components/LoversModal'
import useLocalStorage from './hooks/useLocalStorage'
import Chart from './components/Chart'
import RatingModal from './components/RatingModal'


function App() {
   const [{name1, name2}, setValue] = useLocalStorage<{name1: string | undefined; name2: string | undefined}>('lovers', {name1: undefined, name2: undefined})

   const [{points1, points2}, setPoints] = useLocalStorage<{points1: number; points2: number}>('points', {points1: 0, points2: 0})

   const [percentage, setPercentage] = useState(() => {
      const total = points1 + points2
      if (total === 0) return 50
      return Math.round((points2 / total) * 100)
   })

   const modalRef = useRef<HTMLDialogElement>(null)
   const ratingRef = useRef<HTMLDialogElement>(null)
   const appRef = useRef<HTMLDivElement>(null)




   const close = () => {
      modalRef.current?.close()
   }
   const close2 = () => {
      ratingRef.current?.close()
   }

   function clickHandler () {
      modalRef.current?.showModal()
   }

   useEffect(() => {
      (!name1 && !name2) && modalRef.current?.showModal()
   }, [name1, name2])

   useEffect(() => {
      console.log(points1)
      setPercentage(() => {
         const total = points1 + points2
         if (total === 0) return 50
         return Math.round((points2 / total) * 100)
      })
   }, [points1, points2])

   useEffect(() => {
      appRef.current?.style.setProperty('--_percent', percentage.toString() + "%")
   }, [percentage])

   return (
      <div
         ref={appRef}
         className='flex flex-col items-center gap-4
         max-w-[min(calc(100vw-2rem),_70rem)] 
         mx-auto min-h-[calc(100dvh-2rem)] 
         py-4
         mt-2
         app
         border-[1px] border-accent rounded-lg
      '
      >
         <Header />
         <Lovers name1={name1 || 'Romeo'} name2={name2 || 'Juliet'} />
         <button
            onClick={clickHandler}
            className='
            text-[0.6rem] bg-accent py-1 px-2 rounded-lg
         '
         >
            Namen korrigieren
         </button>

         <Chart name1={name1 || 'Romeo'} name2={name2 || 'Juliet'} />

         <button
            onClick={() => ratingRef.current?.showModal()}
            className='mt-10
            bg-accent text-text rounded-lg px-4 py-2
            hover:bg-primary transition-all
         '
         >
            Bewerte die jüngste Grabbelattacke
         </button>

         <dialog
            ref={ratingRef}
            className='left-1/2 translate-x-[-50%] w-[min(calc(100%-4rem),70rem)]'
         >
            <RatingModal
               close2={close2}
               name1={name1 || 'Romeo'}
               name2={name2 || 'Juliet'}
               setPoints={setPoints}
               points1={points1}
               points2={points2}
            />
         </dialog>

         <dialog ref={modalRef} className='left-1/2 translate-x-[-50%]'>
            <LoversModal
               setValue={setValue}
               close={close}
               setPoints={setPoints}
            />
         </dialog>


         <div className="text-[0.5rem] bottom-0 absolute">
            Verändert man die Namen wird der Stand zurückgesetzt!
         </div>
      </div>
   )
}

export default App
