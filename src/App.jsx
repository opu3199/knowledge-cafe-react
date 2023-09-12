
import { useState } from 'react'
import './App.css'

import Blog from './Blog'
import Heads from './Heads'
import Reading from './reading'

function App() {
  const [reading,setreading]=useState([])
  const [readingtime,setreadingtime]=useState(0)

  const handlreading=blog=>{
    const newbookmark=[...reading,blog]
    setreading(newbookmark)
  }

  const readingtimehandle=(id,time)=>{
    const newreadingtime=(readingtime + time)
    setreadingtime(newreadingtime)

   const remainingbook=reading.filter(readings=>readings.id !== id)
   setreading(remainingbook)

  }
  
  return ( 
    <>  
     <div className='mx-auto container max-w-6xl    mx-6'>
      <Heads></Heads>
      <div className='md:flex  py-10  mx-5 gap-10 '>
      <Blog handlreading={handlreading}  readingtimehandle={readingtimehandle}></Blog>
      <Reading reading={reading} readingtime={readingtime}></Reading>
      </div>
      </div>
      
      
    </>
  )
}

export default App
